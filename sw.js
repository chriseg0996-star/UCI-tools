// UCI Tools — Service Worker v5
// stale-while-revalidate + update notification

const CACHE_NAME = 'uci-tools-v5';

function assetUrl(path) {
  return new URL(path, self.location.href).href;
}

const ASSETS = [
  assetUrl('./index.html'),
  assetUrl('./manifest.json'),
  assetUrl('./icon-192.png'),
  assetUrl('./icon-512.png'),
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(
        ASSETS.map(url =>
          cache.add(url).catch(() => {
            console.warn('[SW] No cacheado:', url);
          })
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => {
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
        });
      });
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  if (url.includes('api.openai.com') || url.includes('api.qrserver.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => {
          if (!cached && event.request.mode === 'navigate') {
            return cache.match(assetUrl('./index.html'));
          }
          return undefined;
        });

        return cached || networkFetch;
      })
    )
  );
});
