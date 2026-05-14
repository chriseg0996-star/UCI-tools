/**
 * UCI Tools — calculadora de balance hidrico.
 * Depende de elCached (utils global).
 */
(function (g) {
  'use strict';

  function calcBAL() {
    var ing = ['sol', 'med', 'ne', 'np', 'hem', 'ot'].reduce(function (s, i) { return s + (parseFloat(g.elCached('bi-' + i).value) || 0); }, 0);
    var egr = ['uri', 'dre', 'asp', 'hec', 'ins', 'ot'].reduce(function (s, i) { return s + (parseFloat(g.elCached('be-' + i).value) || 0); }, 0);
    var bal = ing - egr;
    var prev = parseFloat(g.elCached('bal-prev').value);
    var peso = parseFloat(g.elCached('bal-peso').value);
    var hrs = parseFloat(g.elCached('bal-hrs').value) || 8;
    var uri = parseFloat(g.elCached('be-uri').value) || 0;
    g.elCached('bal-ing').textContent = ing.toFixed(0) + ' mL';
    g.elCached('bal-egr').textContent = egr.toFixed(0) + ' mL';
    var parEl = g.elCached('bal-par');
    parEl.textContent = (bal >= 0 ? '+' : '') + bal.toFixed(0) + ' mL';
    parEl.className = 'mr-val ' + (bal > 500 ? 'red' : bal < -500 ? 'yellow' : 'green');
    if (!isNaN(prev)) {
      var glo = bal + prev;
      var gloEl = g.elCached('bal-glo');
      gloEl.textContent = (glo >= 0 ? '+' : '') + glo.toFixed(0) + ' mL';
      gloEl.className = 'mr-val ' + (glo > 1000 ? 'red' : glo < -1000 ? 'yellow' : 'green');
    }
    if (!isNaN(peso) && peso > 0) {
      var iuk = uri / (peso * hrs);
      var iukEl = g.elCached('bal-iuk');
      iukEl.textContent = iuk.toFixed(2) + ' mL/kg/h';
      iukEl.className = 'mr-val ' + (iuk < 0.5 ? 'red' : iuk > 2 ? 'yellow' : 'green');
    }
  }

  g.calcBAL = calcBAL;
})(typeof window !== 'undefined' ? window : global);
