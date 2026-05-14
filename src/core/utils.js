/**
 * UCI Tools — Utilidades genéricas (DOM/validación/debounce).
 * Depende del DOM para showToast / validate / setBadge / elCached.
 */
(function (g) {
  'use strict';

  var toastTimer = null;
  var elCache = Object.create(null);

  g.debounce = function (fn, wait) {
    var timeoutId;
    return function () {
      var ctx = this;
      var args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () { fn.apply(ctx, args); }, wait);
    };
  };

  g.showToast = function (msg) {
    var t = document.getElementById('val-toast');
    var msgEl = document.getElementById('val-toast-msg');
    if (!t || !msgEl) return;
    msgEl.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3000);
  };

  /**
   * fields = array of { id, label }
   * Returns true if all valid, false + shows toast + marks fields red if not.
   */
  g.validate = function (fields) {
    var missing = [];
    fields.forEach(function (f) {
      var el = document.getElementById(f.id);
      if (el) el.classList.remove('val-error');
    });
    fields.forEach(function (f) {
      var el = document.getElementById(f.id);
      if (!el) return;
      var v = el.value.trim();
      var empty = v === '' || (el.type === 'number' && isNaN(parseFloat(v)));
      if (empty) {
        missing.push(f.label);
        el.classList.add('val-error');
        el.addEventListener('input', function () { el.classList.remove('val-error'); }, { once: true });
        el.addEventListener('change', function () { el.classList.remove('val-error'); }, { once: true });
      }
    });
    if (missing.length > 0) {
      g.showToast('⚠️ Faltan: ' + missing.join(', '));
      return false;
    }
    return true;
  };

  g.validateRanges = function (rules) {
    var issues = [];
    rules.forEach(function (rule) {
      var el = document.getElementById(rule.id);
      if (!el) return;
      var raw = el.value;
      if (raw === '') return;
      var val = parseFloat(raw);
      if (isNaN(val)) return;
      var minOk = (rule.min === undefined) || (val >= rule.min);
      var maxOk = (rule.max === undefined) || (val <= rule.max);
      if (!minOk || !maxOk) {
        el.classList.add('val-error');
        el.addEventListener('input', function () { el.classList.remove('val-error'); }, { once: true });
        issues.push(rule.label + ' fuera de rango');
      }
    });
    if (issues.length) {
      g.showToast('⚠️ ' + issues[0]);
      return false;
    }
    return true;
  };

  g.setBadge = function (id, cls, text) {
    var el = document.getElementById(id);
    if (!el) return;
    el.className = 'result-badge ' + cls;
    el.textContent = text;
  };

  g.elCached = function (id) {
    if (Object.prototype.hasOwnProperty.call(elCache, id)) return elCache[id];
    var node = document.getElementById(id);
    elCache[id] = node;
    return node;
  };
})(typeof window !== 'undefined' ? window : global);
