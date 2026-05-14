/**
 * UCI Tools — PPC base / perfusion cerebral.
 * No incluye DVNO ni DTC.
 */
(function (g) {
  'use strict';

  function ppcStatus(ppc, meta) {
    meta = meta || 60;
    if (ppc >= 60 && ppc <= 70) return ['badge-green', 'En meta (60-70 mmHg)'];
    if (ppc > 70) return ['badge-green', 'Sobre meta (>' + ppc.toFixed(0) + ')'];
    if (ppc >= meta) return ['badge-yellow', 'En meta mínima'];
    if (ppc >= 50) return ['badge-yellow', 'Límite inferior (<60)'];
    return ['badge-red', 'HIPOPERFUSIÓN (<50)'];
  }

  function pamAutoCalc(pamId, pasId, padId) {
    var pas = parseFloat(document.getElementById(pasId)?.value);
    var pad = parseFloat(document.getElementById(padId)?.value);
    if (!isNaN(pas) && !isNaN(pad)) {
      document.getElementById(pamId).value = Math.round((pas + 2 * pad) / 3);
    }
  }

  function calcPPC() {
    if (!g.validate([{ id: 'ppc-pam', label: 'PAM' }, { id: 'ppc-pic', label: 'PIC' }])) return;
    if (!g.validateRanges([
      { id: 'ppc-pam', label: 'PAM', min: 30, max: 180 },
      { id: 'ppc-pic', label: 'PIC', min: 0, max: 80 },
      { id: 'ppc-meta', label: 'Meta PPC', min: 40, max: 90 }
    ])) return;
    var pam = parseFloat(g.elCached('ppc-pam').value);
    var pic = parseFloat(g.elCached('ppc-pic').value);
    var meta = parseFloat(g.elCached('ppc-meta').value) || 60;
    var ppc = pam - pic;
    var diff = ppc - meta;
    g.elCached('ppc-val').textContent = ppc.toFixed(0) + ' mmHg';
    g.elCached('ppc-diff').textContent = (diff >= 0 ? '+' : '') + diff.toFixed(0) + ' mmHg vs meta';
    var _a = ppcStatus(ppc, meta), cls = _a[0], txt = _a[1];
    var b = g.elCached('ppc-badge');
    b.className = 'result-badge ' + cls;
    b.textContent = txt;
    g.elCached('ppc-result').style.display = 'grid';
    g.updatePPCResumen();
  }

  g.ppcStatus = ppcStatus;
  g.pamAutoCalc = pamAutoCalc;
  g.calcPPC = calcPPC;
})(typeof window !== 'undefined' ? window : global);
