/** UCI Tools — metas, modo ventilatorio, vasopresor hints, rangos input (datos estáticos) */
window.metasData = {
  sepsis: {
    title: 'Sepsis / Choque Séptico (Surviving Sepsis 2021)',
    metas: [
      ['PAM','≥65 mmHg (en algunos contextos se usa ≥72 si HTA crónica)'],
      ['Lactato','Meta: <2 mmol/L / clearance ≥10% c/2h'],
      ['ScvO₂','≥70% (venosa central)'],
      ['Balance hídrico','Negativo o neutro tras resucitación inicial'],
      ['Uresis','≥0.5 mL/kg/h'],
      ['PaO₂','60-80 mmHg · PAFI ≥150 si en VM'],
      ['Vasopresor','NE como referencia frecuente; VP como coadyuvante si NE ≥0.25'],
      ['Antibiótico','Ventana de referencia ≤1h desde diagnóstico de choque'],
    ]
  },
  tbi: {
    title: 'TBI / Hipertensión Endocraneal (BTF 2016)',
    metas: [
      ['PIC','<22 mmHg'],
      ['PPC','60-70 mmHg'],
      ['PAM','≥80 mmHg (para mantener PPC)'],
      ['SpO₂','≥95% / PaO₂ >80 mmHg'],
      ['PaCO₂','35-40 mmHg (evitar hipocapnia sostenida)'],
      ['Glucosa','140-180 mg/dL'],
      ['Temperatura','Normotermia (37°C)'],
      ['Na','135-145 mEq/L (evitar hiponatremia)'],
    ]
  },
  sdra: {
    title: 'SDRA (ARDSnet / PROSEVA)',
    metas: [
      ['VT','6 mL/kg PP (rango 4-8)'],
      ['P meseta','≤28-30 cmH2O'],
      ['Driving Pressure','≤15 cmH2O'],
      ['Poder Mecánico','<17 J/min'],
      ['PEEP','Según tabla ARDSnet / PAFI y compliancia'],
      ['PaO₂','55-80 mmHg / SpO₂ 88-95%'],
      ['FiO₂','Mínima para SpO₂ meta'],
      ['Prono','>12-16 h/día si PAFI <150 (SDRA grave)'],
    ]
  },
  icc: {
    title: 'Insuficiencia Cardiaca Descompensada',
    metas: [
      ['PAS','90-140 mmHg'],
      ['FC','60-100 lpm'],
      ['SpO₂','≥94%'],
      ['Uresis','≥1 mL/kg/h durante descongestión'],
      ['Balance','Negativo 500-1500 mL/día (descongestión)'],
      ['PVC','8-12 mmHg (guía de precarga)'],
      ['ScvO₂','>65% (si GC reducido)'],
      ['Lactato','<2 mmol/L'],
    ]
  },
  iam: {
    title: 'IAM / Choque Cardiogénico',
    metas: [
      ['PAM','≥65 mmHg'],
      ['IC (índice cardíaco)','≥2.2 L/min/m²'],
      ['PCP (wedge)','≤18 mmHg'],
      ['Lactato','<2 mmol/L / clearance progresivo'],
      ['ScvO₂','≥70%'],
      ['SpO₂','≥94%'],
      ['Reperfusión','ICP primaria lo antes posible'],
      ['Vasopresor','NE + Dobutamina (evitar DA)'],
    ]
  },
  evc: {
    title: 'EVC Isquémico Agudo',
    metas: [
      ['PAS',  '<185/110 mmHg si candidato a trombolisis'],
      ['PAS post-trombólisis','<180/105 mmHg × 24h'],
      ['Glucosa','140-180 mg/dL (evitar hipoglucemia)'],
      ['Temperatura','Normotermia, tratar fiebre'],
      ['SpO₂','≥94%'],
      ['Na','135-145 mEq/L'],
      ['Ventana trombolisis','≤4.5 h (rtPA IV)'],
      ['Trombectomía','≤24 h si penumbra viable'],
    ]
  },
  hemorragico: {
    title: 'EVC Hemorrágico / HSA',
    metas: [
      ['PAS hemorragia','<140 mmHg (si PAS >220, reducción gradual)'],
      ['PPC en TBI asociado','≥60 mmHg'],
      ['PIC','<22 mmHg'],
      ['Na','135-150 mEq/L (evitar hiponatremia en HSA)'],
      ['Glucosa','140-180 mg/dL'],
      ['Temperatura','Normotermia'],
      ['Nimodipino (HSA)','60 mg c/4h VO × 21 días (vasoespasmo)'],
      ['Coagulación','Revertir anticoagulación urgente'],
    ]
  }
};

window.modoVentData = {
  sdra: {
    title: 'SDRA / Lesión Pulmonar Aguda',
    metas: [
      ['Modo de referencia','VCV (control volumen) o PCV con límite meseta'],
      ['VT','6 mL/kg PP (rango 4-8 según compliancia)'],
      ['FR','14-30 rpm · rango analítico según pH 7.30-7.45'],
      ['PEEP','Tabla ARDSnet alta si FiO₂ >0.50'],
      ['P meseta','≤28 cmH2O'],
      ['Driving Pressure','≤15 cmH2O (objetivo principal)'],
      ['I:E ratio','1:1 a 1:2'],
      ['Prono','≥16 h/día si PAFI <150'],
    ]
  },
  epoc: {
    title: 'EPOC Exacerbado',
    metas: [
      ['Modo de referencia','VCV o PRVC · VNI como modalidad frecuente si hay tolerancia'],
      ['VT','5-7 mL/kg PP (cuidar atrapamiento)'],
      ['FR','12-16 rpm (minimizar hiperinflación)'],
      ['I:E ratio','1:3 o 1:4 (espiración prolongada)'],
      ['PEEP extrínseco','3-5 cmH2O (si PEEPi documentado)'],
      ['SpO₂ meta','88-92% (evitar hiperoxia)'],
      ['Flujo pico','Aumentar para reducir I:E'],
      ['Permissive hypercapnia','pH >7.25 tolerable'],
    ]
  },
  asma: {
    title: 'Crisis Asmática Grave',
    metas: [
      ['Modo de referencia','VCV — flujo constante'],
      ['VT','5-7 mL/kg PP (muy conservador)'],
      ['FR','10-14 rpm (prioridad: espiración)'],
      ['I:E ratio','1:4 o 1:5 mínimo'],
      ['PEEP extrínseco','0-5 (evitar PEEP adicional)'],
      ['P pico tolerada','<50 cmH2O (resistencia alta)'],
      ['Hipercapnia permisiva','pH >7.20 aceptable'],
      ['Sedoanalgesia','Profunda: ketamina + benzodiacepina'],
    ]
  },
  neumonia: {
    title: 'Neumonía Grave (sin SDRA)',
    metas: [
      ['Modo de referencia','VCV o PCV estándar'],
      ['VT','6-8 mL/kg PP'],
      ['FR','14-20 rpm'],
      ['PEEP','5-8 cmH2O (según tolerancia)'],
      ['FiO₂','Mínima para SpO₂ 92-96%'],
      ['P meseta','<30 cmH2O'],
      ['Posición','HOB 30-45°, prono si evoluciona a SDRA'],
      ['Destete','Precoz cuando PAFI >200'],
    ]
  },
  tbi: {
    title: 'TBI / Hipertensión Endocraneal',
    metas: [
      ['Modo de referencia','VCV · con énfasis en sincronía con ventilador'],
      ['VT','6-8 mL/kg PP'],
      ['PaCO₂','35-40 mmHg (normocapnia)'],
      ['Hiperventilaión temporal','PaCO₂ 30-35 sólo en hernación activa'],
      ['PEEP','≤8 cmH2O (evitar aumento de PIC)'],
      ['FiO₂','Para PaO₂ >80 / SpO₂ ≥95%'],
      ['Posición','HOB 30° en línea media'],
      ['Sedoanalgesia','Profunda: propofol + fentanilo'],
    ]
  },
  icc_vent: {
    title: 'Edema Pulmonar / ICC',
    metas: [
      ['Modo de referencia','VNI (CPAP/BiPAP) como modalidad frecuente'],
      ['CPAP/PEEP','8-12 cmH2O (reduce postcarga VI)'],
      ['FiO₂','Para SpO₂ ≥94%'],
      ['Si intuba: VCV','6-8 mL/kg PP · PEEP 5-8'],
      ['Ventilación mecánica','Si falla VNI o desaturación'],
      ['Meta PaO₂','≥80 mmHg'],
      ['Descongestión','Furosemida paralela a soporte ventilatorio'],
      ['Destete','Prueba PSV cuando Hb >10, diuresis positiva'],
    ]
  },
  posqx: {
    title: 'Postoperatorio General',
    metas: [
      ['Modo de referencia','VCV o PCV + PSV para destete temprano'],
      ['VT','6-8 mL/kg PP (protector siempre)'],
      ['PEEP','5-8 cmH2O (prevenir atelectasias)'],
      ['FiO₂','0.40-0.60 inicial; progresión según respuesta de oxigenación'],
      ['Filtro HME','Sí, siempre'],
      ['Destete','Inicio en las primeras 2-4h postqx si posible'],
      ['SBT','PSV 5-8 + PEEP 5 por 30 min'],
      ['Extubación','Si cumple criterios Tobin'],
    ]
  },
  nm: {
    title: 'Enf. Neuromuscular (Guillain-Barré, MG)',
    metas: [
      ['Indicación VM','CV <20 mL/kg · MIP >-30 · MEP <40'],
      ['Modo inicial','VCV con VT 6 mL/kg PP'],
      ['PEEP','5 cmH2O (pulmones usualmente sanos)'],
      ['FiO₂','Mínima para SpO₂ ≥94%'],
      ['FR','12-16 rpm'],
      ['Sedoanalgesia','Mínima (monitoreo neurológico)'],
      ['Destete','Gradual con PSV · criterio: CV >10 mL/kg'],
      ['Traqueostomía','Escenario frecuente cuando VM >14 días es esperada (según protocolo local)'],
    ]
  }
};

window.vasoRefs={
  NE:'Rango analítico: 0.01-3 mcg/kg/min — referencia habitual: 0.05-0.1 mcg/kg/min',
  EP:'Rango: 0.01-1 mcg/kg/min — Anafilaxis/sepsis',
  VP:'Dosis fija: 0.03-0.04 U/min — independiente de peso',
  DA:'1-20 mcg/kg/min — Dopaminergico <5, inotr. 5-10, vasopresor >10',
  DB:'2.5-20 mcg/kg/min — Inotropico puro',
  PH:'0.5-6 mcg/kg/min — Vasopresion pura'
};
window.vasoUnits={NE:'mcg/kg/min',EP:'mcg/kg/min',VP:'U/min',DA:'mcg/kg/min',DB:'mcg/kg/min',PH:'mcg/kg/min'};
window.vasoDoseHints={
  NE:'0.05 (NE: 0.01-3)',
  EP:'0.05 (EP: 0.01-1)',
  VP:'0.03 (VP: 0.03-0.04 U/min)',
  DA:'5 (DA: 1-20)',
  DB:'5 (DB: 2.5-20)',
  PH:'1 (PH: 0.5-6)'
};
window.vasoInterpByDrug={
  NE:'Perfil frecuentemente asociado a soporte vasopresor en choque distributivo/séptico.',
  EP:'Útil cuando hay necesidad de inotropía + vasopresión (p. ej., choque refractario).',
  VP:'Vasopresor no catecolaminérgico, habitualmente usado como coadyuvante de norepinefrina.',
  DA:'Reservar para escenarios seleccionados; mayor riesgo de taquiarritmias.',
  DB:'Inotrópico predominante: útil en bajo gasto con presión relativamente preservada.',
  PH:'Vasopresor alfa-puro: patrón de uso en contextos con vasoplejía y taquicardia.'
};

window.PHYS_RANGES = {
    'pat-edad':  { warn:[0,120],  danger:[0,150] },
    'pat-peso':  { warn:[2,250],  danger:[0.5,400] },
    'pat-talla': { warn:[40,220], danger:[20,250] },
    'vt-tall':   { warn:[40,220], danger:[20,250] },
    'vp-dose':   { warn:[4,8],    danger:[2,12] },
    'pat-dias':  { warn:[0,365],  danger:[0,730] },
    'nota-uri':  { warn:[0,6000], danger:[0,10000] },
  };
window.PHYS_PATTERNS = [
    { match: /\b(fr|resp)\b/i,          warn:[6,40],    danger:[1,60] },
    { match: /\b(fc|card)\b/i,          warn:[40,180],  danger:[20,250] },
    { match: /\bsao2\b|spo2|sat/i,      warn:[70,100],  danger:[50,100] },
    { match: /\bsbs\b|sistol|pas\b/i,   warn:[60,250],  danger:[30,300] },
    { match: /\bpam\b|media/i,          warn:[50,150],  danger:[20,200] },
    { match: /temp/i,                    warn:[34,42],   danger:[25,45] },
    { match: /(?:^|[\s(])ph(?:[\s):]|$)/i, warn:[6.8,7.8], danger:[6.5,8.0] },
    { match: /pao2|po2/i,               warn:[30,500],  danger:[10,700] },
    { match: /paco2|pco2/i,             warn:[15,80],   danger:[5,120] },
    { match: /hco3|bicarbonato/i,       warn:[5,45],    danger:[1,60] },
    { match: /creatinina|cr\b/i,        warn:[0.2,15],  danger:[0.1,30] },
    { match: /\bna\b|sodio/i,           warn:[120,160], danger:[100,180] },
    { match: /\bk\b|potasio/i,          warn:[2.5,6.5], danger:[1,10] },
    { match: /lactato|lac\b/i,          warn:[0,4],     danger:[0,20] },
    { match: /glucosa|gluc/i,           warn:[40,400],  danger:[10,1000] },
    { match: /bilirrubina|bili/i,       warn:[0,20],    danger:[0,50] },
    { match: /albumina|alb\b/i,        warn:[1,6],     danger:[0.5,8] },
    { match: /hemoglobina|hb\b|hgb/i,  warn:[4,20],    danger:[2,25] },
    { match: /plaquetas|plt/i,          warn:[20,600],  danger:[5,1500] },
    { match: /fio2/i,                    warn:[0.21,1],  danger:[0.15,1.1] },
    { match: /peep/i,                    warn:[0,25],    danger:[0,35] },
    { match: /\bvt\b|tidal/i,           warn:[200,800], danger:[50,1200] },
    { match: /peso.?pred|ibw|pbw/i,     warn:[30,120],  danger:[20,150] },
  ];

