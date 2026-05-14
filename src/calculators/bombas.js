/**
 * UCI Tools — calculadora de bombas de infusion.
 * Depende de window.FARMACOS (src/data/drugs.js) y showToast (utils).
 */
(function (g) {
  'use strict';

  function setBombaCategoria(grupo, btn) {
    document.querySelectorAll('#bom-cat-bar .tab-btn')
      .forEach(function (b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    var sel = document.getElementById('bom-farmaco');
    sel.innerHTML = '';
    Object.entries(g.FARMACOS).forEach(function (entry) {
      var key = entry[0];
      var f = entry[1];
      if (f.grupo === grupo) {
        var o = document.createElement('option');
        o.value = key;
        o.textContent = f.nombre;
        sel.appendChild(o);
      }
    });
    updateBombaFarmaco();
  }

  function updateBombaFarmaco() {
    var key = document.getElementById('bom-farmaco').value;
    var f = g.FARMACOS[key];
    if (!f) return;
    document.getElementById('bom-badge-unit').textContent = f.unidades;
    document.getElementById('bom-badge-rango').textContent = 'Rango: ' + f.rangoMin + ' – ' + f.rangoMax + ' ' + f.unidades;
    document.getElementById('bom-badge-max').textContent = 'Máx: ' + f.dosisMax + ' ' + f.unidades;
    document.getElementById('bom-indicacion').textContent = f.indicacion;
    document.getElementById('bom-dilucion-txt').textContent = f.dilucion;
    applyBombaStdDilution();
    syncBombaPesoRequirement();
    document.getElementById('bom-result-inline').style.display = 'none';
  }

  function setBombaMode(mode, btn) {
    g.BOMBA_MODE = mode;
    document.querySelectorAll('.bom-mode-btn')
      .forEach(function (b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    var label = document.getElementById('bom-input-label');
    var input = document.getElementById('bom-valor-input');
    if (mode === 'dosis') {
      label.textContent = 'Velocidad (mL/h)';
      input.placeholder = 'velocidad en bomba';
    } else {
      label.textContent = 'Dosis deseada';
      input.placeholder = 'dosis objetivo';
    }
    document.getElementById('bom-result-inline').style.display = 'none';
  }

  function isBombaPesoDependiente(unidadDosis) {
    return unidadDosis === 'mcg/kg/min' ||
      unidadDosis === 'mcg/kg/h' ||
      unidadDosis === 'mg/kg/h';
  }

  function parseStdDilutionFromText(f) {
    if (!f) return null;
    var txt = (f.concStdDesc || f.dilucion || '').replace(',', '.');
    var m = txt.match(/(\d+(\.\d+)?)\s*(mg|mcg|UI)\s*en\s*(\d+(\.\d+)?)\s*mL/i);
    if (m) {
      return {
        amount: parseFloat(m[1]),
        unit: m[3],
        volume: parseFloat(m[4])
      };
    }
    var concUnitBase = (f.concUnit || 'mg/mL').split('/')[0];
    return { amount: f.concStd, unit: concUnitBase, volume: 1 };
  }

  function normalizeBombaConc(amount, amountUnit, volume, dosisUnit) {
    if (!isFinite(amount) || amount <= 0) return null;
    if (!isFinite(volume) || volume <= 0) return null;
    var unit = (amountUnit || '').trim();
    var conc = amount / volume;

    if (dosisUnit === 'UI/h') {
      if (unit === 'UI') return { value: conc, baseUnit: 'UI/mL' };
      return null;
    }

    if (dosisUnit === 'mg/h' || dosisUnit === 'mg/kg/h') {
      if (unit === 'mg') return { value: conc, baseUnit: 'mg/mL' };
      if (unit === 'mcg') return { value: conc / 1000, baseUnit: 'mg/mL' };
      return null;
    }

    if (dosisUnit === 'mcg/kg/min' || dosisUnit === 'mcg/kg/h') {
      if (unit === 'mcg') return { value: conc, baseUnit: 'mcg/mL' };
      if (unit === 'mg') return { value: conc * 1000, baseUnit: 'mcg/mL' };
      return null;
    }

    return null;
  }

  function applyBombaStdDilution() {
    var key = document.getElementById('bom-farmaco').value;
    var f = g.FARMACOS[key];
    if (!f) return;
    var std = parseStdDilutionFromText(f);
    if (!std) return;
    document.getElementById('bom-cant-total').value = std.amount;
    var unitSel = document.getElementById('bom-cant-unit');
    if (unitSel) unitSel.value = std.unit;
    document.getElementById('bom-vol-total').value = std.volume;
    updateBombaConcPreview();
  }

  function updateBombaConcPreview() {
    var key = document.getElementById('bom-farmaco').value;
    var f = g.FARMACOS[key];
    if (!f) return null;
    var amount = parseFloat(document.getElementById('bom-cant-total').value);
    var amountUnit = document.getElementById('bom-cant-unit').value;
    var volume = parseFloat(document.getElementById('bom-vol-total').value);
    var out = document.getElementById('bom-conc-calc');
    if (!isFinite(amount) || !isFinite(volume) || amount <= 0 || volume <= 0) {
      out.textContent = 'Concentración calculada: —';
      return null;
    }
    var normalized = normalizeBombaConc(amount, amountUnit, volume, f.unidades);
    if (!normalized) {
      out.textContent = 'Concentración calculada: unidad incompatible para ' + f.unidades;
      return null;
    }
    out.textContent = 'Concentración calculada: ' + normalized.value.toFixed(4) + ' ' + normalized.baseUnit;
    return normalized;
  }

  function syncBombaPesoRequirement() {
    var key = document.getElementById('bom-farmaco').value;
    var f = g.FARMACOS[key];
    var pesoEl = document.getElementById('bom-peso');
    if (!pesoEl || !f) return;
    if (isBombaPesoDependiente(f.unidades)) {
      pesoEl.placeholder = '60 – 100';
      pesoEl.style.opacity = '';
    } else {
      pesoEl.placeholder = 'No requerido';
      pesoEl.style.opacity = '0.75';
    }
  }

  function calcBomba() {
    var key = document.getElementById('bom-farmaco').value;
    var f = g.FARMACOS[key];
    if (!f) {
      g.showToast('Seleccione un fármaco válido.');
      return;
    }
    var peso = parseFloat(document.getElementById('bom-peso').value);
    var amount = parseFloat(document.getElementById('bom-cant-total').value);
    var amountUnit = document.getElementById('bom-cant-unit').value;
    var volume = parseFloat(document.getElementById('bom-vol-total').value);
    var val = parseFloat(document.getElementById('bom-valor-input').value);
    var isVelToDose = g.BOMBA_MODE === 'dosis';
    var valorLabel = isVelToDose ? 'Velocidad (mL/h)' : 'Dosis';
    var pesoDependiente = isBombaPesoDependiente(f.unidades);
    var faltantes = [];
    if (pesoDependiente && (!isFinite(peso) || peso <= 0)) faltantes.push('Peso');
    if (!isFinite(amount) || amount <= 0) faltantes.push('Cantidad total en bolsa (>0)');
    if (!isFinite(volume) || volume <= 0) faltantes.push('Volumen total bolsa (>0)');
    if (!isFinite(val) || val <= 0) faltantes.push(valorLabel + ' (>0)');
    if (faltantes.length) {
      g.showToast('Bombas: datos inválidos o faltantes: ' + faltantes.join(', ') + '.');
      return;
    }

    var u = f.unidades;
    var normalized = normalizeBombaConc(amount, amountUnit, volume, u);
    if (!normalized) {
      g.showToast('Preparación incompatible para ' + u + '. Verifique unidad de cantidad.');
      return;
    }
    updateBombaConcPreview();

    var concBase = normalized.value;
    var dosis;
    var vel;

    if (isVelToDose) {
      vel = val;
      if (u === 'mcg/kg/min') dosis = (concBase * vel) / (60 * peso);
      else if (u === 'mcg/kg/h') dosis = (concBase * vel) / peso;
      else if (u === 'mg/kg/h') dosis = (concBase * vel) / peso;
      else if (u === 'UI/h') dosis = concBase * vel;
      else if (u === 'mg/h') dosis = concBase * vel;
      else {
        g.showToast('Unidad de dosis no soportada: ' + u);
        return;
      }
    } else {
      dosis = val;
      if (u === 'mcg/kg/min') vel = (dosis * 60 * peso) / concBase;
      else if (u === 'mcg/kg/h') vel = (dosis * peso) / concBase;
      else if (u === 'mg/kg/h') vel = (dosis * peso) / concBase;
      else if (u === 'UI/h') vel = dosis / concBase;
      else if (u === 'mg/h') vel = dosis / concBase;
      else {
        g.showToast('Unidad de dosis no soportada: ' + u);
        return;
      }
    }

    if (!isFinite(dosis) || !isFinite(vel) || dosis <= 0 || vel <= 0) {
      g.showToast('Resultado inválido: verifique entradas y unidad de concentración.');
      return;
    }

    var wrap = document.getElementById('bom-result-inline');
    wrap.style.display = 'flex';
    if (isVelToDose) {
      document.getElementById('bom-out-val').textContent = dosis.toFixed(3);
      document.getElementById('bom-out-unit').textContent = u;
      document.getElementById('bom-out-vel').textContent = '· Velocidad: ' + vel.toFixed(2) + ' mL/h';
    } else {
      document.getElementById('bom-out-val').textContent = vel.toFixed(2);
      document.getElementById('bom-out-unit').textContent = 'mL/h';
      document.getElementById('bom-out-vel').textContent = '· Dosis: ' + dosis.toFixed(3) + ' ' + u;
    }

    var badge = document.getElementById('bom-out-badge');
    if (dosis > f.dosisMax) {
      badge.className = 'result-badge badge-red';
      badge.textContent = 'Evaluación de dosis: Máx excedida';
    } else if (dosis > f.rangoMax) {
      badge.className = 'result-badge badge-orange';
      badge.textContent = 'Evaluación de dosis: Sobre rango';
    } else if (dosis < f.rangoMin) {
      badge.className = 'result-badge badge-yellow';
      badge.textContent = 'Evaluación de dosis: Subrango';
    } else {
      badge.className = 'result-badge badge-green';
      badge.textContent = 'Evaluación de dosis: En rango';
    }
  }

  function resetBombas() {
    document.getElementById('bom-valor-input').value = '';
    document.getElementById('bom-cant-total').value = '';
    document.getElementById('bom-vol-total').value = '';
    document.getElementById('bom-conc-calc').textContent = 'Concentración calculada: —';
    document.getElementById('bom-result-inline').style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setBombaCategoria('vaso', document.querySelector('#bom-cat-bar .tab-btn'));
    ['bom-cant-total', 'bom-cant-unit', 'bom-vol-total'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', updateBombaConcPreview);
      if (el) el.addEventListener('change', updateBombaConcPreview);
    });
  });

  g.setBombaCategoria = setBombaCategoria;
  g.updateBombaFarmaco = updateBombaFarmaco;
  g.setBombaMode = setBombaMode;
  g.calcBomba = calcBomba;
  g.resetBombas = resetBombas;
})(typeof window !== 'undefined' ? window : global);
