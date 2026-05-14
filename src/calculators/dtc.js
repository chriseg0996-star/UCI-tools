/**
 * UCI Tools — Doppler transcraneal (DTC) para panel PPC.
 * Requiere ppcStatus/updatePPCResumen definidos globalmente.
 */
(function (g) {
  'use strict';

  function calcDTC() {
    var vs = parseFloat(g.elCached('dtc-vs').value);
    var vd = parseFloat(g.elCached('dtc-vd').value);
    var vm = parseFloat(g.elCached('dtc-vm').value);
    var pam = parseFloat(g.elCached('dtc-pam').value);
    var pas = parseFloat(g.elCached('dtc-pas').value);
    var pad = parseFloat(g.elCached('dtc-pad').value);
    if (isNaN(vs) || isNaN(vd)) return;

    // Si no hay Vm calculada, estimar: Vm ≈ (Vs + 2×Vd) / 3
    var vmCalc = !isNaN(vm) ? vm : (vs + 2 * vd) / 3;

    // Índice de Pulsatilidad (Gosling): IP = (Vs − Vd) / Vm
    var ip = (vs - vd) / vmCalc;
    // Índice de Resistencia (Pourcelot): IR = (Vs − Vd) / Vs
    var ir = (vs - vd) / vs;

    g.elCached('dtc-ip').textContent = ip.toFixed(3);
    g.elCached('dtc-ir').textContent = ir.toFixed(3);

    // PIC Bellner 2004: PIC = (IP × 10.93) − 1.28
    var picBellner = (ip * 10.93) - 1.28;

    // PIC por aproximación CPP (Czosnyka/Aaslid): CPP ≈ MAP × Vd/Vm → PIC = MAP × (1 − Vd/Vm)
    // Corrección vs. Schmidt original (MAP×IP−14) que sobreestimaba en ~40 mmHg para valores normales
    var picSchmidt = null;
    var pamVal = !isNaN(pam) ? pam : (!isNaN(pas) && !isNaN(pad) ? (pas + 2 * pad) / 3 : null);
    if (pamVal !== null) {
      picSchmidt = pamVal * (1 - vd / vmCalc);
    }

    // IR × PAD: índice cualitativo (no incluir en consenso — sobreestima sistemáticamente)
    var picRAP = null;
    if (!isNaN(pad)) {
      picRAP = pad * ir; // IR = (Vs−Vd)/Vs
    }

    g.elCached('dtc-pic-bellner').textContent = picBellner.toFixed(1) + ' mmHg';
    g.elCached('dtc-pic-schmidt').textContent = picSchmidt !== null ? picSchmidt.toFixed(1) + ' mmHg' : 'Ingresar PAM';
    g.elCached('dtc-pic-rap').textContent = picRAP !== null ? picRAP.toFixed(1) + ' (cualitativo)' : '—';

    // Interpretación IP
    var ib = g.elCached('dtc-ip-badge');
    if (ip < 0.6) { ib.className = 'result-badge badge-yellow'; ib.textContent = 'IP bajo (<0.6) — vasodilatación/hipercapnia'; }
    else if (ip <= 1.1) { ib.className = 'result-badge badge-green'; ib.textContent = 'IP normal (0.6-1.1)'; }
    else if (ip <= 1.4) { ib.className = 'result-badge badge-yellow'; ib.textContent = 'IP elevado (1.1-1.4) — resistencia aumentada'; }
    else if (ip <= 2.0) { ib.className = 'result-badge badge-orange'; ib.textContent = 'IP alto (1.4-2.0) — HTIC probable'; }
    else { ib.className = 'result-badge badge-red'; ib.textContent = 'IP >2.0 — flujo diastólico ausente/reverso, HTIC crítica'; }

    // Consenso solo con fórmulas validadas (Bellner + CPP approx), excluir IR×PAD
    var picsDisp = [picBellner, picSchmidt].filter(function (v) { return v !== null && v > 0; });
    var picPromedio = picsDisp.length > 0 ? picsDisp.reduce(function (a, b) { return a + b; }, 0) / picsDisp.length : null;

    if (picPromedio !== null) {
      g.elCached('dtc-pic-prom').textContent = picPromedio.toFixed(1) + ' mmHg';
      g._dtc_pic = picPromedio;
      if (pamVal !== null) {
        var ppcEst = pamVal - picPromedio;
        g.elCached('dtc-ppc').textContent = ppcEst.toFixed(0) + ' mmHg (estimada)';
        var _a = g.ppcStatus(ppcEst), cls = _a[0], txt = _a[1];
        var pb = g.elCached('dtc-ppc-badge');
        pb.className = 'result-badge ' + cls; pb.textContent = txt;
      }
    }

    g.elCached('dtc-result').style.display = 'grid';
    g._dtc_ip = ip;
    g.updatePPCResumen();
  }

  g.calcDTC = calcDTC;
})(typeof window !== 'undefined' ? window : global);
