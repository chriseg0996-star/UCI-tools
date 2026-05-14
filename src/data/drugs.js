/** UCI Tools — tablas de fármacos / bombas (datos estáticos) */
window.drugDatabase = {
  'vancomycin': {
    name: 'Vancomicina',
    dosing: {
      'normal': 'Loading: 15-20 mg/kg IV | Maintenance: 15-20 mg/kg Q8-12H | Target trough: 15-20 mcg/mL',
      'mild': 'GFR 60-89: Sin cambio de dosis requerido | Trough: 15-20 mcg/mL',
      'moderate': 'GFR 30-59: Q12-24H | Trough: 10-15 mcg/mL',
      'severe': 'GFR <30: Q24-48H | Trough: 10-15 mcg/mL | Requiere TDM',
      'dialysis': 'En CRRT: Loading 15-20 mg/kg, luego redosificar Q24H | Requiere monitorización'
    }
  },
  'piptaz': {
    name: 'Piperacilina/Tazobactam',
    dosing: {
      'normal': '4.5 g IV Q6H (3.375 g si <60 kg)',
      'mild': 'GFR 60-89: Sin cambio de dosis',
      'moderate': 'GFR 20-59: 2.25 g Q6H o 3.375 g Q8H',
      'severe': 'GFR <20: 2.25 g Q8H | En CRRT: Dosis normal',
      'dialysis': 'En CRRT: Dosis normal o Q8H según clearance'
    }
  },
  'ceftriaxone': {
    name: 'Ceftriaxona',
    dosing: {
      'normal': '1-2 g IV Q12H',
      'mild': 'GFR ≥30: Sin cambio de dosis',
      'moderate': 'GFR 30-59: Sin cambio de dosis (acumula lentamente)',
      'severe': 'GFR <30: esquema usualmente más espaciado o alternativa según protocolo local',
      'dialysis': 'En CRRT: sin cambio de dosis'
    }
  },
  'meropenem': {
    name: 'Meropenem',
    dosing: {
      'normal': '1 g IV Q8H',
      'mild': 'GFR 50-89: Sin cambio de dosis',
      'moderate': 'GFR 25-49: 500 mg Q8H o 1 g Q12H',
      'severe': 'GFR <25: 500 mg Q12H',
      'dialysis': 'En CRRT: 500 mg Q8-12H'
    }
  },
  'gentamicin': {
    name: 'Gentamicina (Aminoglucósido)',
    dosing: {
      'normal': 'Dosing extendido (moderno): 5-7 mg/kg Q24H | OJO: evitar Q8H',
      'mild': 'GFR ≥60: 5-7 mg/kg Q24H',
      'moderate': 'GFR 30-59: 5-7 mg/kg Q24-36H | Monitorizar niveles',
      'severe': 'GFR <30: Contraído o dosis muy espaciadas (Q48-72H) | Requiere TDM|En CRRT: 4-5 mg/kg Q24H + dosing post-sesión',
      'dialysis': 'CRRT: alternativa o TDM según protocolo local'
    }
  },
  'acyclovir': {
    name: 'Aciclovir',
    dosing: {
      'normal': '10-15 mg/kg IV Q8H',
      'mild': 'GFR >50: Sin cambio de dosis',
      'moderate': 'GFR 25-50: 10-15 mg/kg Q12H',
      'severe': 'GFR <25: 10-15 mg/kg Q24H | Requiere monitorización (nefrotoxicidad)',
      'dialysis': 'Post-CRRT: Redosificar si clearance alto'
    }
  },
  'fluconazole': {
    name: 'Fluconazol',
    dosing: {
      'normal': '400-800 mg día 1, luego 200-400 mg/día',
      'mild': 'GFR >50: Sin cambio de dosis',
      'moderate': 'GFR 10-50: 50% dosis normal',
      'severe': 'GFR <10: esquema frecuentemente en días alternos',
      'dialysis': 'En CRRT: Dosis normal, poco clearance renal'
    }
  },
  'metformin': {
    name: 'Metformina',
    dosing: {
      'normal': 'Mantener si GFR ≥45',
      'mild': 'GFR 45-59: Usar con cuidado, monitorizar',
      'moderate': 'GFR 30-44: CONTRAINDICATION en la mayoría de guías',
      'severe': 'GFR <30: CONTRAINDICATION ABSOLUTA (riesgo acidosis láctica)',
      'dialysis': 'CONTRAINDICADO'
    }
  },
  'heparin': {
    name: 'Heparina (profilaxis TEV)',
    dosing: {
      'normal': 'ENOXAPARINA 40 mg SC Q24H o 30 mg Q12H',
      'mild': 'GFR >30: Sin cambio de dosis',
      'moderate': 'GFR 30-59: Enoxaparina 30 mg Q24H (no Q12H)',
      'severe': 'GFR <30: Enoxaparina 30 mg Q24H O UFH IV (monitorizar aPTT)',
      'dialysis': 'CRRT: Heparina UFH IV (mejor control, clearance renal mínimo)'
    }
  },
  'ace': {
    name: 'Inhibidores ACE (ej. Enalapril)',
    dosing: {
      'normal': 'Dosis estándar según indicación',
      'mild': 'GFR 60-89: Reduce dosis 25-50%',
      'moderate': 'GFR 30-59: Reduce dosis 50%, monitorizar K y Cr',
      'severe': 'GFR <30: Riesgo hiperpotasemia | Considera agente alternativo',
      'dialysis': 'Usar con cautela, potencial hiperpotasemia'
    }
  },
  'nsaid': {
    name: 'AINEs',
    dosing: {
      'normal': 'Dosis estándar, corta duración',
      'mild': 'GFR <60: EVITAR en lo posible (nefrotoxicidad)',
      'moderate': 'GFR 30-59: CONTRAINDICATION — riesgo insuficiencia renal aguda',
      'severe': 'GFR <30: CONTRAINDICATION ABSOLUTA',
      'dialysis': 'CONTRAINDICADO'
    }
  }
};

window.abxDrugDatabase = {
    vancomycin: {
      name: 'Vancomicina',
      normal: 'Loading: 15-20 mg/kg IV | Maintenance: 15-20 mg/kg Q8-12H | Target trough: 15-20 mcg/mL',
      moderate: 'Loading: 15-20 mg/kg IV | Maintenance: 7.5-15 mg/kg Q12-24H | Target trough: 10-15 mcg/mL',
      severe: 'Loading: 15-20 mg/kg IV | Maintenance: 250-1000 mg Q24-48H | Target trough: 10-15 mcg/mL',
      esrd: 'Loading: 15-20 mg/kg IV | Maintenance: 250-500 mg Q24-48H | Requiere TDM',
      rrt: {
        crrt: 'CRRT: 15-20 mg/kg loading, luego 5-10 mg/kg Q12H based on levels',
        ihd: 'IHD: 15-20 mg/kg loading, post-HD dosing Q24-48H based on TDM'
      }
    },
    piptaz: {
      name: 'Piperacilina/Tazobactam',
      normal: 'Loading: 4.5 g IV Q6-8H | Max 18 g/día',
      moderate: 'GFR 30-59: 4.5 g Q6-8H (sin cambio significativo)',
      severe: 'GFR <30: 4.5 g Q8-12H o 2.25 g Q6H',
      esrd: 'GFR <15: 2.25 g Q6-8H | Consider dialysis clearance',
      rrt: {
        crrt: 'CRRT: 4.5 g Q6-8H (normal dosing, buena clearance)',
        ihd: 'IHD: 2.25 g post-diálisis, luego Q8-12H'
      }
    },
    ceftriaxone: {
      name: 'Ceftriaxona',
      normal: 'Loading: 1-2 g Q12H | Max 4 g/día',
      moderate: '1-2 g Q12H (sin cambio de dosis requerido)',
      severe: '1 g Q12H | niveles séricos según protocolo local',
      esrd: '500 mg-1 g Q12H | Monitorización de niveles',
      rrt: {
        crrt: 'CRRT: 1-2 g Q12H (normal dosing)',
        ihd: 'IHD: 1-2 g post-diálisis'
      }
    },
    cefepime: {
      name: 'Cefepima',
      normal: '1-2 g IV Q8-12H | Max 6 g/día',
      moderate: 'GFR 30-59: 1 g Q12H | GFR <30: 1 g Q24H',
      severe: '500 mg-1 g Q24H | TDM según protocolo local',
      esrd: '500 mg Q24-48H | Requiere monitorización',
      rrt: {
        crrt: 'CRRT: 1-2 g Q12H (buena clearance)',
        ihd: 'IHD: 1 g Q24H post-HD'
      }
    },
    meropenem: {
      name: 'Meropenem',
      normal: '500 mg-1 g IV Q8H | Max 4 g/día',
      moderate: 'GFR 26-50: 500 mg-1 g Q8-12H | GFR 10-25: 500 mg-1 g Q12-24H',
      severe: '250-500 mg Q12-24H',
      esrd: '250-500 mg Q24H | TDM según protocolo local',
      rrt: {
        crrt: 'CRRT: 1 g Q8H (good clearance)',
        ihd: 'IHD: 500 mg post-HD, then Q12-24H'
      }
    },
    ertapenem: {
      name: 'Ertapenem',
      normal: '1 g IV daily (Q24H)',
      moderate: '1 g Q24H (sin cambio de dosis requerido)',
      severe: 'GFR <30: 500 mg Q24H',
      esrd: '500 mg Q24-48H',
      rrt: {
        crrt: 'CRRT: 1 g Q24H',
        ihd: 'IHD: 500 mg Q24H post-HD'
      }
    },
    gentamicin: {
      name: 'Gentamicina',
      normal: '5-7 mg/kg Q24H (extended interval dosing preferred) | Monitor levels',
      moderate: 'GFR 40-59: 5-7 mg/kg Q24-36H | GFR 20-39: 5-7 mg/kg Q36-48H',
      severe: '5-7 mg/kg Q48-72H | Requiere TDM obligatorio',
      esrd: '5-7 mg/kg post-diálisis (Q48-72H minimum) | TDM imprescindible',
      rrt: {
        crrt: 'CRRT: 5-7 mg/kg Q24-36H based on levels',
        ihd: 'IHD: 5-7 mg/kg post-HD Q48H minimum, TDM mandatory'
      }
    },
    levofloxacin: {
      name: 'Levofloxacina',
      normal: '500 mg-750 mg daily (Q24H)',
      moderate: 'GFR ≥30: Dosis normal (Q24H)',
      severe: 'GFR <30: 250-500 mg Q24-48H',
      esrd: '250 mg Q48H',
      rrt: {
        crrt: 'CRRT: 500 mg Q24H',
        ihd: 'IHD: 500 mg Q24H (regular dialysis)'
      }
    },
    ciprofloxacin: {
      name: 'Ciprofloxacina',
      normal: '400 mg IV Q8-12H | Oral: 500-750 mg Q12H',
      moderate: 'GFR ≥30: Normal dosing (Q8-12H)',
      severe: 'GFR <30: 400 mg Q12-24H (IV)',
      esrd: '400 mg Q24H o menos',
      rrt: {
        crrt: 'CRRT: 400 mg Q12H',
        ihd: 'IHD: 400 mg Q24H'
      }
    },
    acyclovir: {
      name: 'Aciclovir',
      normal: '5-10 mg/kg IV Q8H | correlacionar con función renal',
      moderate: 'GFR 25-50: 5-10 mg/kg Q12H | GFR 10-25: 5-10 mg/kg Q24H',
      severe: 'GFR <10: 2.5-5 mg/kg Q24H',
      esrd: '2.5 mg/kg post-diálisis Q24-48H | correlacionar con clearance en CRRT',
      rrt: {
        crrt: 'CRRT: 5-10 mg/kg Q8-12H (buena clearance)',
        ihd: 'IHD: 5-10 mg/kg post-HD'
      }
    },
    fluconazole: {
      name: 'Fluconazol',
      normal: '400-800 mg loading, 200-400 mg daily',
      moderate: 'GFR 21-50: 50% dose reduction (100-200 mg daily)',
      severe: 'GFR <20: 50% dose reduction (100-200 mg daily)',
      esrd: '100 mg post-diálisis or 50 mg daily without dialysis',
      rrt: {
        crrt: 'CRRT: 200-400 mg daily (buena clearance)',
        ihd: 'IHD: 200 mg post-HD, then usual dosing'
      }
    },
    linezolid: {
      name: 'Linezolid',
      normal: '600 mg IV/PO Q12H | Sin cambio renal de dosis',
      moderate: 'Sin cambio de dosis requerido',
      severe: 'Sin cambio de dosis requerido (metabolitos pueden acumularse)',
      esrd: '600 mg Q12H | Monitorizar si >14 días por metabolitos',
      rrt: {
        crrt: 'CRRT: 600 mg Q12H (sin cambio de dosis necesario)',
        ihd: 'IHD: 600 mg Q12H (monitorizar metabolitos)'
      }
    }
  };

window.FARMACOS = {
  norepinefrina: {
    nombre: 'Norepinefrina', grupo: 'vaso',
    indicacion: 'Vasopresor de uso frecuente en sepsis. Correlacionar con PAM ≥65 y perfusión. Acceso central habitual.',
    unidades: 'mcg/kg/min', rangoMin: 0.01, rangoMax: 0.5, dosisMax: 1.0,
    concStd: 0.08, concUnit: 'mg/mL',
    dilucion: '4 mg en 50 mL SSN = 0.08 mg/mL = 80 mcg/mL'
  },
  epinefrina: {
    nombre: 'Epinefrina', grupo: 'vaso',
    indicacion: 'Choque anafiláctico / cardiogénico. Efectos α y β. Monitorizar lactato.',
    unidades: 'mcg/kg/min', rangoMin: 0.01, rangoMax: 0.5, dosisMax: 1.0,
    concStd: 0.08, concUnit: 'mg/mL',
    dilucion: '4 mg en 50 mL SSN = 0.08 mg/mL = 80 mcg/mL'
  },
  vasopresina: {
    nombre: 'Vasopresina', grupo: 'vaso',
    indicacion: 'Choque séptico refractario — adyuvante NE. Dosis fija. No titular.',
    unidades: 'UI/h', rangoMin: 0.9, rangoMax: 2.4, dosisMax: 2.4,
    concStd: 0.4, concUnit: 'UI/mL',
    dilucion: '20 UI en 50 mL SSN = 0.4 UI/mL'
  },
  dopamina: {
    nombre: 'Dopamina', grupo: 'vaso',
    indicacion: '<5: dopaminérgico · 5-10: β predomina · >10: α predomina. Mayor riesgo arritmias.',
    unidades: 'mcg/kg/min', rangoMin: 2, rangoMax: 20, dosisMax: 20,
    concStd: 4, concUnit: 'mg/mL',
    dilucion: '200 mg en 50 mL SSN = 4 mg/mL = 4000 mcg/mL'
  },
  dobutamina: {
    nombre: 'Dobutamina', grupo: 'vaso',
    indicacion: 'Choque cardiogénico / disfunción sistólica. Inotrópico β1. Combinar con vasopresor si PAM baja.',
    unidades: 'mcg/kg/min', rangoMin: 2, rangoMax: 20, dosisMax: 40,
    concStd: 5, concUnit: 'mg/mL',
    dilucion: '250 mg en 50 mL SSN = 5 mg/mL = 5000 mcg/mL'
  },
  fenilefrina: {
    nombre: 'Fenilefrina', grupo: 'vaso',
    indicacion: 'Hipotensión vasopléjica sin taquicardia. Vasoconstrictor puro α1.',
    unidades: 'mcg/kg/min', rangoMin: 0.5, rangoMax: 5, dosisMax: 10,
    concStd: 0.4, concUnit: 'mg/mL',
    dilucion: '100 mg en 250 mL SSN = 0.4 mg/mL = 400 mcg/mL'
  },
  midazolam: {
    nombre: 'Midazolam', grupo: 'sed',
    indicacion: 'Sedación en VM. Riesgo acumulación. Evaluar diariamente necesidad.',
    unidades: 'mcg/kg/min', rangoMin: 0.02, rangoMax: 0.1, dosisMax: 0.2,
    concStd: 1, concUnit: 'mg/mL',
    dilucion: '50 mg en 50 mL SSN = 1 mg/mL'
  },
  propofol: {
    nombre: 'Propofol', grupo: 'sed',
    indicacion: 'Sedación en VM — agente de elección. Vigilar síndrome infusión >48h. Aporta 1.1 kcal/mL.',
    unidades: 'mcg/kg/min', rangoMin: 5, rangoMax: 50, dosisMax: 80,
    concStd: 10, concUnit: 'mg/mL',
    dilucion: 'Sin diluir: 10 mg/mL. 50 mL = 500 mg'
  },
  dexmedetomidina: {
    nombre: 'Dexmedetomidina', grupo: 'sed',
    indicacion: 'Sedación ligera α2. No deprime respiración. Vigilar bradicardia e hipotensión.',
    unidades: 'mcg/kg/h', rangoMin: 0.2, rangoMax: 1.5, dosisMax: 1.5,
    concStd: 4, concUnit: 'mcg/mL',
    dilucion: '200 mcg en 50 mL SSN = 4 mcg/mL'
  },
  ketamina: {
    nombre: 'Ketamina', grupo: 'sed',
    indicacion: 'Sedoanalgesia disociativa. Broncodilatador. Mantiene reflejos de vía aérea.',
    unidades: 'mcg/kg/min', rangoMin: 0.5, rangoMax: 4, dosisMax: 10,
    concStd: 10, concUnit: 'mg/mL',
    dilucion: '500 mg en 50 mL SSN = 10 mg/mL'
  },
  fentanilo: {
    nombre: 'Fentanilo', grupo: 'sed',
    indicacion: 'Analgesia en VM — opioide de elección. Estrategia analgesia-primero.',
    unidades: 'mcg/kg/h', rangoMin: 0.5, rangoMax: 2, dosisMax: 10,
    concStd: 10, concUnit: 'mcg/mL',
    dilucion: '0.5 mg en 50 mL SSN = 10 mcg/mL'
  },
  morfina: {
    nombre: 'Morfina', grupo: 'sed',
    indicacion: 'Analgesia con efecto venodilatador. Útil en EAP. Cuidado en insuficiencia renal.',
    unidades: 'mg/h', rangoMin: 1, rangoMax: 10, dosisMax: 20,
    concStd: 1, concUnit: 'mg/mL',
    dilucion: '50 mg en 50 mL SSN = 1 mg/mL'
  },
  remifentanilo: {
    nombre: 'Remifentanilo', grupo: 'sed',
    indicacion: 'Analgesia ultra corta duración. Metabolismo por esterasas — no acumula en IR/IH.',
    unidades: 'mcg/kg/min', rangoMin: 0.05, rangoMax: 0.2, dosisMax: 2,
    concStd: 20, concUnit: 'mcg/mL',
    dilucion: '1 mg en 50 mL SSN = 20 mcg/mL'
  },
  insulina: {
    nombre: 'Insulina regular', grupo: 'esp',
    indicacion: 'Control glucémico UCI — meta 140–180 mg/dL. Titular horario. Vigilar hipoglucemia.',
    unidades: 'UI/h', rangoMin: 0.5, rangoMax: 10, dosisMax: 50,
    concStd: 1, concUnit: 'UI/mL',
    dilucion: '50 UI en 50 mL SSN = 1 UI/mL'
  },
  heparina: {
    nombre: 'Heparina no fraccionada', grupo: 'esp',
    indicacion: 'Anticoagulación TEP/trombosis/CRRT. Titular por TTPa 1.5–2.5×. Vigilar TIH.',
    unidades: 'UI/h', rangoMin: 500, rangoMax: 2000, dosisMax: 5000,
    concStd: 100, concUnit: 'UI/mL',
    dilucion: '25,000 UI en 250 mL SSN = 100 UI/mL'
  },
  amiodarona: {
    nombre: 'Amiodarona', grupo: 'esp',
    indicacion: 'Arritmias ventriculares / FA. Carga 150 mg en 10 min. Solo en SG5%.',
    unidades: 'mg/h', rangoMin: 15, rangoMax: 60, dosisMax: 1200,
    concStd: 1.2, concUnit: 'mg/mL',
    dilucion: '300 mg en 250 mL SG5% = 1.2 mg/mL'
  },
  nimodipino: {
    nombre: 'Nimodipino', grupo: 'esp',
    indicacion: 'Vasoespasmo en HSA. Equipo especial (no PVC). Vigilar hipotensión. 21 días.',
    unidades: 'mg/h', rangoMin: 1, rangoMax: 2, dosisMax: 2,
    concStd: 0.2, concUnit: 'mg/mL',
    dilucion: 'Solución lista 0.2 mg/mL — no diluir'
  },
  cisatracurio: {
    nombre: 'Cisatracurio', grupo: 'esp',
    indicacion: 'BNM en SDRA grave / asincronía. Eliminación Hofmann. Monitorizar TOF.',
    unidades: 'mcg/kg/min', rangoMin: 0.5, rangoMax: 3, dosisMax: 10,
    concStd: 0.4, concUnit: 'mg/mL',
    dilucion: '40 mg en 100 mL SSN = 0.4 mg/mL = 400 mcg/mL'
  },
  labetalol: {
    nombre: 'Labetalol', grupo: 'esp',
    indicacion: 'Crisis hipertensiva α+β. Contraindicado en asma, ICC, BAV.',
    unidades: 'mg/h', rangoMin: 20, rangoMax: 160, dosisMax: 300,
    concStd: 1, concUnit: 'mg/mL',
    dilucion: '200 mg en 200 mL SSN = 1 mg/mL'
  },
  nitroprusiato: {
    nombre: 'Nitroprusiato', grupo: 'esp',
    indicacion: 'Crisis HTA grave. Riesgo toxicidad cianuro >72h. Proteger de luz.',
    unidades: 'mcg/kg/min', rangoMin: 0.3, rangoMax: 10, dosisMax: 10,
    concStd: 0.2, concUnit: 'mg/mL',
    dilucion: '50 mg en 250 mL SG5% = 0.2 mg/mL = 200 mcg/mL'
  }
};

