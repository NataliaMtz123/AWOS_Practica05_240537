# 📋 Guía de Componentes Rediseñados

## 1. Paleta de Colores

```css
/* Variables Disponibles */
--primary-color: #6366f1;      /* Índigo - Principal */
--secondary-color: #ec4899;    /* Rosa - Secundario */
--accent-color: #14b8a6;       /* Teal - Acento */
--dark-bg: #0f172a;            /* Fondo oscuro */
--light-text: #f1f5f9;         /* Texto claro */
--muted-text: #cbd5e1;         /* Texto opaco */
```

**Gradientes Predefinidos**:
- `--gradient-1`: Índigo → Rosa
- `--gradient-2`: Rosa → Teal  
- `--gradient-3`: Teal → Índigo

---

## 2. Componentes Principales

### Tarjeta Básica (`.card`)
```pug
section.card
  i.bx.bxs-rocket.icon-neon
  h2 Título
  p Descripción corta
  a.btn(href="/") Acción
```

**Características**:
- Fondo translúcido con glassmorphism
- Borde dinámico en hover
- Icono con drop-shadow
- Animación de levantamiento

### Botón (`.btn`)
```pug
a.btn(href="/")
  i.bx.bx-icon
  span Texto
```

**Variantes**:
- Normal: Fondo transparente, borde primario
- Hover: Fondo primario, sombra
- En formularios: Gradient-1

### Formulario de Búsqueda (`.search-section`)
```pug
section.search-section
  form
    label Etiqueta
    input(type="text" placeholder="...")
    select
      option Opción 1
      option Opción 2
    button(type="submit") Buscar
```

**Propiedades**:
- Inputs con borde elegante
- Focus: borde primario + fondo suave
- Botón con gradiente
- Responsive en móvil

### Tarjeta de Contenido (`.card-dynamic`)
```pug
.card-dynamic
  img(src="..." alt="...")
  h2 Título
  p Descripción
  p Más información
```

**Usos**:
- Visualización de APOD (NASA)
- Resultados de búsqueda
- Información detallada

### Tabla de Datos (`.data-table`)
```pug
.data-table
  table
    thead
      tr
        th Columna 1
        th Columna 2
    tbody
      tr
        td Dato 1
        td Dato 2
```

**Propiedades**:
- Encabezado con fondo índigo
- Filas con hover effect
- Bordes sutiles
- Texto bien contrasteado

### Contenedor de Gráficos (`.chart-container`)
```pug
.chart-container
  canvas#miGrafico
```

**Características**:
- Fondo translúcido
- Borde primario
- Espacio para Canvas.js
- Responsive

---

## 3. Animaciones

### Transiciones Disponibles
```css
/* Slide Down - Para headers */
@keyframes slideInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fade In - Para contenido */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Pulse - Para elementos activos */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Spin - Para iconos de carga */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Uso en HTML
```pug
/* Header con slide */
header
  h1 Título

/* Contenido con fade */
.dashboard-container
  main

/* Ícono girando */
i.bx.bx-loader-circle(style="animation: spin 1s linear infinite;")

/* Elemento pulsando */
.loading
  p Cargando...
```

---

## 4. Puntos de Ruptura (Responsive)

### Escritorio (> 768px)
- Grid de 3 columnas
- Fuentes grandes
- Espaciado generoso

### Tablet (768px)
- Grid de 1 columna
- Formularios stack verticalmente
- Fuentes medianas

### Móvil (< 480px)
- Una sola columna
- Botones a ancho completo
- Fuentes pequeñas
- Padding reducido

---

## 5. Ejemplos de Uso Real

### Dashboard NASA
```pug
.section-header
  h1
    i.bx.bxs-rocket
    span  Portal NASA

.search-section
  form
    label 📅 Selecciona una fecha
    input(type="date" name="date" required)
    button
      i.bx.bx-search
      span  Explorar Fecha

.card-dynamic
  img(src="apod.url" alt="apod.title")
  h2= apod.title
  p= apod.explanation
  .card-dynamic(style="background: rgba(99,102,241,0.1);")
    p
      strong Fecha:
      span= apod.date
```

### Dashboard FIFA
```pug
.search-section
  form
    input(type="text" placeholder="ID Liga")
    button Buscar

.card-dynamic(style="background: rgba(236,72,153,0.1); border-color: #ec4899;")
  h2 Resultados
  table
    thead: tr
      th Nombre
      th País
    tbody
      each res in resultados
        tr
          td= res.name
          td= res.country
```

---

## 6. Paleta de Colores por Sección

| Sección | Color Primario | Color Fondo | Uso |
|---------|---|---|---|
| Header | `--gradient-1` | - | Títulos principales |
| Búsqueda | `--primary-color` | `rgba(..., 0.1)` | Botones y bordes |
| NASA Results | `--primary-color` | `rgba(99,102,241,0.1)` | Sección APOD |
| FIFA Results | `--secondary-color` | `rgba(236,72,153,0.1)` | Búsquedas |
| FIFA Ligues | `--accent-color` | `rgba(20,184,166,0.1)` | Datos principales |
| INEGI Results | `#84cc16` | `rgba(132,204,22,0.1)` | Indicadores |

---

## 7. Mejoras Técnicas

### CSS Variables para Mantenimiento Fácil
```css
:root {
  /* Cambiar aquí afecta todo */
  --primary-color: #6366f1;
}

.btn {
  border: 2px solid var(--primary-color);
}

.card:hover {
  box-shadow: 0 20px 50px rgba(var(--primary-color), 0.3);
}
```

### Glassmorphism Premium
```css
.card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(99, 102, 241, 0.2);
}
```

### Efectos de Hover Suaves
```css
.card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: var(--primary-color);
  background: rgba(99, 102, 241, 0.15);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.3);
}
```

---

## 8. Scrollbar Personalizado

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(99, 102, 241, 0.05);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}
```

---

## 9. Notas Importantes

✅ **Compatibilidad**: Chrome 90+, Firefox 88+, Safari 14+
✅ **Performance**: Hardware acceleration en animations
✅ **Accesibilidad**: Colores con buen contraste (WCAG AA)
✅ **Responsividad**: Funciona perfectamente en móvil

---

## 10. Próximas Mejoras Sugeridas

- [ ] Agregar modo oscuro/claro (theme toggle)
- [ ] Más animaciones Keyframe complejas
- [ ] Sistema de componentes reutilizables
- [ ] Tipografía con Google Fonts
- [ ] Sombras dinámicas CSS
- [ ] Grid system personalizado

---

**Documento de Referencia de Componentes v2.0**
