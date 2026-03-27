// UCI Tools — Service Worker
// © Christopher Godines

const CACHE_NAME = 'uci-tools-v3';

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
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (url.includes('api.openai.com')) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (event.request.method === 'GET' && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match(assetUrl('./index.html'));
        }
      });
    })
  );
});
