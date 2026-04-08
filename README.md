# UCI Tools

> Calculadoras clínicas para Medicina Crítica · Progressive Web App

![PWA](https://img.shields.io/badge/PWA-Ready-00e676?style=flat-square)
![License](https://img.shields.io/badge/Licencia-Personal-ffb300?style=flat-square)

---

## ¿Qué es UCI Tools?

UCI Tools es una **Progressive Web App (PWA)** de calculadoras 
clínicas diseñada para médicos intensivistas. Pensada para uso 
real en la unidad de cuidados intensivos — rápida, funcional 
sin conexión y optimizada para teléfono con una mano.

Desarrollada por **Dr. Christopher Godines**, médico internista 
y residente de Medicina Crítica.

---

## Calculadoras disponibles

### 🚨 Admisión y Tamizaje
- NEWS2 — National Early Warning Score 2
- qSOFA — Sepsis rápido
- Glasgow Coma Scale
- PADUA — Riesgo tromboembólico venoso
- CURB-65 — Neumonía adquirida en la comunidad
- Rockall — Hemorragia de tubo digestivo alto
- Wells — Tromboembolismo pulmonar

### 📊 Pronóstico y Severidad
- SOFA Score
- APACHE II
- SAPS II
- NUTRIC Score
- MELD — Función hepática

### 🫁 Ventilación
- Parámetros ventilatorios (PIC, VT protector, FiO₂, PEEP)
- Mecánica ventilatoria (distensibilidad, resistencia, WOB, 
  poder mecánico)
- Destete / Extubación (Tobin, SBT, criterios de extubación)

### 🧪 Ácido-base y Hemodinámica
- Gasometría y análisis metabólico completo
- Oxigenación y transporte de O₂ (20 fórmulas)

### 💉 Hemodinámica
- Perfil hemodinámico (clasificación de choque)
- Ultrasonido hemodinámico — POCUS (4 módulos)
- Bombas de infusión (17 fármacos UCI)
- VExUS — Congestión venosa sistémica

### 🫘 Renal, Electrolitos y TSR
- KDIGO — Lesión renal aguda
- Balance hídrico
- Dosificación renal (TFG + ajuste de ATB)
- Electrolitos urinarios y reposición
- Terapia de sustitución renal (Kt/V, CRRT, ultrafiltrado, 
  anticoagulación, modalidad)

### 🧠 Neuro, Sedación y Analgesia
- Sedación / Analgesia
- CAM-ICU — Delirium
- RASS — Nivel de sedación
- Perfusión cerebral (PPC)

### 💊 Soporte y Manejo
- Sepsis Bundle 3h/6h
- Transfusión — Decisión clínica
- Harris-Benedict — Nutrición

---

## Características

- **PWA instalable** — funciona como app nativa en iOS y Android
- **Modo sin conexión** — service worker con caché completo
- **Perfil del paciente** — datos propagados automáticamente 
  a todas las calculadoras
- **Validación visual** — campos faltantes se resaltan con 
  animación
- **Modo oscuro/claro** automático según preferencia del sistema
- **Asistente IA** — integrado para consultas clínicas
- **Nota de evolución** — generación asistida por IA
- **Exportar PDF** — resumen clínico del paciente
- **Responsive** — optimizado para teléfono con una mano

---

## Instalación como PWA

### Android
1. Abrir en Chrome: `https://chriseg0996-star.github.io/UCI-tools`
2. Menú → "Agregar a pantalla de inicio"

### iOS
1. Abrir en Safari: `https://chriseg0996-star.github.io/UCI-tools`
2. Compartir → "Agregar a pantalla de inicio"

---

## Stack técnico

| Componente | Tecnología |
|---|---|
| Frontend | HTML5 + CSS3 + JavaScript vanilla |
| Fuentes | JetBrains Mono + IBM Plex Sans |
| PWA | manifest.json + Service Worker |
| Hosting | GitHub Pages |
| IA | Anthropic Claude API |

---

## Estructura del proyecto

---

## Aviso médico

> ⚠️ **UCI Tools es una herramienta de apoyo clínico.** 
> Los resultados deben interpretarse siempre en el contexto 
> clínico completo del paciente y bajo criterio médico. 
> No reemplaza el juicio clínico del médico tratante ni debe 
> usarse como única fuente para decisiones terapéuticas.

---

## Autor

**Dr. Christopher Godines**  
Médico Internista · Residente de Medicina Crítica  
© 2025 — Todos los derechos reservados

---

*UCI Tools — Precisión clínica en cada turno.*
