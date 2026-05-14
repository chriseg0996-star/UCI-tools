/**
 * UCI Tools — calculadora Starling / Precarga.
 */
(function (g) {
  'use strict';

  function calcSTARLING() {
    var pvc = parseFloat(document.getElementById('st-pvc').value);
    var pvcmm = parseFloat(document.getElementById('st-pvcmm').value);
    var ppmax = parseFloat(document.getElementById('st-ppmax').value);
    var ppmin = parseFloat(document.getElementById('st-ppmin').value);
    var vcimax = parseFloat(document.getElementById('st-vcimax').value);
    var vcimin = parseFloat(document.getElementById('st-vcimin').value);
    if (isNaN(pvc) && isNaN(pvcmm) && isNaN(ppmax) && isNaN(ppmin) && isNaN(vcimax) && isNaN(vcimin)) {
      g.showToast('⚠️ Ingresa al menos una medición (PVC, VPP o VCI)');
      return;
    }
    if (!isNaN(pvc)) document.getElementById('st-conv').textContent = (pvc / 1.36).toFixed(1) + ' mmHg (de ' + pvc + ' cmH2O)';
    else if (!isNaN(pvcmm)) document.getElementById('st-conv').textContent = (pvcmm * 1.36).toFixed(1) + ' cmH2O (de ' + pvcmm + ' mmHg)';
    if (!isNaN(ppmax) && !isNaN(ppmin)) {
      var vpp = ((ppmax - ppmin) / ((ppmax + ppmin) / 2)) * 100;
      document.getElementById('st-vpp').textContent = vpp.toFixed(1) + '%';
      document.getElementById('st-vppinterp').textContent = vpp > 13 ? 'Responde a liquidos (VPP >13%)' : 'No responde a liquidos (VPP ≤13%)';
    }
    if (!isNaN(vcimax) && !isNaN(vcimin)) {
      var dist = ((vcimax - vcimin) / vcimax) * 100;
      document.getElementById('st-vci').textContent = dist.toFixed(1) + '%';
      document.getElementById('st-vciinterp').textContent = dist > 18 ? 'Precarga dependiente (dist. >18%)' : 'No precarga dependiente (dist. ≤18%)';
    }
    document.getElementById('starling-result').style.display = 'grid';
  }

  g.calcSTARLING = calcSTARLING;
})(typeof window !== 'undefined' ? window : global);
