/**
 * UCI Tools — sincronizacion de datos de paciente.
 * Depende de UCI_STORAGE (state.js) y debounce (utils.js).
 */
(function (g) {
  'use strict';

  function forceVal(id, val) {
    var el = document.getElementById(id);
    if (!el) return;
    if (val) {
      el.value = val;
      el.classList.add('pat-synced');
    } else {
      el.classList.remove('pat-synced');
    }
  }

  function forceSelect(id, val) {
    var el = document.getElementById(id);
    if (!el) return;
    if (val) {
      el.value = val;
      el.classList.add('pat-synced');
    } else {
      el.classList.remove('pat-synced');
    }
  }

  function markSynced(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('pat-synced');
  }

  function highlightSyncedFields() {
    document.querySelectorAll('.pat-synced').forEach(function (el) { el.classList.remove('pat-synced'); });
    var peso = document.getElementById('pat-peso').value.trim();
    var talla = document.getElementById('pat-talla').value.trim();
    var edad = document.getElementById('pat-edad').value.trim();
    var sexo = document.getElementById('pat-sexo').value;
    if (peso) ['vas-peso', 'bal-peso', 'kd-peso', 'hb-peso', 'el-peso', 'tsr-peso', 'uf-peso', 'ac-peso', 'ox-peso', 'sed-weight', 'tf-weight', 'hemo-weight', 'gfr-peso'].forEach(markSynced);
    if (talla) ['vt-tall', 'hb-tall', 'hemo-height', 'vp-talla'].forEach(markSynced);
    if (edad) ['hb-edad', 'gfr-edad', 'ap-age', 'saps-age', 'nut-age'].forEach(markSynced);
    if (sexo) ['vt-sex', 'hb-sex', 'gfr-sexo', 'vp-sexo'].forEach(markSynced);
  }

  function getPatient() {
    return {
      nombre: document.getElementById('pat-nombre').value.trim(),
      cama: document.getElementById('pat-cama').value.trim(),
      nss: document.getElementById('pat-nss').value.trim(),
      edad: document.getElementById('pat-edad').value.trim(),
      sexo: document.getElementById('pat-sexo').value,
      peso: document.getElementById('pat-peso').value.trim(),
      talla: document.getElementById('pat-talla').value.trim(),
      dias: document.getElementById('pat-dias').value.trim(),
      dx: document.getElementById('pat-dx').value.trim(),
      medico: document.getElementById('pat-medico').value.trim(),
      fecha: document.getElementById('pat-fecha').value
    };
  }

  function savePatient(patient) {
    try {
      localStorage.setItem(g.UCI_STORAGE.patient, JSON.stringify(patient));
    } catch (e) {}
  }

  function loadPatient() {
    var saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(g.UCI_STORAGE.patient));
    } catch (e) {}
    if (!saved) return null;

    var map = {
      nombre: 'pat-nombre', cama: 'pat-cama', nss: 'pat-nss',
      edad: 'pat-edad', peso: 'pat-peso', talla: 'pat-talla',
      dias: 'pat-dias', dx: 'pat-dx', medico: 'pat-medico', fecha: 'pat-fecha'
    };
    Object.keys(map).forEach(function (k) {
      if (saved[k]) {
        var el = document.getElementById(map[k]);
        if (el) el.value = saved[k];
      }
    });
    if (saved.sexo) document.getElementById('pat-sexo').value = saved.sexo;
    return saved;
  }

  function calcPatientDerived(patient) {
    var p = parseFloat(patient.peso);
    var t = parseFloat(patient.talla);
    var d = patient.dias ? parseInt(patient.dias, 10) : NaN;
    var imc = (p > 0 && t > 0) ? (p / ((t / 100) * (t / 100))) : NaN;
    var bsa = (p > 0 && t > 0) ? Math.sqrt(p * t / 3600) : NaN;
    var pci = (t > 0 && patient.sexo) ? (patient.sexo === 'M' ? 50 + 0.91 * (t - 152.4) : 45.5 + 0.91 * (t - 152.4)) : NaN;
    return { p: p, t: t, d: d, imc: imc, bsa: bsa, pci: pci };
  }

  function updatePatientSticky(patient) {
    document.getElementById('ps-name').textContent = patient.nombre || '—';
    document.getElementById('ps-cama').textContent = patient.cama || '—';
    document.getElementById('ps-peso').textContent = patient.peso || '—';
    document.getElementById('ps-dias').textContent = patient.dias || '—';
    document.getElementById('ps-dx').textContent = patient.dx || '—';
  }

  function updatePatientDerived(patient, derived) {
    var imcWrap = document.getElementById('db-imc-wrap');
    var pciWrap = document.getElementById('db-pci-wrap');
    var bsaWrap = document.getElementById('db-bsa-wrap');
    var diasWrap = document.getElementById('db-dias-wrap');

    if (!isNaN(derived.imc)) {
      document.getElementById('db-imc').textContent = derived.imc.toFixed(1);
      var imcCat = '—';
      var imcCls = 'derived-badge';
      if (derived.imc < 18.5) { imcCat = 'Bajo peso'; imcCls = 'derived-badge db-yellow'; }
      else if (derived.imc < 25) { imcCat = 'Normal'; imcCls = 'derived-badge db-green'; }
      else if (derived.imc < 30) { imcCat = 'Sobrepeso'; imcCls = 'derived-badge db-yellow'; }
      else if (derived.imc < 35) { imcCat = 'Obesidad I'; imcCls = 'derived-badge db-orange'; }
      else { imcCat = 'Obesidad II+'; imcCls = 'derived-badge db-red'; }
      document.getElementById('db-imc-cat').textContent = imcCat;
      imcWrap.className = imcCls;
      document.getElementById('db-bsa').textContent = derived.bsa.toFixed(2);
      bsaWrap.className = 'derived-badge';
    } else {
      document.getElementById('db-imc').textContent = '—';
      document.getElementById('db-imc-cat').textContent = '—';
      imcWrap.className = 'derived-badge';
      document.getElementById('db-bsa').textContent = '—';
      bsaWrap.className = 'derived-badge';
    }

    if (!isNaN(derived.pci)) {
      document.getElementById('db-pci').textContent = Math.max(0, derived.pci).toFixed(1);
      pciWrap.className = 'derived-badge';
    } else {
      document.getElementById('db-pci').textContent = '—';
      pciWrap.className = 'derived-badge';
    }

    if (patient.dias) {
      document.getElementById('db-dias').textContent = patient.dias;
      diasWrap.className = 'derived-badge ' + (derived.d <= 3 ? 'db-green' : derived.d <= 7 ? 'db-yellow' : derived.d <= 14 ? 'db-orange' : 'db-red');
      var badge = document.getElementById('pat-estancia-badge');
      if (derived.d <= 3) badge.textContent = 'Estancia corta';
      else if (derived.d <= 7) badge.textContent = 'Primera semana';
      else if (derived.d <= 14) badge.textContent = 'Estancia prolongada';
      else badge.textContent = 'Larga estancia (>' + derived.d + 'd)';
    } else {
      document.getElementById('db-dias').textContent = '—';
      diasWrap.className = 'derived-badge';
      document.getElementById('pat-estancia-badge').textContent = 'días';
    }
  }

  function syncPatient() {
    var patient = getPatient();
    var diasAutoEl = document.getElementById('pat-dias-auto');

    if (patient.fecha) {
      var diff = Math.floor((new Date() - new Date(patient.fecha)) / 86400000);
      if (diff >= 0) {
        diasAutoEl.textContent = '(auto)';
        if (!patient.dias) {
          document.getElementById('pat-dias').value = diff;
          patient.dias = String(diff);
        }
      }
    } else {
      diasAutoEl.textContent = '';
    }

    ['vas-peso', 'bal-peso', 'kd-peso', 'hb-peso', 'el-peso', 'tsr-peso', 'uf-peso', 'ac-peso', 'ox-peso', 'sed-weight', 'tf-weight', 'hemo-weight', 'gfr-peso', 'ot-sc', 'bom-peso'].forEach(function (id) { forceVal(id, patient.peso); });
    ['vt-tall', 'hb-tall', 'hemo-height', 'vp-talla'].forEach(function (id) { forceVal(id, patient.talla); });
    ['hb-edad', 'gfr-edad', 'ap-age', 'saps-age', 'nut-age'].forEach(function (id) { forceVal(id, patient.edad); });
    if (patient.sexo) ['vt-sex', 'hb-sex', 'gfr-sexo', 'vp-sexo'].forEach(function (id) { forceSelect(id, patient.sexo); });

    if (patient.dias) {
      var nutDays = document.getElementById('nut-days');
      if (nutDays) nutDays.value = parseInt(patient.dias, 10) >= 2 ? '1' : '0';
    }

    highlightSyncedFields();
    updatePatientSticky(patient);
    updatePatientDerived(patient, calcPatientDerived(patient));

    document.getElementById('exp-nombre').textContent = patient.nombre || 'Sin datos';
    document.getElementById('exp-cama').textContent = patient.cama || '—';
    document.getElementById('exp-nss').textContent = patient.nss || '—';
    document.getElementById('exp-edad').textContent = patient.edad || '—';
    document.getElementById('exp-sexo').textContent = patient.sexo === 'M' ? 'Masculino' : patient.sexo === 'F' ? 'Femenino' : '—';
    document.getElementById('exp-peso').textContent = patient.peso || '—';
    document.getElementById('exp-dias').textContent = patient.dias || '—';
    document.getElementById('exp-dx').textContent = patient.dx || '—';
    document.getElementById('ph-nombre').textContent = patient.nombre || '—';
    document.getElementById('ph-cama').textContent = patient.cama || '—';
    document.getElementById('ph-nss').textContent = patient.nss || '—';
    document.getElementById('ph-medico').textContent = patient.medico || '—';
    document.getElementById('ph-dx').textContent = patient.dx || '—';

    if (patient.peso && patient.talla) g.calcVT();
    if (patient.peso) g.calcBAL();
    if (patient.peso && patient.talla && patient.edad) g.calcHARRIS();
    if (patient.talla) g.calcVentParams(true);
    if (patient.peso && patient.talla) {
      var sc = Math.sqrt(parseFloat(patient.peso) * parseFloat(patient.talla) / 3600);
      var scEl = document.getElementById('ot-sc');
      if (scEl) scEl.classList.remove('pat-synced');
      if (scEl && !scEl.classList.contains('pat-synced')) {
        scEl.value = sc.toFixed(2);
        scEl.classList.add('pat-synced');
      }
    }

    savePatient({
      nombre: patient.nombre,
      cama: patient.cama,
      edad: patient.edad,
      sexo: patient.sexo,
      peso: patient.peso,
      talla: patient.talla,
      dias: patient.dias,
      dx: patient.dx,
      medico: patient.medico,
      fecha: patient.fecha
    });
  }

  var debouncedSyncPatient = g.debounce(syncPatient, 120);

  function clearPatient() {
    ['pat-nombre', 'pat-cama', 'pat-nss', 'pat-edad', 'pat-peso', 'pat-talla', 'pat-dias', 'pat-fecha', 'pat-dx', 'pat-medico'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.getElementById('pat-sexo').value = '';
    try { localStorage.removeItem(g.UCI_STORAGE.patient); } catch (e) {}
    syncPatient();
  }

  g.forceVal = forceVal;
  g.forceSelect = forceSelect;
  g.highlightSyncedFields = highlightSyncedFields;
  g.calcPatientDerived = calcPatientDerived;
  g.updatePatientDerived = updatePatientDerived;
  g.updatePatientSticky = updatePatientSticky;
  g.getPatient = getPatient;
  g.savePatient = savePatient;
  g.loadPatient = loadPatient;
  g.syncPatient = syncPatient;
  g.debouncedSyncPatient = debouncedSyncPatient;
  g.clearPatient = clearPatient;
})(typeof window !== 'undefined' ? window : global);
