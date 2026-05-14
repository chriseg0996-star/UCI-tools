/**
 * UCI Tools — DVNO (oximetria cerebral) para panel PPC.
 * Requiere ppcStatus/updatePPCResumen definidos globalmente.
 */
(function (g) {
  'use strict';

  function calcDVNO() {
    var od = parseFloat(g.elCached('dvno-od').value);
    var oi = parseFloat(g.elCached('dvno-oi').value);
    var pam = parseFloat(g.elCached('dvno-pam').value);
    if (isNaN(od) && isNaN(oi)) return;

    var prom = (!isNaN(od) && !isNaN(oi)) ? (od + oi) / 2 : (!isNaN(od) ? od : oi);

    // Robba 2019: PIC = -6.72 + 4.04 × DVNO
    var picRobba = -6.72 + 4.04 * prom;
    // Maissan 2015: PIC = (DVNO − 3.57) / 0.065 + 10
    var picMaissan = (prom - 3.57) / 0.065 + 10;
    // Promedio de fórmulas
    var picProm = (picRobba + picMaissan) / 2;

    g.elCached('dvno-prom').textContent = prom.toFixed(2) + ' mm';
    g.elCached('dvno-pic').textContent =
      picRobba.toFixed(1) + ' mmHg (Robba) / ' + picMaissan.toFixed(1) + ' mmHg (Maissan)';

    var b = g.elCached('dvno-badge');
    if (prom < 5.0) { b.className = 'result-badge badge-green'; b.textContent = 'DVNO normal (<5.0 mm) — PIC probablemente normal'; }
    else if (prom < 5.8) { b.className = 'result-badge badge-yellow'; b.textContent = 'DVNO límite (5.0-5.8) — vigilar, repetir'; }
    else { b.className = 'result-badge badge-red'; b.textContent = 'DVNO elevado (≥5.8 mm) — HTIC probable'; }

    if (!isNaN(pam)) {
      var ppcEst = pam - picProm;
      g.elCached('dvno-ppc').textContent = ppcEst.toFixed(0) + ' mmHg (estimada)';
      var _a = g.ppcStatus(ppcEst), cls = _a[0], txt = _a[1];
      var pb = g.elCached('dvno-ppc-badge');
      pb.className = 'result-badge ' + cls; pb.textContent = txt;
    }

    g.elCached('dvno-result').style.display = 'grid';
    g._dvno_pic = picProm;
    g._dvno_dvno = prom;
    g.updatePPCResumen();
  }

  g.calcDVNO = calcDVNO;
})(typeof window !== 'undefined' ? window : global);
