/** UCI Tools — base de conocimiento offline para asistente IA */
window.uciKB = {
  sofa: {
    keys: ['sofa','fallo orgánico','organ failure','disfunción'],
    answer: '**SOFA** (Sequential Organ Failure Assessment)\n0-6: disfunción leve · 7-9: moderada · 10-12: severa · ≥13: muy severa.\nUn aumento ≥2 puntos desde el basal sugiere sepsis (Sepsis-3).\nEvaluar cada 24h; la tendencia importa más que un valor aislado.'
  },
  apache: {
    keys: ['apache','apache ii','mortalidad predicha','pronóstico'],
    answer: '**APACHE II** — Rango 0-71.\n0-9: ~5% mortalidad · 10-19: ~15% · 20-29: ~35% · 30-39: ~60% · ≥40: >80%.\nCalcular en las primeras 24h de ingreso. Usar el peor valor de cada variable.'
  },
  saps: {
    keys: ['saps','saps ii','saps2','simplificado'],
    answer: '**SAPS II** — Rango 0-163.\nCalcula mortalidad hospitalaria predicha con 17 variables en las primeras 24h.\n<30: bajo riesgo · 30-50: moderado · >50: alto riesgo.'
  },
  news2: {
    keys: ['news','news2','early warning','alerta temprana','deterioro'],
    answer: '**NEWS2** (National Early Warning Score).\n0-4: riesgo bajo (monitoreo cada 4-6h) · Score de 3 en un solo parámetro: respuesta urgente · 5-6: riesgo intermedio (cada 1h) · ≥7: riesgo alto (activar equipo de respuesta rápida).'
  },
  nutric: {
    keys: ['nutric','nutrición','riesgo nutricional','desnutrición'],
    answer: '**NUTRIC** — Riesgo nutricional en UCI.\n≤4: bajo riesgo (perfil nutricional conservado) · 5-9: alto riesgo (perfil compatible con mayor requerimiento calórico-proteico).'
  },
  sepsis: {
    keys: ['sepsis','séptico','sepsis bundle','hour-1','bundle sepsis','qsofa'],
    answer: '**Bundle Sepsis (Hour-1)**:\n1. Medir lactato (repetir si >2 mmol/L)\n2. Hemocultivos antes de antibiótico\n3. Antibiótico de amplio espectro en ≤1h\n4. Cristaloide 30 mL/kg si hipotensión o lactato ≥4\n5. Vasopresores si PAM <65 tras reanimación con líquidos\nqSOFA: FR≥22, PAS≤100, alteración del estado mental.'
  },
  shock: {
    keys: ['choque','shock','estado de choque','tipo de shock','distributivo','cardiogénico','hipovolémico','obstructivo'],
    answer: '**Clasificación de Shock**:\n• Distributivo (séptico): GC↑, RVS↓, ScvO2 variable\n• Cardiogénico: GC↓, RVS↑, PCP↑, ScvO2↓\n• Hipovolémico: GC↓, RVS↑, PVC↓, ScvO2↓\n• Obstructivo: GC↓, RVS↑, PVC↑, signos específicos\nLactato >2 mmol/L sugiere hipoperfusión. PAM objetivo ≥65 mmHg.'
  },
  vasopresores: {
    keys: ['vasopresor','norepinefrina','vasopresina','dobutamina','noradrenalina','dosis vasopresor','fenilefrina','epinefrina'],
    answer: '**Vasopresores en UCI**:\n• Norepinefrina: 1ª línea, 0.01-3 mcg/kg/min, α1>β1\n• Vasopresina: 2ª línea, 0.01-0.04 U/min, complemento a NE\n• Epinefrina: shock séptico refractario, 0.01-0.5 mcg/kg/min\n• Dobutamina: GC bajo, 2-20 mcg/kg/min (inotrópico)\n• Fenilefrina: α1 puro, útil en taquiarritmias\nMeta: PAM ≥65 mmHg, mejoría de lactato y diuresis.'
  },
  sedacion: {
    keys: ['sedación','rass','cam-icu','delirium','propofol','midazolam','dexmedetomidina','fentanilo','precedex'],
    answer: '**Sedación/Analgesia en UCI**:\n• RASS objetivo: -2 a 0 (sedación ligera preferida)\n• CAM-ICU diario para detectar delirium\n• 1ª línea analgesia: Fentanilo 25-100 mcg/h\n• Sedación: Propofol 5-80 mcg/kg/min o Dexmedetomidina 0.2-1.5 mcg/kg/h\n• Evitar benzodiacepinas (mayor riesgo de delirium)\n• Protocolo ABCDEF: despertar diario + prueba de ventilación espontánea.'
  },
  ventilacion: {
    keys: ['ventilación','ventilador','sdra','ards','peep','vt','volumen tidal','protectora','driving pressure','presión meseta'],
    answer: '**Ventilación protectora (descriptivo)**:\n• Vt 6-8 mL/kg peso ideal\n• Pplat ≤30 cmH₂O\n• Driving pressure ≤15 cmH₂O\n• PEEP en relación con tablas de referencia (ARDSNet)\n**SDRA** (Berlin): Leve PaFi 200-300, Moderado 100-200, Severo <100\n• Prono ≥16h se describe en PaFi <150\n• Bloqueo neuromuscular puede observarse en SDRA severo temprano según protocolo local.'
  },
  extubacion: {
    keys: ['extubación','destete','weaning','tubo en t','rsbi','pva'],
    answer: '**Criterios de extubación**:\n• RSBI <105 (FR/Vt en L)\n• Prueba de ventilación espontánea exitosa (30-120 min)\n• Tos adecuada, manejo de secreciones\n• Sin requerimiento alto de vasopresores\n• FiO₂ ≤0.4, PEEP ≤8\n• Estado neurológico: GCS ≥8 o que proteja vía aérea\n• Cuff leak test si riesgo de edema laríngeo.'
  },
  kdigo: {
    keys: ['kdigo','lesión renal','aki','creatinina','oliguria','diálisis','terapia renal'],
    answer: '**KDIGO AKI**:\n• Estadio 1: Cr ×1.5-1.9 o +0.3 mg/dL en 48h, o UO <0.5 mL/kg/h ×6-12h\n• Estadio 2: Cr ×2-2.9, o UO <0.5 mL/kg/h ×≥12h\n• Estadio 3: Cr ×3 o ≥4 mg/dL, o UO <0.3 mL/kg/h ×≥24h, o anuria ×12h, o TRR\nInterpretación: alteración renal progresiva; correlacionar volemia, exposición a nefrotóxicos y función renal estimada.'
  },
  electrolitos: {
    keys: ['electrolitos','sodio','potasio','calcio','magnesio','fósforo','hiponatremia','hiperkalemia','hipocalcemia'],
    answer: '**Electrolitos — Valores críticos**:\n• Na: 135-145 mEq/L. Hipo <130: corregir ≤10 mEq/24h (riesgo mielinólisis)\n• K: 3.5-5.0 mEq/L. Hiper >6.0: Ca gluconato + insulina/glucosa + salbutamol\n• Ca ionizado: 4.4-5.4 mg/dL. Hipo: Ca gluconato 1-2 g IV\n• Mg: 1.8-2.4 mg/dL. Hipo: MgSO₄ 1-2 g IV en 1h\n• PO₄: 2.5-4.5 mg/dL.'
  },
  gasometria: {
    keys: ['gasometría','gas arterial','ph','paco2','hco3','acidosis','alcalosis','anion gap','brecha aniónica','delta delta'],
    answer: '**Gasometría arterial**:\npH 7.35-7.45 · PaCO₂ 35-45 · HCO₃ 22-26 · BE ±2\n**Anion Gap** = Na − (Cl + HCO₃) [normal 8-12]\nAG elevado: MUDPILES (metanol, uremia, DKA, propilenglicol, isoniazida, lactato, etilenglicol, salicilatos)\n**Delta-Delta** = ΔAG/ΔHCO₃: <1 acidosis no-AG concomitante, 1-2 compensada, >2 alcalosis metabólica concomitante.'
  },
  transfusion: {
    keys: ['transfusión','hemoglobina','plaquetas','pfc','crioprecipitados','sangrado masivo','concentrado eritrocitario'],
    answer: '**Umbrales de transfusión**:\n• CE: Hb <7 g/dL (general UCI), <8 si cardiopatía\n• Plaquetas: <10,000 profiláctico, <50,000 si procedimiento, <100,000 si neurocirugía\n• PFC: INR >1.5 con sangrado activo, 10-15 mL/kg\n• Crioprecipitados: Fibrinógeno <150 mg/dL, 1 pool\n**Transfusión masiva** (protocolo 1:1:1): CE:PFC:Plaq.'
  },
  antibioticos: {
    keys: ['antibiótico','antimicrobiano','empírico','vancomicina','meropenem','piperacilina','ceftriaxona','infección'],
    answer: '**Antibióticos en UCI — marco descriptivo**:\n• En sepsis se documenta inicio temprano (≤1h) en protocolos habituales\n• Esquema empírico según foco y flora local\n• NAC severa: Ceftriaxona + Macrólido o Fluoroquinolona\n• Nosocomial/VAP: Pipe/Tazo o Meropenem ± Vancomicina\n• Intraabdominal: Pipe/Tazo o Meropenem\n• Correlación por TFG (CKD-EPI) y niveles séricos\n• Reevaluación microbiológica a las 48-72h según cultivos.'
  },
  vexus: {
    keys: ['vexus','congestión venosa','vci','vena cava inferior','fluid responsiveness','precarga'],
    answer: '**VExUS** (Venous Excess Ultrasound Score):\n• Grado 0: VCI <2 cm → sin congestión\n• Grado 1: VCI ≥2 cm, flujos normales\n• Grado 2: VCI ≥2 cm + 1 flujo anormal (hepáticas, portal, renal)\n• Grado 3: VCI ≥2 cm + ≥2 flujos anormales → congestión severa\nÚtil para guiar descongestión y evitar sobrecarga hídrica.'
  },
  ppc: {
    keys: ['presión perfusión cerebral','ppc','pic','presión intracraneal','neurocrítico','tce'],
    answer: '**Presión de Perfusión Cerebral**:\nPPC = PAM − PIC\nObjetivo: PPC 60-70 mmHg\nPIC normal <20 mmHg. PIC >22: tratar (osmoterapia, drenaje, sedación, hiperventilación controlada, craniectomía).\nEvitar hipotensión (PAM <80) e hipoxemia en TCE severo.'
  },
  nutricion: {
    keys: ['nutrición','harris benedict','calorías','proteínas','nutrición enteral','nutrición parenteral','gasto energético'],
    answer: '**Nutrición en UCI (descriptivo)**:\n• La nutrición enteral temprana (24-48h) es un patrón frecuente en protocolos UCI\n• Calorías: 25-30 kcal/kg/día (fase aguda: 15-20 kcal/kg/día)\n• Proteínas: 1.2-2.0 g/kg/día\n• Harris-Benedict para gasto energético basal × factor de estrés\n• En intolerancia enteral se describen estrategias escalonadas (procinéticos, post-pilórica, parenteral suplementaria)\n• Seguimiento de residuo gástrico, glucemia y triglicéridos.'
  },
  padua: {
    keys: ['padua','tev','tromboembolismo','tvp','tep','anticoagulación profiláctica','enoxaparina'],
    answer: '**Score de Padua** (riesgo de TEV):\n≥4: alto riesgo → tromboprofilaxis farmacológica\n<4: bajo riesgo → movilización temprana\nProfilaxis: Enoxaparina 40 mg SC/día o HNF 5000 UI SC c/8-12h.\nContraindicaciones: sangrado activo, plaquetas <50,000, procedimiento reciente.'
  },
  codigo_azul: {
    keys: ['código azul','paro','rcp','reanimación','acls','paro cardíaco','fibrilación ventricular','asistolia','aesp','desfibrilación'],
    answer: '**Código Azul / RCP (ACLS 2020)**\nRitmos desfibrilables (FV/TV sin pulso):\n1. Desfibrilación 200J bifásico → RCP 2min\n2. Epinefrina 1mg IV c/3-5min (tras 2° descarga)\n3. Amiodarona 300mg IV bolo → 150mg (o Lidocaína 1-1.5mg/kg)\nRitmos NO desfibrilables (Asistolia/AESP):\n1. RCP + Epinefrina 1mg IV c/3-5min inmediata\n2. Buscar causas reversibles (5H/5T)\n**5H**: Hipovolemia, Hipoxia, H+ (acidosis), Hipo/Hiperkalemia, Hipotermia\n**5T**: Tensión (neumotórax), Taponamiento, Tóxicos, TEP, Trombosis coronaria\nPost-RCP: TTM 32-36°C 24h, coronariografía si sospecha SCA, evitar hipertermia.'
  },
  crisis_hipertensiva: {
    keys: ['crisis hipertensiva','emergencia hipertensiva','urgencia hipertensiva','hipertensión severa','pas >180','pad >120','nitroprusiato','labetalol','nicardipino'],
    answer: '**Crisis hipertensiva**\n**Emergencia** (daño a órgano blanco): reducir PAM 20-25% en 1h, luego a 160/100 en 2-6h.\n• Encefalopatía/EVC: Nicardipino 5-15mg/h o Labetalol 0.5-2mg/min\n• Disección aórtica: Esmolol + Nitroprusiato, meta PAS <120 en 20min\n• Eclampsia: MgSO4 4g IV + Labetalol o Hidralazina\n• EAP: Nitroglicerina 5-200mcg/min + furosemida\n**Urgencia** (sin daño a órgano): reducción gradual en 24-48h, VO.\n• Captopril 25mg SL/VO o Amlodipino 5-10mg VO'
  },
  status_epileptico: {
    keys: ['status epiléptico','crisis convulsiva','convulsión','epilepsia','benzodiacepina','fenitoína','levetiracetam'],
    answer: '**Status Epiléptico — Protocolo escalonado**\n**0-5 min (estabilización)**: ABC, O2, glucosa capilar, vía IV, tiamina 100mg si sospecha etilismo\n**5-20 min (1ª línea)**: Diazepam 10mg IV (puede repetir ×1) o Midazolam 10mg IM\n**20-40 min (2ª línea)**:\n• Levetiracetam 60mg/kg IV (máx 4500mg) en 15min, O\n• Fenitoína 20mg/kg IV a ≤50mg/min, O\n• Valproato 40mg/kg IV en 10min\n**>40 min (status refractario)**: Midazolam 0.2mg/kg bolo → 0.1-2mg/kg/h o Propofol 2mg/kg → 1-5mg/kg/h. Monitoreo EEG continuo.'
  },
  insulina: {
    keys: ['insulina','cetoacidosis','cad','estado hiperosmolar','ehh','hiperglucemia','dka','infusión insulina','glucosa control'],
    answer: '**Insulina en UCI**\n**CAD**: Insulina regular 0.1 U/kg/h IV. Objetivo de descenso glucémico: 50-70 mg/dL/h. Bajo 200 mg/dL, se observan esquemas de 0.02-0.05 U/kg/h + dextrosa; transición SC tras cierre de brecha aniónica.\n**EHH**: dosis similar, con reposición hídrica relevante en protocolos habituales.\n**Infusión en paciente crítico**: rango objetivo 140-180 mg/dL (NICE-SUGAR). Esquema frecuente: 1-2 U/h con reevaluación seriada por glucometría.\n**Hiperkalemia**: referencia habitual: insulina regular 10 U + Dx50% 50 mL IV (inicio 15-30 min, duración 4-6 h).'
  },
  intubacion: {
    keys: ['intubación','vía aérea','secuencia rápida','rsi','laringoscopia','videolaringoscopio','tubo endotraqueal','vía aérea difícil','mallampati','preoxigenación'],
    answer: '**Intubación en UCI — Secuencia Rápida (RSI)**\n**Preparación**: equipo, plan alterno, aspiración y monitoreo.\n**Preoxigenación**: FiO2 100% por 3-5 min; puede usarse VNI/CNAF si SpO2 <93%.\n**Inducción + Bloqueo NM** (push-push):\n• Ketamina 1-2 mg/kg o Etomidato 0.3 mg/kg o Propofol 1-2 mg/kg\n• Succinilcolina 1.5 mg/kg (inicio 45 s) o Rocuronio 1.2 mg/kg (inicio 60 s)\n**Posintubación**: verificación con EtCO2 e imagen; sedoanalgesia según protocolo.\n**Vía aérea difícil**: escalamiento por dispositivos alternos según algoritmo local.'
  },
  glasgow: {
    keys: ['glasgow','gcs','coma','nivel de consciencia','escala de coma'],
    answer: '**Glasgow Coma Scale (GCS)**\nE: Apertura ocular (1-4) · V: Respuesta verbal (1-5) · M: Respuesta motora (1-6)\nTotal: 3-15\n• 13-15: leve\n• 9-12: moderado\n• 6-8: grave (severidad neurológica elevada)\n• 3-5: muy grave (severidad neurológica crítica)\nReportar siempre desglosado: E_V_M (ej. E3V4M5 = 12).\nEn paciente intubado: reportar como E_VT_M.'
  },
  wells_kb: {
    keys: ['wells','tep','embolia pulmonar','tromboembolia pulmonar','dímero d','angiotac'],
    answer: '**Score de Wells para TEP**\nBaja (≤1): perfil de baja probabilidad.\nModerada (2-4): perfil intermedio.\nAlta (>4): perfil de alta probabilidad.\nIntegrar dímero D e imagen según protocolo local.\nEn escenarios de inestabilidad, correlacionar con algoritmos institucionales de reperfusión.'
  },
  meld_kb: {
    keys: ['meld','hepático','cirrosis','insuficiencia hepática','trasplante hepático','child-pugh','falla hepática'],
    answer: '**MELD Score**\nFórmula: 10 × (0.957×ln(Cr) + 0.378×ln(Bili) + 1.120×ln(INR) + 0.643)\n<10: compensada (<2% mortalidad 3m)\n10-19: moderada (~6%)\n20-29: severa (~20%) — listar para trasplante\n30-39: muy severa (~50-70%)\n≥40: falla terminal (>70%)\nMELD-Na mejora predicción al incorporar hiponatremia dilucional.\nUso principal: priorización de trasplante hepático y pronóstico en hepatopatía crónica descompensada.'
  },
  profilaxis_ulcera: {
    keys: ['profilaxis úlcera','sangrado digestivo','estrés','omeprazol','pantoprazol','ranitidina','sucralfato','hemorragia digestiva'],
    answer: '**Profilaxis de úlcera por estrés en UCI (descriptivo)**\nFactores de riesgo altos:\n• VM >48h\n• Coagulopatía (INR >1.5, plaquetas <50,000)\n• Antecedente de HDA\n• TEC, quemados, politrauma\nEsquemas referenciales: Pantoprazol 40mg IV c/24h u Omeprazol 40mg IV c/24h.\nEn bajo riesgo se describe omisión de profilaxis por balance riesgo-beneficio (NAV/C. difficile).\nReevaluación al tolerar vía oral y sin factores de riesgo activos.'
  },
  dolor_sedacion: {
    keys: ['dolor','analgesia','sedación profunda','escala dolor','cpot','bas','eva','pain','opioides','protocolo sedación'],
    answer: '**Dolor y Sedación en UCI (PADIS 2018)**\nEvaluar dolor primero: CPOT (no comunicativo) o EVA/NRS (comunicativo).\n**Analgesia primero** (analgosedación):\n• Fentanilo 25-100mcg/h IV o Morfina 2-4mg IV c/2-4h\n• Paracetamol 1g IV c/6h como coadyuvante\n**Sedación** solo si necesario post-analgesia:\n• Leve (RASS 0 a -2): Dexmedetomidina 0.2-1.5mcg/kg/h (preserva respiración)\n• Moderada (RASS -3): Propofol 5-50mcg/kg/min\n• Profunda (RASS -4/-5): Midazolam 0.02-0.1mg/kg/h (evitar si posible)\nProtocolo ABC: Awakening + Breathing + Coordination trial diario.'
  }
};
