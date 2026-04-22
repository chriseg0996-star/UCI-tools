# UCI Tools

Calculadoras clínicas para Medicina Crítica en formato Progressive Web App (PWA).

## Enfoque clínico

UCI Tools está diseñada como herramienta **analítica-descriptiva**:

- calcula métricas fisiológicas y scores clínicos,
- clasifica hallazgos por rangos e interpretación,
- presenta resultados para correlación con contexto clínico.

No emite recomendaciones terapéuticas automáticas y no sustituye el juicio clínico.

## Estado actual de módulos

### Admisión y tamizaje
- NEWS2
- qSOFA
- Glasgow
- PADUA
- CURB-65
- Rockall
- Wells

### Pronóstico y severidad
- SOFA
- APACHE II
- SAPS II
- NUTRIC
- MELD

### Ventilación
- Parámetros ventilatorios (PIC + VT)
- Modo ventilatorio por diagnóstico (referencia descriptiva)
- Mecánica ventilatoria (con PI analítica integrada)
- Destete/extubación (PAFI, ExPreS, Tobin y criterios clínicos)

### Gasometría y oxigenación
- Gasometría y análisis metabólico por bloques
- Oxigenación y transporte de O₂
- PAFI / OI / Kirby (SF)

### Hemodinámica
- Ultrasonido hemodinámico
- Bombas de infusión
- VExUS

### Renal, electrolitos y TSR
- KDIGO
- Balance hídrico
- Dosificación renal y antibióticos
- Electrolitos urinarios y reposición
- TSR (dosis, UF, anticoagulación, modalidad)

### Neuro, sedación y soporte
- PPC
- Sedación/analgesia
- RASS
- CAM-ICU
- Sepsis bundle
- Transfusión
- Harris-Benedict

## PWA e instalación

- `manifest.json` usa íconos separados para `any` y `maskable` en 192 y 512.
- Incluye `apple-touch-icon` para instalación en iOS.
- Service worker con caché y actualización versionada.

Instalación:

- Android (Chrome): abrir la URL y usar "Agregar a pantalla de inicio".
- iOS (Safari): abrir la URL y usar "Agregar a pantalla de inicio".

## Stack técnico

- HTML5 + CSS3 + JavaScript (vanilla)
- `manifest.json` + `sw.js`
- Hosting en GitHub Pages

## Aviso médico

> UCI Tools es un apoyo de cálculo e interpretación.
>  
> Los resultados se deben interpretar con contexto clínico completo y criterio médico profesional.
>  
> No reemplaza decisiones clínicas del equipo tratante.

## Autor

**Dr. Christopher Godines**  
Médico Internista · Residente de Medicina Crítica
