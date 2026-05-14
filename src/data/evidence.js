/** UCI Tools — evidencia/bibliografía por calculadora (datos estáticos) */
window.evidData = {
  news2: {
    formula: 'Suma de 6 variables fisiológicas + nivel de conciencia (AVPU)\nRango total: 0-20 puntos',
    interpretation: '0-4: riesgo bajo · 5-6 o cualquier parámetro con 3 puntos: riesgo intermedio · ≥7: riesgo alto y respuesta urgente',
    refs: [
      {year:'2017', authors:'Royal College of Physicians', title:'National Early Warning Score (NEWS) 2', journal:'RCP London', doi:''},
      {year:'2019', authors:'Pimentel MAF et al.', title:'Comparison of NEWS and NEWS2 for in-hospital mortality prediction', journal:'Resuscitation', doi:'10.1016/j.resuscitation.2019.02.017'},
    ]
  },
  shock: {
    formula: 'Integración clínica: PAM, FC, PVC, lactato, diuresis y ScvO2 según contexto',
    interpretation: 'La clasificación final de choque requiere integrar clínica, hemodinamia y respuesta al tratamiento',
    refs: [
      {year:'2021', authors:'Evans L et al.', title:'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021', journal:'Intensive Care Med', doi:'10.1007/s00134-021-06506-y'},
      {year:'2014', authors:'Cecconi M et al.', title:'Consensus on circulatory shock and hemodynamic monitoring', journal:'Intensive Care Med', doi:'10.1007/s00134-014-3525-z'},
    ]
  },
  hemodynamics: {
    formula: 'CI = CO/BSA · SVR = (MAP−CVP)×80/CO · DO2 = (Hb×SaO2×1.34 + PaO2×0.003)×CO · VO2 = (SaO2−SvO2)×Hb×1.34×CO',
    interpretation: 'Útil para perfusión global y fenotipo hemodinámico (distributivo, cardiogénico, hipovolémico)',
    refs: [
      {year:'2017', authors:'Cecconi M et al.', title:'Fluid challenges and hemodynamic monitoring in critical care', journal:'Intensive Care Med', doi:'10.1007/s00134-017-4810-2'},
      {year:'2019', authors:'Vincent JL, De Backer D', title:'Circulatory shock', journal:'N Engl J Med', doi:'10.1056/NEJMra1208943'},
    ]
  },
  gfr_dosing: {
    formula: 'Estimación de TFG para evaluación farmacológica renal (según ecuación usada en el cálculo)',
    interpretation: 'Recalcular cuando cambie creatinina o condición clínica para evitar infra/sobredosificación',
    refs: [
      {year:'2012', authors:'KDIGO CKD Work Group', title:'KDIGO 2012 Clinical Practice Guideline for CKD', journal:'Kidney Int Suppl', doi:'10.1038/kisup.2012.73'},
      {year:'2009', authors:'Levey AS et al.', title:'A new equation to estimate glomerular filtration rate', journal:'Ann Intern Med', doi:'10.7326/0003-4819-150-9-200905050-00006'},
    ]
  },
  abx_dosing: {
    formula: 'Ajuste por TFG + modalidad de TSR (IHD/CRRT/SLED) + farmacocinética del antimicrobiano',
    interpretation: 'En vancomicina y aminoglucósidos, idealmente complementar con monitorización terapéutica',
    refs: [
      {year:'2020', authors:'Rybak MJ et al.', title:'Therapeutic Monitoring of Vancomycin for Serious MRSA Infections', journal:'Am J Health Syst Pharm', doi:'10.1093/ajhp/zxaa036'},
      {year:'2024', authors:'Roberts JA et al.', title:'Individualised antibiotic dosing for critically ill patients', journal:'Lancet Infect Dis', doi:'10.1016/S1473-3099(24)00058-9'},
    ]
  },
  sedation: {
    formula: 'Estrategia guiada por objetivo RASS y condición clínica del paciente',
    interpretation: 'Priorizar mínima sedación efectiva con reevaluación frecuente para reducir delirium y días de VM',
    refs: [
      {year:'2018', authors:'Devlin JW et al.', title:'PADIS Guidelines in Adult ICU Patients', journal:'Crit Care Med', doi:'10.1097/CCM.0000000000003299'},
      {year:'2012', authors:'Shehabi Y et al.', title:'Early goal-directed sedation versus standard sedation', journal:'JAMA', doi:'10.1001/jama.2012.13664'},
    ]
  },
  transfusion: {
    formula: 'Decisión transfusional por Hb, plaquetas, INR/fibrinógeno y escenario de sangrado',
    interpretation: 'Estrategia restrictiva en paciente estable; protocolo masivo en hemorragia no controlada',
    refs: [
      {year:'2023', authors:'AABB', title:'Red blood cell transfusion: 2023 international guidelines', journal:'JAMA', doi:'10.1001/jama.2023.9515'},
      {year:'2015', authors:'Holcomb JB et al.', title:'Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs 1:1:2 Ratio', journal:'JAMA', doi:'10.1001/jama.2015.12'},
    ]
  },
  tgas: {
    formula: 'Análisis integrado: ácido-base (pH/pCO2/HCO3), anion gap corregido, delta-delta, lactato y transporte de O2 (DO2/VO2/ERO2)',
    interpretation: 'Prioriza detección de hipoperfusión y trastornos mixtos; usar tendencias seriadas para guiar reanimación',
    refs: [
      {year:'2010', authors:'Emmett M, Narins RG', title:'Clinical use of the anion gap', journal:'Medicine (Baltimore)', doi:'10.1097/00005792-197701000-00002'},
      {year:'2021', authors:'Evans L et al.', title:'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021', journal:'Intensive Care Med', doi:'10.1007/s00134-021-06506-y'},
      {year:'2001', authors:'Rivers E et al.', title:'Early Goal-Directed Therapy in the Treatment of Severe Sepsis and Septic Shock', journal:'N Engl J Med', doi:'10.1056/NEJMoa010307'},
    ]
  },
  sofa: {
    formula: 'Suma de 6 órganos (Resp, Coag, Hepático, CV, Neuro, Renal)\nCada órgano: 0-4 pts · Total: 0-24 pts',
    interpretation: '0-1: &lt;10% mortalidad · 7-9: ~20% · 10-12: ~40% · &gt;12: &gt;80%\nIncremento de ≥2 pts en 48h define disfunción orgánica en sepsis (Sepsis-3)',
    refs: [
      {year:'1996', authors:'Vincent JL et al.', title:'The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure', journal:'Intensive Care Med', doi:'10.1007/BF01709751'},
      {year:'2016', authors:'Singer M et al.', title:'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)', journal:'JAMA', doi:'10.1001/jama.2016.0287'},
    ]
  },
  apache: {
    formula: 'APS (12 variables fisiológicas) + Edad + Enfermedad crónica\nLogit = −3.517 + 0.146 × APACHE II\nMortalidad = 1 / (1 + e^−logit)',
    interpretation: '&lt;10 pts: &lt;10% mortalidad · 20-29: 40% · ≥30: &gt;70%',
    refs: [
      {year:'1985', authors:'Knaus WA et al.', title:'APACHE II: a severity of disease classification system', journal:'Crit Care Med', doi:'10.1097/00003246-198510000-00009'},
    ]
  },
  saps: {
    formula: 'Logit = −7.7631 + 0.0737×SAPS + 0.9971×ln(SAPS+1)\nMortalidad = e^logit / (1 + e^logit)',
    interpretation: '&lt;30 pts: baja mortalidad · 30-60: moderada · &gt;60: alta',
    refs: [
      {year:'1993', authors:'Le Gall JR et al.', title:'A new Simplified Acute Physiology Score (SAPS II) based on a European/North American multicenter study', journal:'JAMA', doi:'10.1001/jama.270.24.2957'},
    ]
  },
  nutric: {
    formula: 'Suma: Edad (0-2) + APACHE II (0-3) + SOFA (0-2) + Comorbilidades (0-1) + Días hosp. (0-1) + IL-6 opcional (0-1)\nRango: 0-9 (con IL-6) / 0-8 (sin IL-6)',
    interpretation: '≥5 pts: alto riesgo nutricional — inicio soporte &lt;48h mejora outcomes\n&lt;5 pts: bajo riesgo — monitorizar tolerancia',
    refs: [
      {year:'2011', authors:'Heyland D et al.', title:'Identifying critically ill patients who benefit most from nutrition therapy: the development and initial validation of a novel risk assessment tool', journal:'Crit Care', doi:'10.1186/cc10072'},
    ]
  },
  vt: {
    formula: 'PP Hombre = 50 + 0.91 × (Talla cm − 152.4)\nPP Mujer = 45.5 + 0.91 × (Talla cm − 152.4)\nVT protector = 6 mL/kg PP',
    interpretation: 'Meta ventilación protectora: 6 mL/kg PP (rango 4-8)\nReducir si P meseta &gt;28 o DP &gt;15 cmH₂O',
    refs: [
      {year:'2000', authors:'ARDS Network (ARDSnet)', title:'Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome', journal:'NEJM', doi:'10.1056/NEJM200005043421801'},
    ]
  },
  dp: {
    formula: 'Driving Pressure (ΔP) = P Meseta − PEEP total\nRefleja la presión que el pulmón "recibe" en cada ciclo',
    interpretation: 'ΔP ≤15 cmH₂O: meta ventilación protectora\nΔP &gt;15: mayor mortalidad en SDRA\nReducir VT o aumentar PEEP si ΔP elevado',
    refs: [
      {year:'2015', authors:'Amato MBP et al.', title:'Driving Pressure and Survival in the Acute Respiratory Distress Syndrome', journal:'NEJM', doi:'10.1056/NEJMsa1410639'},
    ]
  },
  mp: {
    formula: 'MP = 0.098 × FR × VT(L) × (Ppico − ΔP/2)\nUnidades: J/min',
    interpretation: '&lt;12 J/min: riesgo bajo de VILI · 12-17: zona gris · &gt;17: alto riesgo VILI\nValor umbral más aceptado: 17 J/min',
    refs: [
      {year:'2016', authors:'Gattinoni L et al.', title:'The Future of Mechanical Ventilation: Lessons from the Present and the Past', journal:'Crit Care', doi:'10.1186/s13054-017-1750-x'},
      {year:'2018', authors:'Serpa Neto A et al.', title:'Mechanical Power of Ventilation Is Associated With Mortality in Critically Ill Patients', journal:'Intensive Care Med', doi:'10.1007/s00134-018-5375-6'},
    ]
  },
  pafi: {
    formula: 'P:F ratio = PaO₂ / FiO₂\nSF ratio = SpO₂ / FiO₂ (sustituto no invasivo)',
    interpretation: 'Berlin 2012 (con PEEP ≥5):\n&gt;300: sin SDRA · 200-300: Leve · 100-200: Moderado · &lt;100: Grave',
    refs: [
      {year:'2012', authors:'ARDS Definition Task Force', title:'Acute Respiratory Distress Syndrome: The Berlin Definition', journal:'JAMA', doi:'10.1001/jama.2012.5669'},
    ]
  },
  vent_monitor: {
    formula: 'Cstat = VTe/(Ppl−PEEPt) · Cdin = VTe/(Pp−PEEPt) · Raw = (Pp−Ppl)/flujo(L/s)\nWOB = [(Pp−½Ppl)/10]×VTe · WOBmin = WOB×FR · IF = [(Pp−½Ppl)×0.33]/Pdiafr\nVI = VE/PaCO₂ · Vd/Vt ≈ (PaCO₂−PETCO₂)/PaCO₂ · VA = VE×(1−Vd/Vt)\nPM = 0.098×FR×VC(L)×(Pp−ΔP/2) — ΔP = Ppl−PEEP (Gattinoni)',
    interpretation: 'Alineado a la hoja de fórmulas del servicio (Pp=pico, Ppl=meseta). Modo, trigger y auto-PEEP modifican el significado clínico. OI (FiO₂×MAP×100/PaO₂) va en «Oxigenación».',
    refs: [
      {year:'2016', authors:'Gattinoni L et al.', title:'Mechanical Power of Ventilation', journal:'Crit Care', doi:'10.1186/s13054-017-1750-x'},
    ]
  },
  expres: {
    formula: 'Suma 0-100 pts (Fig. 3 Baptistella 2021). RSBI en SBT (resp/min/L): ≤42→25 · ≤54→20 · ≤76→10 · ≤90→5 · ≥91→0. Compliance dinámica (mL/cmH₂O): ≥63→15 · ≥51→10 · ≥43→7 · ≥32→3 · &lt;32→0. Días VM: ≤3→10 · ≤5→7 · ≤8→4 · ≤10→1 · &gt;10→0. GCS estimado: ≥13.5→10 · ≥11.7→6 · ≥8.9→3 · &lt;8.9→0. MRC (0-60): ≥49→10 · ≥37→7 · ≥25→4 · ≥13→1 · &lt;13→0. Hematocrito (%): ≥37→10 · ≥32→7 · ≥26→3 · ≥22→1 · &lt;22→0. Creatinina (mg/dL): ≤0.99→10 · ≤1.2→7 · ≤1.5→4 · ≤2.9→1 · &gt;2.9→0. Comorbilidad neurológica: ausente→10 · presente→0.\nFig. 3: https://journals.plos.org/plosone/article/figure/image?size=original&id=10.1371/journal.pone.0248868.g003 · Fig. 5: https://journals.plos.org/plosone/article/figure/image?size=original&id=10.1371/journal.pone.0248868.g005',
    interpretation: 'Total ≤44: baja probabilidad de éxito (derivación ~57.1% éxito; ver Fig. 5). 45-58: intermedia (~83.3%). ≥59: alta (~98.7%). AUC informada 0,875. No sustituye juicio clínico ni prueba de tolerancia.',
    refs: [
      {year:'2021', authors:'Baptistella AR et al.', title:'Prediction of extubation outcome in mechanically ventilated patients: Development and validation of the Extubation Predictive Score (ExPreS)', journal:'PLoS ONE', doi:'10.1371/journal.pone.0248868'},
    ]
  },
  gas: {
    formula: 'AG = Na − (Cl + HCO₃) · AG corregido = AG + 2.5×(4 − Alb)\nDelta-Delta = (AG−12) / (24−HCO₃)\nBE ≈ HCO₃ − 24 + 16.2×(pH − 7.4)',
    interpretation: 'AG normal ≤12 mEq/L · Delta-delta 1-2: acidosis pura · &lt;1 o &gt;2: trastorno mixto\nCompensación ácido-base: Winter (AM), regla 1-4 (AR)',
    refs: [
      {year:'2010', authors:'Emmett M, Narins RG', title:'Clinical use of the anion gap', journal:'Medicine (Baltimore)', doi:'10.1097/00005792-197701000-00002'},
    ]
  },
  vaso: {
    formula: 'Velocidad (mL/h) = Dosis × Peso × 60 / Concentración (mcg/mL)\nVasopresina: Velocidad = Dosis (U/min) / Concentración (U/mL) × 60',
    interpretation: 'Norepinefrina es vasopresor de primera línea en choque séptico.\nAgregar vasopresina cuando NE aumenta para reducir catecolaminas.',
    refs: [
      {year:'2021', authors:'Evans L et al.', title:'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021', journal:'Intensive Care Med', doi:'10.1007/s00134-021-06506-y'},
      {year:'2018', authors:'Lamontagne F et al.', title:'Vasopressin or norepinephrine in septic shock: an individual patient data meta-analysis', journal:'Lancet Respir Med', doi:'10.1016/S2213-2600(18)30095-1'},
    ]
  },
  balance: {
    formula: 'Balance parcial = Ingresos − Egresos\nIndice urinario = Uresis / (Peso × horas)',
    interpretation: 'Meta de uresis habitual en UCI: ≥0.5 mL/kg/h.\nBalance positivo acumulado se asocia con peor pronóstico en sepsis y SDRA.',
    refs: [
      {year:'2018', authors:'Malbrain MLNG et al.', title:'Principles of fluid management and stewardship in septic shock', journal:'Ann Intensive Care', doi:'10.1186/s13613-018-0402-1'},
      {year:'2017', authors:'Acheampong A, Vincent JL', title:'A positive fluid balance is an independent prognostic factor in patients with sepsis', journal:'Crit Care', doi:'10.1186/cc11881'},
    ]
  },
  kirby: {
    formula: 'SF ratio = SpO₂ (%) / FiO₂\nFiO₂ requerida = SpO₂ meta / SF ratio actual\nP:F (PaO₂/FiO₂) se calcula solo en el bloque PAFI del mismo panel (misma FiO₂).',
    interpretation: 'SF &gt;315: normal · 235-315: SDRA leve · 150-235: moderado · &lt;150: grave\nSF ratio correlaciona con PF ratio (Rice TW, 2007)',
    refs: [
      {year:'2007', authors:'Rice TW et al.', title:'Comparison of the SpO2/FiO2 ratio and the PaO2/FiO2 ratio in patients with acute lung injury or ARDS', journal:'Chest', doi:'10.1378/chest.07-0617'},
      {year:'2012', authors:'Bongard FS, Sue DY', title:'Current Diagnosis and Treatment: Critical Care', journal:'McGraw-Hill', doi:''},
    ]
  },
  oxygen_index: {
    formula: 'OI = (FiO₂ × MAP × 100) / PaO₂\nFiO₂ decimal · MAP = presión media en vía aérea (cmH₂O) · PaO₂ en mmHg',
    interpretation: 'Índice de oxigenación clásico en pediatría y criterios de ECMO; en adultos usar como apoyo junto con P/F y SF. Umbrales de decisión varían por protocolo (ELSO, institucional).',
    refs: [
      {year:'2017', authors:'ELSO', title:'Extracorporeal Life Support Organization — Guidelines', journal:'', doi:''},
    ]
  },
  kdigo: {
    formula: 'LRA por Cr: aumento ≥0.3 en 48h, o ×1.5 basal en 7d, o TFG &lt;35\nLRA por uresis: &lt;0.5 mL/kg/h por ≥6h',
    interpretation: 'Estadio 1: Cr ×1.5-1.9 o +0.3 · Estadio 2: ×2-2.9 · Estadio 3: ×3 o Cr ≥4 o TRS\nFactor pronóstico: estadio al ingreso + recuperación renal',
    refs: [
      {year:'2012', authors:'KDIGO AKI Work Group', title:'KDIGO Clinical Practice Guideline for Acute Kidney Injury', journal:'Kidney Int Suppl', doi:'10.1038/kisup.2012.1'},
    ]
  },
  ppc: {
    formula: 'PPC = PAM − PIC\nDVNO: PIC (Robba) = −6.72 + 4.04×DVNO\nDTC: IP = (Vs − Vd) / Vm · PIC (Bellner) = (IP×10.93) − 1.28',
    interpretation: 'Meta TBI: PPC 60-70 mmHg (BTF 2016)\nDVNO ≥5.8 mm: HTIC probable (S 74%, E 86%)\nIP DTC &gt;1.4: resistencia cerebrovascular elevada',
    refs: [
      {year:'2007', authors:'Brain Trauma Foundation', title:'Guidelines for the Management of Severe Traumatic Brain Injury, 3rd Ed.', journal:'J Neurotrauma', doi:'10.1089/neu.2007.9999'},
      {year:'2019', authors:'Robba C et al.', title:'Optic nerve sheath diameter ultrasonography for ICP assessment', journal:'Intensive Care Med', doi:'10.1007/s00134-018-5453-9'},
      {year:'2004', authors:'Bellner J et al.', title:'Transcranial Doppler sonography pulsatility index correlates with intracranial pressure', journal:'Neurosurgery', doi:'10.1227/01.neu.0000137537.72919.45'},
    ]
  },
  harris: {
    formula: 'Hombre: GEB = 66.5 + 13.75×P + 5.003×T − 6.775×E\nMujer: GEB = 655.1 + 9.563×P + 1.85×T − 4.676×E\nGET = GEB × Factor de estrés',
    interpretation: 'Proteínas UCI: 1.2-2.0 g/kg/día (recomendación ASPEN/ESPEN 2022)\nFactores de estrés: 1.2 (postqx) · 1.35 (sepsis) · 1.5-1.6 (trauma) · 1.8 (gran quemado)',
    refs: [
      {year:'1919', authors:'Harris JA, Benedict FG', title:'A Biometric Study of Human Basal Metabolism', journal:'Proc Natl Acad Sci', doi:'10.1073/pnas.4.12.370'},
      {year:'2022', authors:'Thibault R et al.', title:'ESPEN guidelines on clinical nutrition in the intensive care unit', journal:'Clin Nutr', doi:'10.1016/j.clnu.2021.09.039'},
    ]
  },
  camicu: {
    formula: 'POSITIVO si: Criterio 1 (cambio agudo) Y Criterio 2 (inatención)\nY [Criterio 3 (RASS≠0) O Criterio 4 (pensamiento desorg.)]',
    interpretation: 'Sensibilidad: 80% · Especificidad: 96% · VPP: 95%\nVálido con RASS ≥ −3 · Prevalencia delirium UCI: 20-80%',
    refs: [
      {year:'2001', authors:'Ely EW et al.', title:'Delirium in mechanically ventilated patients: validity and reliability of the confusion assessment method for the intensive care unit (CAM-ICU)', journal:'JAMA', doi:'10.1001/jama.286.21.2703'},
    ]
  },
  padua: {
    formula: 'Suma de 11 ítems ponderados (1-3 pts cada uno)\nRango 0-20 pts',
    interpretation: '≥4 pts: alto riesgo TEV — NNT para HBPM ≈ 48\n&lt;4 pts: bajo riesgo — profilaxis mecánica',
    refs: [
      {year:'2010', authors:'Barbar S et al.', title:'A risk assessment model for the identification of hospitalized medical patients at risk for venous thromboembolism: the Padua Prediction Score', journal:'J Thromb Haemost', doi:'10.1111/j.1538-7836.2010.03Barbar'},
    ]
  },
  curb: {
    formula: 'C: Confusión · U: BUN &gt;19 · R: FR ≥30 · B: PAS &lt;90 o PAD ≤60 · 65: Edad ≥65\nUn punto por criterio presente',
    interpretation: '0-1: mortalidad ~1.5%, ambulatorio · 2: ~9.2%, hospitalización · 3-5: ~22-57%, UCI',
    refs: [
      {year:'2003', authors:'Lim WS et al.', title:'Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study', journal:'Thorax', doi:'10.1136/thorax.58.5.377'},
    ]
  },
  rockall: {
    formula: 'Suma: Edad + Choque + Comorbilidades + Diagnóstico + Estigmas sangrado reciente\nRango 0-11 pts',
    interpretation: '0-2: mortalidad &lt;5% · 3-4: 10-20% · ≥5: &gt;40%\nRockall pre-endoscopia (3 primeras vars.) predice necesidad de intervención',
    refs: [
      {year:'1996', authors:'Rockall TA et al.', title:'Risk assessment after acute upper gastrointestinal haemorrhage', journal:'Gut', doi:'10.1136/gut.38.3.316'},
    ]
  },
  elec_uri: {
    formula: 'EFNa = (NaU×CrS)/(NaS×CrU) × 100 · EFUrea = (UreaU×CrS)/(UreaS×CrU) × 100\nTTKG = (KU/KS) × (OsmS/OsmU) · AG urinario = NaU + KU − ClU',
    interpretation: 'EFNa <1% y EFUrea <35% sugieren hipoperfusión prerrenal (con contexto clínico).\nEFNa >2% orienta a daño tubular; usar EFUrea si recibe diuréticos.',
    refs: [
      {year:'2002', authors:'Carvounis CP et al.', title:'Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure', journal:'Kidney Int', doi:'10.1046/j.1523-1755.2002.00511.x'},
      {year:'2017', authors:'Pons B et al.', title:'Diagnostic performance of fractional excretion of urea and sodium in acute kidney injury', journal:'Clin J Am Soc Nephrol', doi:'10.2215/CJN.03120317'},
    ]
  },
  rass: {
    formula: 'Escala de −5 a +4 basada en respuesta a voz y estímulo físico.\n0 = alerta tranquilo; negativos = sedación; positivos = agitación.',
    interpretation: 'Meta de sedación en VM: RASS entre −2 y 0 salvo indicación específica.\nRASS ≤−4 limita evaluación neurológica y delirium.',
    refs: [
      {year:'2002', authors:'Sessler CN et al.', title:'The Richmond Agitation-Sedation Scale: validity and reliability in adult ICU patients', journal:'Am J Respir Crit Care Med', doi:'10.1164/rccm.2107138'},
      {year:'2018', authors:'Devlin JW et al.', title:'Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep in Adult ICU Patients', journal:'Crit Care Med', doi:'10.1097/CCM.0000000000003299'},
    ]
  },
  starling: {
    formula: 'VPP = (PPmax − PPmin) / PPmedia × 100\nDistensibilidad VCI = (VCImax − VCImin) / VCImax × 100\nConversión PVC: cmH₂O / 1.36 = mmHg',
    interpretation: 'VPP &gt;13%: responde a volumen (en VM controlada, RS regular)\nDistensibilidad VCI &gt;18%: precarga dependiente · PVC: pobre predictor aislado',
    refs: [
      {year:'2008', authors:'Michard F, Teboul JL', title:'Predicting fluid responsiveness in ICU patients', journal:'Chest', doi:'10.1378/chest.121.6.2000'},
      {year:'2012', authors:'Monnet X et al.', title:'Passive leg raising for predicting fluid responsiveness', journal:'Intensive Care Med', doi:'10.1007/s00134-012-2593-y'},
    ]
  },
  vexus: {
    formula: 'Grado 0: VCI &lt;2 cm\nGrado 1: VCI ≥2 cm, sin patrones anormales\nGrado 2: VCI ≥2 cm + 1 patrón grave\nGrado 3: VCI ≥2 cm + ≥2 patrones graves',
    interpretation: 'VExUS 3: HR para LRA 3.7 (IC 1.5-9.3)\nPatrones graves: hepática (S invertida), porta (pulsatilidad ≥30%), intrarenal (monofásico)',
    refs: [
      {year:'2020', authors:'Beaubien-Souligny W et al.', title:'Quantifying Systemic Congestion with Point-Of-Care Ultrasound: Development of the Venous Excess Ultrasound Grading System', journal:'Ultrasound J', doi:'10.1186/s13089-020-00163-w'},
    ]
  },
  osmo: {
    formula: 'Osmolaridad = 2×Na + Glucosa/18 + BUN/2.8 + EtOH/4.6\nBrecha osmótica = Osm medida − Osm calculada',
    interpretation: 'Normal: 280-295 mOsm/kg · Brecha &lt;10: normal\nBrecha &gt;10: metanol, etilenglicol, propilenglicol, manitol, etanol',
    refs: [
      {year:'2000', authors:'Bhagat CI et al.', title:'Calculated osmolality: not quite right', journal:'Clin Chem', doi:'10.1093/clinchem/46.7.1053'},
    ]
  },
  ca: {
    formula: 'Ca corregido = Ca total + 0.8 × (4 − Albúmina)\nAlternativa ionizado: Ca corregido = Ca total / (0.6 + [Total proteína/8.5])',
    interpretation: 'Normal Ca total: 8.5-10.2 mg/dL · Ionizado: 1.12-1.32 mmol/L\nHipocalcemia &lt;8.5: evaluar PTH, Mg, vit D',
    refs: [
      {year:'1977', authors:'Payne RB et al.', title:'Interpretation of serum total calcium: effects of adjustment for albumin concentration on frequency of abnormal values', journal:'J Clin Pathol', doi:'10.1136/jcp.30.3.169'},
    ]
  },
  harris_nutric: {
    formula: '',
    refs: []
  },
  electrolitos: {
    formula: 'Déficit K = (Kmeta − Kactual) × 0.4 × Peso\nDosis P = 0.16-0.32 mmol/kg IV según severidad\nCa corregido = Ca + 0.8 × (4 − Alb)',
    interpretation: 'K crítico &lt;2.5: reposición urgente IV · Mg: corregir antes de K refractario\nP &lt;1.0: síndrome de realimentación — reposición urgente',
    refs: [
      {year:'2018', authors:'Kraft MD et al.', title:'Treatment of electrolyte disorders in adult patients in the intensive care unit', journal:'Am J Health Syst Pharm', doi:'10.2146/ajhp160298'},
    ]
  },
  kdigo_tsr: {
    formula: 'Kt/V (Daugirdas): −ln(R − 0.008×t) + (4 − 3.5R)×(UF/V)\nR = BUN post / BUN pre · t = duración sesión\nCRRT dosis = Efluente total / Peso (mL/kg/h)',
    interpretation: 'CRRT meta: 20-25 mL/kg/h · IHD meta Kt/V ≥1.2/sesión\nFF &lt;25%: evitar coagulación filtro',
    refs: [
      {year:'2012', authors:'KDIGO AKI Work Group', title:'KDIGO Clinical Practice Guideline for Acute Kidney Injury — Section on Renal Replacement Therapy', journal:'Kidney Int Suppl', doi:'10.1038/kisup.2012.1'},
      {year:'2016', authors:'RENAL Study Investigators', title:'Intensity of Continuous Renal-Replacement Therapy in Critically Ill Patients', journal:'NEJM', doi:'10.1056/NEJMoa0902413'},
    ]
  },
  tsr_anticoag: {
    formula: 'Heparina: comparación con TTPa meta.\nCitrato regional: comparación con Ca postfiltro 0.25-0.35 mmol/L y Ca sistémico 1.0-1.2 mmol/L.',
    interpretation: 'Citrato regional suele prolongar vida del filtro y reduce sangrado vs heparina sistémica en pacientes de alto riesgo.',
    refs: [
      {year:'2023', authors:'Raimundo M et al.', title:'Regional citrate versus systemic heparin anticoagulation for CRRT: systematic review and meta-analysis', journal:'Crit Care', doi:'10.1186/s13054-023-04359-3'},
      {year:'2012', authors:'KDIGO AKI Work Group', title:'KDIGO Clinical Practice Guideline for Acute Kidney Injury — anticoagulation in CRRT', journal:'Kidney Int Suppl', doi:'10.1038/kisup.2012.1'},
    ]
  },
  sepsis_bundle: {
    formula: 'Checklist SSC: Hora-1 (lactato, hemocultivos, ATB, cristaloides 30mL/kg, vasopresores)\n3h: reevaluación volemia, repetir lactato\n6h: PAM ≥65, clearance lactato, diuresis, control fuente',
    interpretation: 'El cumplimiento completo del bundle se asocia a reducción absoluta de mortalidad del 10-15% vs cumplimiento parcial.',
    refs: [
      {year:'2021', authors:'Evans L et al.', title:'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021', journal:'Intensive Care Med', doi:'10.1007/s00134-021-06506-y'},
      {year:'2018', authors:'Levy MM et al.', title:'The Surviving Sepsis Campaign Bundle: 2018 Update', journal:'Crit Care Med', doi:'10.1097/CCM.0000000000003119'},
      {year:'2019', authors:'Seymour CW et al.', title:'Time to Treatment and Mortality during Mandated Emergency Care for Sepsis', journal:'N Engl J Med', doi:'10.1056/NEJMoa1703058'},
    ]
  },
  metabolic: {
    formula: 'AG = Na − (Cl + HCO₃)\nAG corregido = AG + 2.5 × (4.0 − Alb)\nΔ/Δ = (AG − 12) / (24 − HCO₃)\nOsm calc = 2×Na + Glu/18 + BUN/2.8 + EtOH/4.6\nOG = Osm medida − Osm calculada',
    interpretation: 'AG >12 (corregido): acidosis metabólica con AG elevado · Δ/Δ <1: AGMA + NAGMA · Δ/Δ >2: AGMA + alcalosis metabólica · OG >10: sospechar alcoholes tóxicos.',
    refs: [
      {year:'2014', authors:'Kraut JA, Madias NE', title:'Lactic Acidosis', journal:'N Engl J Med', doi:'10.1056/NEJMra1309483'},
      {year:'2007', authors:'Kellum JA', title:'Disorders of acid-base balance', journal:'Crit Care Med', doi:'10.1097/01.CCM.0000259722.63680.80'},
      {year:'2017', authors:'Berend K et al.', title:'Physiological approach to assessment of acid-base disturbances', journal:'N Engl J Med', doi:'10.1056/NEJMra1003327'},
    ]
  },
  gcs: {
    formula: 'GCS = E (1-4) + V (1-5) + M (1-6)\nRango: 3-15',
    interpretation: '13-15: leve · 9-12: moderado · 6-8: grave (severidad neurológica alta) · 3-5: muy grave (severidad neurológica crítica)',
    refs: [
      {year:'1974', authors:'Teasdale G, Jennett B', title:'Assessment of coma and impaired consciousness: a practical scale', journal:'Lancet', doi:'10.1016/S0140-6736(74)91639-0'},
      {year:'2014', authors:'Teasdale G et al.', title:'The Glasgow Coma Scale at 40 years: standing the test of time', journal:'Lancet Neurol', doi:'10.1016/S1474-4422(14)70120-6'},
    ]
  },
  qsofa: {
    formula: 'qSOFA = PAS ≤100 (1 pt) + FR ≥22 (1 pt) + GCS <15 (1 pt)\nRango: 0-3',
    interpretation: '0: bajo riesgo · 1: vigilancia analítica · ≥2: alta sospecha de sepsis — ampliar evaluación con SOFA, lactato y hemocultivos.',
    refs: [
      {year:'2016', authors:'Seymour CW et al.', title:'Assessment of Clinical Criteria for Sepsis (Sepsis-3)', journal:'JAMA', doi:'10.1001/jama.2016.0288'},
      {year:'2016', authors:'Singer M et al.', title:'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)', journal:'JAMA', doi:'10.1001/jama.2016.0287'},
    ]
  },
  wells: {
    formula: 'Signos TVP (+3) + TEP dx más probable (+3) + FC >100 (+1.5) + Inmovilización/cirugía (+1.5) + TEV previo (+1.5) + Hemoptisis (+1) + Cáncer (+1)',
    interpretation: '≤1: baja probabilidad (~1.3%) → dímero D · 2-4: moderada (~16%) → dímero D, si + → angioTAC · >4: alta (~41%) → angioTAC directo',
    refs: [
      {year:'2000', authors:'Wells PS et al.', title:'Derivation of a Simple Clinical Model to Categorize Patients Probability of Pulmonary Embolism', journal:'Thromb Haemost', doi:'10.1055/s-0037-1613938'},
      {year:'2006', authors:'van Belle A et al.', title:'Effectiveness of managing suspected pulmonary embolism using an algorithm combining clinical probability, D-dimer testing, and CT', journal:'JAMA', doi:'10.1001/jama.295.2.172'},
    ]
  },
  meld: {
    formula: 'MELD = 10 × (0.957×ln(Cr) + 0.378×ln(Bili) + 1.120×ln(INR) + 0.643)\nMELD-Na = MELD + 1.32×(137−Na) − 0.033×MELD×(137−Na)',
    interpretation: '<10: compensada · 10-19: moderada · 20-29: severa, listar para trasplante · ≥30: falla terminal, urgencia',
    refs: [
      {year:'2001', authors:'Kamath PS et al.', title:'A model to predict survival in patients with end-stage liver disease', journal:'Hepatology', doi:'10.1053/jhep.2001.22172'},
      {year:'2006', authors:'Kim WR et al.', title:'Hyponatremia and Mortality among Patients on the Liver-Transplant Waiting List', journal:'N Engl J Med', doi:'10.1056/NEJMoa062034'},
    ]
  },
  us_hemo: {
    formula: 'Diástole (ASE 2016, Nagueh): E/e′ medio = E / media(e′ septal, e′ lateral). PCP no elevada improbable si E/e′≤8; más probable elevación si E/e′≥14; zona 9–13 con LAVI≥34 mL/m² o VPS TR≥2.8 m/s. TDE, TRIV/IVRT y e′ como apoyo fisiológico. PSAP = 4×VIT² + RAP(PVC). GC ≈ π×(DTSVI/2)²×VTI×FC/1000.',
    interpretation: 'Herramienta descriptiva: integrar ritmo (FA), valvulopatía mitral, post-MitraClip y carga. FEVI en sistólica ramifica el enfoque ASE; LAVI y TR opcionales refinan la zona gris E/e′.',
    refs: [
      {year:'2016', authors:'Nagueh SF et al.', title:'Recommendations for the Evaluation of Left Ventricular Diastolic Function by Echocardiography', journal:'J Am Soc Echocardiogr', doi:'10.1016/j.echo.2016.01.011'},
      {year:'2015', authors:'Lang RM et al.', title:'Recommendations for Cardiac Chamber Quantification by Echocardiography in Adults', journal:'J Am Soc Echocardiogr', doi:'10.1016/j.echo.2015.01.005'},
      {year:'2007', authors:'Lamia B et al.', title:'Echocardiographic prediction of fluid responsiveness in critically ill patients', journal:'Intensive Care Med', doi:'10.1007/s00134-007-0626-8'},
    ]
  },
};

window.evidenceByCalc = {
  news2: ['evid-wrap-news2', 'news2'],
  shock: ['evid-wrap-shock', 'shock'],
  hemodynamics: ['evid-wrap-hemodynamics', 'hemodynamics'],
  'gfr-dosing': [['evid-wrap-gfr-dosing', 'gfr_dosing'], ['evid-wrap-abx-dosing', 'abx_dosing']],
  sedation: ['evid-wrap-sedation', 'sedation'],
  transfusion: ['evid-wrap-transfusion', 'transfusion'],
  tgas: ['evid-wrap-tgas', 'tgas'],
  sofa: ['evid-wrap-sofa', 'sofa'],
  apache: ['evid-wrap-apache', 'apache'],
  saps: ['evid-wrap-saps', 'saps'],
  nutric: ['evid-wrap-nutric', 'nutric'],
  tvent: ['evid-wrap-expres', 'expres'],
  gas: ['evid-wrap-gas', 'gas'],
  vaso: ['evid-wrap-vaso', 'vaso'],
  balance: ['evid-wrap-balance', 'balance'],
  ppc: ['evid-wrap-ppc', 'ppc'],
  vexus: [['evid-wrap-vexus', 'vexus'], ['evid-wrap-starling', 'starling']],
  'elec-uri': ['evid-wrap-elec-uri', 'elec_uri'],
  electrolitos: ['evid-wrap-electrolitos', 'electrolitos'],
  kdigo: ['evid-wrap-kdigo', 'kdigo'],
  osmo: ['evid-wrap-osmo', 'osmo'],
  ca: ['evid-wrap-ca', 'ca'],
  harris: ['evid-wrap-harris', 'harris'],
  camicu: ['evid-wrap-camicu', 'camicu'],
  padua: ['evid-wrap-padua', 'padua'],
  curb: ['evid-wrap-curb', 'curb'],
  rockall: ['evid-wrap-rockall', 'rockall'],
  rass: ['evid-wrap-rass', 'rass'],
  kirby: [['evid-wrap-pafi', 'pafi'], ['evid-wrap-oi', 'oxygen_index'], ['evid-wrap-kirby', 'kirby']],
  gcs: ['evid-wrap-gcs', 'gcs'],
  qsofa: ['evid-wrap-qsofa', 'qsofa'],
  wells: ['evid-wrap-wells', 'wells'],
  meld: ['evid-wrap-meld', 'meld'],
  'us-hemo': ['evid-wrap-us-hemo', 'us_hemo'],
  'sepsis-bundle': ['evid-wrap-sepsis-bundle', 'sepsis_bundle'],
  metabolic: ['evid-wrap-metabolic', 'metabolic'],
  'tsr-dosis': ['evid-wrap-tsr-dosis', 'kdigo_tsr'],
  'tsr-uf': ['evid-wrap-tsr-uf', 'kdigo_tsr'],
  'tsr-anticoag': ['evid-wrap-tsr-anticoag', 'tsr_anticoag'],
  'tsr-modalidad': ['evid-wrap-tsr-modalidad', 'kdigo_tsr']
};
