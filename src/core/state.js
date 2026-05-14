/**
 * UCI Tools — Estado global compartido (refactor incremental).
 * Cargar antes que utils.js y el bundle principal en index.html.
 */
(function (g) {
  'use strict';
  g.BOMBA_MODE = 'dosis';

  /** Claves localStorage centralizadas (valores iguales al histórico). */
  g.UCI_STORAGE = Object.freeze({
    patient: 'uci-patient',
    aiConfig: 'uci-ai-config',
    aiHistory: 'uci-ai-history'
  });

  g.aiChatHistory = [];
  g.aiCurrentCalc = 'paciente';
  g.aiSending = false;
})(typeof window !== 'undefined' ? window : global);
