/** UCI Tools — UI de paneles de evidencia/bibliografía (depende de evidData y evidenceByCalc en evidence.js) */
(function () {
  'use strict';

  window.loadedEvidence = window.loadedEvidence || new Set();

  function toggleEvid(id) {
    const body = document.getElementById('evid-body-' + id);
    const toggle = document.getElementById('evid-toggle-' + id);
    body.classList.toggle('open');
    toggle.classList.toggle('open');
  }

  function buildEvid(id) {
    const d = window.evidData[id];
    if (!d) return '';
    let html = `<div class="evid-panel">
    <div class="evid-toggle" id="evid-toggle-${id}" onclick="toggleEvid('${id}')">
      <span>📚 Bibliografía y Evidencia</span>
      <span class="evid-arrow">▾</span>
    </div>
    <div class="evid-body" id="evid-body-${id}">`;

    if (d.interpretation) {
      html += `<div class="evid-section">
      <div class="evid-section-title">Interpretación</div>
      <div class="evid-interp">${d.interpretation}</div>
    </div>`;
    }
    if (d.formula || (d.refs && d.refs.length)) {
      html += `<div class="evid-section"><div class="evid-section-title">Referencias</div>`;
      if (d.formula) {
        html += `<div class="evid-ref"><span class="evid-year">Fórmula</span> — ${d.formula.replace(/\n/g, ' · ')}</div>`;
      }
      if (d.refs && d.refs.length) {
        d.refs.forEach(r => {
          html += `<div class="evid-ref"><span class="evid-year">${r.year}</span> — <b>${r.authors}</b>. ${r.title}. <i>${r.journal}</i>${r.doi ? '. <a href="https://doi.org/' + r.doi + '" target="_blank" style="color:var(--accent);font-size:10px;">DOI</a>' : ''}.</div>`;
        });
      }
      html += `</div>`;
    }
    html += `</div></div>`;
    return html;
  }

  function renderEvidencePanel(pair) {
    const el = document.getElementById(pair[0]);
    if (!el || window.loadedEvidence.has(pair[0])) return;
    el.innerHTML = buildEvid(pair[1]);
    window.loadedEvidence.add(pair[0]);
  }

  function ensureEvidenceForCalc(calcId) {
    const entry = window.evidenceByCalc[calcId];
    if (!entry) return;
    if (Array.isArray(entry[0])) {
      for (let i = 0; i < entry.length; i++) renderEvidencePanel(entry[i]);
      return;
    }
    renderEvidencePanel(entry);
  }

  window.toggleEvid = toggleEvid;
  window.buildEvid = buildEvid;
  window.ensureEvidenceForCalc = ensureEvidenceForCalc;
})();
