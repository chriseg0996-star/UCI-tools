/**
 * UCI Tools — calculadora legacy de vasopresores.
 * Depende de utils globales (elCached, validate, validateRanges, showToast).
 */
(function (g) {
  'use strict';

  var vasoRefs = {
    NE: 'Rango analítico: 0.01-3 mcg/kg/min — referencia habitual: 0.05-0.1 mcg/kg/min',
    EP: 'Rango: 0.01-1 mcg/kg/min — Anafilaxis/sepsis',
    VP: 'Dosis fija: 0.03-0.04 U/min — independiente de peso',
    DA: '1-20 mcg/kg/min — Dopaminergico <5, inotr. 5-10, vasopresor >10',
    DB: '2.5-20 mcg/kg/min — Inotropico puro',
    PH: '0.5-6 mcg/kg/min — Vasopresion pura'
  };
  var vasoUnits = { NE: 'mcg/kg/min', EP: 'mcg/kg/min', VP: 'U/min', DA: 'mcg/kg/min', DB: 'mcg/kg/min', PH: 'mcg/kg/min' };
  var vasoDoseHints = {
    NE: '0.05 (NE: 0.01-3)',
    EP: '0.05 (EP: 0.01-1)',
    VP: '0.03 (VP: 0.03-0.04 U/min)',
    DA: '5 (DA: 1-20)',
    DB: '5 (DB: 2.5-20)',
    PH: '1 (PH: 0.5-6)'
  };
  var vasoInterpByDrug = {
    NE: 'Perfil frecuentemente asociado a soporte vasopresor en choque distributivo/séptico.',
    EP: 'Útil cuando hay necesidad de inotropía + vasopresión (p. ej., choque refractario).',
    VP: 'Vasopresor no catecolaminérgico, habitualmente usado como coadyuvante de norepinefrina.',
    DA: 'Reservar para escenarios seleccionados; mayor riesgo de taquiarritmias.',
    DB: 'Inotrópico predominante: útil en bajo gasto con presión relativamente preservada.',
    PH: 'Vasopresor alfa-puro: patrón de uso en contextos con vasoplejía y taquicardia.'
  };

  function updateVasoInfo() {
    var drug = g.elCached('vas-drug').value;
    g.elCached('vaso-ref').textContent = vasoRefs[drug];
    g.elCached('vaso-dose-label').textContent = 'Unidades: ' + vasoUnits[drug];
    g.elCached('vas-dose').placeholder = vasoDoseHints[drug];
    g.elCached('vas-conc-unit').textContent = drug === 'VP' ? 'U/mL' : 'mcg/mL';
    g.elCached('vaso-interp').textContent = vasoInterpByDrug[drug];
  }

  function calcVASO() {
    if (!g.validate([{ id: 'vas-peso', label: 'Peso' }, { id: 'vas-mg', label: 'mg en bolsa' }, { id: 'vas-vol', label: 'Volumen bolsa' }, { id: 'vas-dose', label: 'Dosis' }])) return;
    if (!g.validateRanges([
      { id: 'vas-peso', label: 'Peso', min: 20, max: 300 },
      { id: 'vas-mg', label: 'mg en bolsa', min: 0.1, max: 200 },
      { id: 'vas-vol', label: 'Volumen bolsa', min: 10, max: 1000 },
      { id: 'vas-dose', label: 'Dosis', min: 0.001, max: 50 }
    ])) return;
    var drug = g.elCached('vas-drug').value;
    var peso = parseFloat(g.elCached('vas-peso').value);
    var mg = parseFloat(g.elCached('vas-mg').value);
    var vol = parseFloat(g.elCached('vas-vol').value);
    var dose = parseFloat(g.elCached('vas-dose').value);
    var concMcg = mg * 1000 / vol;
    var rate;
    if (drug === 'VP') {
      var concU = mg / vol;
      rate = (dose / concU) * 60;
    } else {
      rate = (dose * peso * 60) / concMcg;
    }
    if (rate > 200) {
      g.showToast('⚠️ Velocidad calculada muy alta (>200 mL/h), revisar concentración y dosis');
    }
    g.elCached('vas-rate').textContent = rate.toFixed(2);
    g.elCached('vas-dosis-ok').textContent = dose;
    g.elCached('vas-unit-label').textContent = vasoUnits[drug];
    g.elCached('vas-conc').textContent = drug === 'VP' ? (mg / vol).toFixed(3) : concMcg.toFixed(1);
    g.elCached('vas-conc-unit').textContent = drug === 'VP' ? 'U/mL' : 'mcg/mL';
    var doseMsg = '';
    if (drug === 'VP') {
      doseMsg = dose < 0.03 ? 'Dosis baja para vasopresina' : dose > 0.04 ? 'Dosis por encima del rango usual (0.03-0.04)' : 'Dosis en rango usual';
    } else if (drug === 'NE') {
      doseMsg = dose < 0.05 ? 'Dosis inicial-baja de norepinefrina' : dose > 1 ? 'Dosis alta, vigilar perfusión periférica y respuesta' : 'Dosis intermedia';
    } else if (drug === 'EP') {
      doseMsg = dose < 0.05 ? 'Dosis baja de epinefrina' : dose > 0.5 ? 'Dosis alta, vigilar lactato/taquiarritmia' : 'Dosis intermedia';
    } else if (drug === 'DA') {
      doseMsg = dose < 5 ? 'Rango dopaminérgico' : dose <= 10 ? 'Rango inotrópico' : 'Rango vasopresor';
    } else if (drug === 'DB') {
      doseMsg = dose < 5 ? 'Inicio inotrópico bajo' : dose > 15 ? 'Dosis alta, vigilar taquicardia' : 'Dosis intermedia';
    } else if (drug === 'PH') {
      doseMsg = dose < 1 ? 'Inicio bajo de fenilefrina' : dose > 4 ? 'Dosis alta, vigilar perfusión' : 'Dosis intermedia';
    }
    g.elCached('vaso-interp').textContent = vasoInterpByDrug[drug] + ' ' + doseMsg + '.';
    g.elCached('vaso-result').style.display = 'grid';
  }

  g.updateVasoInfo = updateVasoInfo;
  g.calcVASO = calcVASO;
})(typeof window !== 'undefined' ? window : global);
