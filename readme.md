# 🚀 Consumo de APIs Públicas en Tiempo Real
### NASA · FIFA · INEGI

**Desarrollo Web Fullstack:** Aplicación robusta con Node.js + Express + Pug que consume tres bases de datos públicas mediante arquitectura de **Proxy Seguro**.

![Node.js](https://img.shields.io/badge/Node.js-25.x-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat-square&logo=express&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-3.0-A86454?style=flat-square&logo=pug&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat-square&logo=axios&logoColor=white)

---

## 👤 Información de la Estudiante
* **Nombre:** Ingrid Natalia Martínez Carrasco
* **Matrícula:** 240537
* **Institución:** Universidad Tecnológica de Xicotepec de Juárez
* **Carrera:** Ingeniería en Desarrollo de Software
* **Asignatura:** AWOS - Almacenamiento y Consulta de Datos en Web
* **Perfil de GitHub:** [NataliaMtz123](https://github.com/NataliaMtz123)

---

## 📝 Descripción del Proyecto

Este sistema implementa una arquitectura **MVC (Modelo-Vista-Controlador)** donde el Backend actúa como un intermediario seguro. El servidor consulta los endpoints oficiales, inyecta las credenciales (API Keys) y devuelve el JSON procesado al frontend, garantizando que las API Keys nunca se expongan al cliente.

### Características Principales

✅ **Tres APIs Públicas Integradas:** NASA, FIFA e INEGI  
✅ **Gestión Segura de API Keys:** Variables de entorno (.env)  
✅ **Landing Page Interactiva:** Interfaz moderna con Pug + CSS Personalizado  
✅ **Dashboards Dinámicos:** Consumo de datos cualitativos y cuantitativos  
✅ **Validación de Errores:** Manejo de excepciones y datos de respaldo  
✅ **Código Full Stack:** Backend en Node.js y Frontend en JavaScript vanilla  

---

## 📅 Guía de Fases de Desarrollo

| Fase | Título | Descripción | Estatus |
| :---- | :--- | :--- | :--- |
| **1** | **Infraestructura Base** | Configuración de `package.json` e instalación de dependencias (express, dotenv, axios, pug). | ✅ Finalizado |
| **2** | **Servidor y Estructura MVC** | Creación del servidor Express, configuración de carpetas (`/backend`, `/views`, `/public`), middleware de logging. | ✅ Finalizado |
| **3** | **Controladores y Rutas (20+ Endpoints)** | Implementación de lógica asíncrona para consumir NASA, FIFA e INEGI con datos de respaldo. | ✅ Finalizado |
| **4** | **Interfaz de Usuario (UX/UI)** | Landing Page y 3 Dashboards dinámicos con Pug, CSS personalizado y efecto de estrellas. | ✅ Finalizado |
| **5** | **Pruebas y Documentación** | Documentación completa en README.md, tabla de 20 endpoints, pruebas funcionales capturadas. | ⏳ En Progreso |

---

## 📊 Tabla de 20 Endpoints Disponibles

### NASA API (https://api.nasa.gov)

| ID | Endpoint | Método | Descripción | Parámetros |
| :-- | :--- | :-- | :--- | :--- |
| 1 | `/planetary/apod` | GET | Astronomical Picture of the Day | `date` (YYYY-MM-DD), `hd` (boolean) |
| 2 | `/planetary/earth/imagery` | GET | Imágenes satelitales de la Tierra | `lon`, `lat`, `dim`, `date` |
| 3 | `/planetary/earth/assets` | GET | Disponibilidad de imágenes satelitales | `lon`, `lat` |
| 4 | `/neo/rest/v1/feed` | GET | Asteroides cercanos a la Tierra | `start_date`, `end_date` |
| 5 | `/neo/rest/v1/lookup/:id` | GET | Información detallada de un asteroide | `asteroid_id` |
| 6 | `/DONKI/FLR` | GET | Solar Flares (Erupciones Solares) | `startDate`, `endDate` |
| 7 | `/DONKI/CME` | GET | Coronal Mass Ejections | `startDate`, `endDate` |
| 8 | `/DONKI/MPC` | GET | Magnetic Connections | `startDate`, `endDate` |
| 9 | `/DONKI/RBE` | GET | Radiation Belt Enhancements | `startDate`, `endDate` |
| 10 | `/DONKI/HSS` | GET | High Speed Streams | `startDate`, `endDate` |
| 11 | `/techport/api/projects` | GET | Proyectos Tecnológicos NASA | `updatedSince` |
| 12 | `/techport/api/projects/:id` | GET | Detalles de un proyecto específico | `project_id` |
| 13 | `/mars-photos/api/v1/rovers/curiosity/photos` | GET | Fotos del Rover Curiosity | `sol`, `camera`, `page` |
| 14 | `/mars-photos/api/v1/rovers/opportunity/photos` | GET | Fotos del Rover Opportunity | `sol`, `camera`, `page` |
| 15 | `/mars-photos/api/v1/rovers/spirit/photos` | GET | Fotos del Rover Spirit | `sol`, `camera`, `page` |

### FIFA API (https://v3.football.api-sports.io)

| ID | Endpoint | Método | Descripción | Parámetros |
| :-- | :--- | :-- | :--- | :--- |
| 16 | `/leagues` | GET | Lista de todas las ligas | `current`, `country`, `type` |
| 17 | `/leagues/:id/seasons` | GET | Temporadas de una liga | `league_id` |
| 18 | `/leagues/:id/standings` | GET | Tabla de posiciones | `league_id`, `season` |
| 19 | `/players` | GET | Búsqueda de jugadores | `search`, `season` |
| 20 | `/fixtures` | GET | Partidos programados | `league`, `season`, `from`, `to` |

---

## 🛠️ Instalación y Uso

### 1️⃣ Prerequisitos
- **Node.js v18+** instalado
- **npm v9+** instalado
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### 2️⃣ Clonar y Configurar

```bash
# Clonar el repositorio
git clone https://github.com/NataliaMtz123/AWOS_Practica05_240537.git
cd AWOS_Practica05_240537

# Instalar dependencias
npm install

# Crear archivo .env (basado en .env.example)
cp .env.example .env
```

### 3️⃣ Configurar Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# Puerto del servidor
PORT=3000

# NASA API Key (solicitar en https://api.nasa.gov)
NASA_API_KEY=tu_clave_aqui

# FIFA API Key (solicitar en https://www.api-football.com/)
FIFA_API_KEY=tu_clave_aqui

# INEGI API Key (solicitar en https://www.inegi.org.mx)
INEGI_API_KEY=tu_clave_aqui
```

### 4️⃣ Obtener las API Keys

#### 🌌 NASA API Key
1. Visitar: https://api.nasa.gov
2. Completar formulario con email
3. API Key se envía por correo inmediatamente
4. Usar la clave en `.env` como `NASA_API_KEY`

#### ⚽ FIFA API Key
1. Visitar: https://www.api-football.com/
2. Registrarse y seleccionar plan gratuito
3. Copiar API Key del dashboard
4. Usar en `.env` como `FIFA_API_KEY`

#### 📊 INEGI API Key
1. Visitar: https://www.inegi.org.mx/app/api/indicadores/desarrolladores/
2. Registrarse con email académico
3. API Key disponible en "Mis Aplicaciones"
4. Usar en `.env` como `INEGI_API_KEY`

### 5️⃣ Ejecutar la Aplicación

> ⚠️ **Nota importante:** asegúrate de que el archivo `.env` contenga una **NASA_API_KEY** válida (el valor `DEMO_KEY` tiene límites estrictos y puede generar errores 403). Obtén una en https://api.nasa.gov y reemplaza el valor antes de iniciar.

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Modo producción
npm start
```

La aplicación estará disponible en: **http://localhost:3000**

---

## 📁 Estructura del Proyecto

```
AWOS_Practica05_240537/
├── backend/
│   ├── controllers/          # Lógica de negocio (consumo de APIs)
│   │   ├── fifaController.js         # Endpoints FIFA (20+)
│   │   ├── nasaController.js         # Endpoints NASA (15+)
│   │   └── inegiController.js        # Endpoints INEGI (6+)
│   ├── routes/              # Definición de rutas
│   │   ├── fifaRoutes.js
│   │   ├── nasaRoutes.js
│   │   └── inegiRoutes.js
│   └── middleware/          # Middleware personalizado
│       └── requestLogger.js  # Logger de peticiones HTTP
├── views/                   # Plantillas Pug
│   ├── layout.pug                   # Layout base
│   ├── index.pug                    # Landing Page
│   ├── fifa_dashboard.pug           # Dashboard FIFA
│   ├── nasa_dashboard.pug           # Dashboard NASA
│   └── inegi_dashboard.pug          # Dashboard INEGI
├── public/                  # Archivos estáticos
│   ├── style.css            # Estilos globales
│   ├── stars.js             # Efecto de estrellas animadas
│   └── charts.js            # Gráficos dinámicos (Chart.js)
├── index.js                 # Punto de entrada del servidor
├── package.json             # Dependencias del proyecto
├── .env.example             # Plantilla de variables de entorno
├── .gitignore               # Archivos a ignorar en Git
└── README.md                # Este archivo
```

---

## 🎨 Interfaz de Usuario

### Landing Page (/)
- Bienvenida con animación de estrellas
- Tarjetas interactivas para cada API (NASA, FIFA, INEGI)
- Navegación clara a dashboards
- Responsive design para móviles

### Dashboard NASA (/dashboard/nasa)
**Datos Cualitativos:**
- Título de la imagen astronómica
- Explicación detallada
- Fecha de captura

**Datos Cuantitativos:**
- Dimensiones de la imagen
- Copyright/Créditos
- Tipo de media (imagen/video)

**Funcionalidades:**
- Selector de fecha para buscar imágenes específicas
- Visualización de imágenes satelitales HD
- Galería de imágenes del espacio

### Dashboard FIFA (/dashboard/fifa)
**Datos Cualitativos:**
- Nombres de ligas
- Nombres de equipos
- Nombres de jugadores

**Datos Cuantitativos:**
- Tabla de posiciones (puntos, partidos, goles)
- Estadísticas de jugadores (goles, asistencias)
- Información de partidos (marcadores, fechas)

**Funcionalidades:**
- Búsqueda de jugadores
- Tabla de posiciones por liga
- Información de próximos partidos

### Dashboard INEGI (/dashboard/inegi)
**Datos Cualitativos:**
- Nombres de indicadores económicos
- Descripciones de métricas
- Períodos de tiempo

**Datos Cuantitativos:**
- Cifras de población
- Tasas de inflación
- PIB y desocupación
- Datos históricos (series temporales)

**Funcionalidades:**
- Gráficos interactivos (población, inflación, PIB)
- Búsqueda de indicadores por ID
- Visualización de tendencias históricas
- Datos de respaldo en caso de fallo de API

---

## 🔐 Seguridad

### Protección de API Keys
- ✅ Las claves se almacenan en `.env` (no versionado en Git)
- ✅ Backend actúa como proxy: el frontend no accede directamente a APIs externas
- ✅ Las peticiones incluyen validación y manejo de errores
- ✅ Datos de respaldo para continuidad de servicio

### Validación de Entrada
- ✅ Parámetros validados antes de enviar a APIs externas
- ✅ Manejo de excepciones con try-catch en controladores
- ✅ Respuestas estructuradas con campos `success`, `error`, `data`

---

## 🧪 Pruebas y Resultados

### Prueba 1: Cargar Landing Page
**Paso:** Acceder a http://localhost:3000  
**Resultado Esperado:** Página principal con 3 tarjetas de API y efecto de estrellas animadas  
**Estado:** ✅ EXITOSO  

### Prueba 2: Acceder a Dashboard NASA
**Paso:** Click en "Explorar NASA"  
**Resultado Esperado:** Cargue imagen del día actual con descripción  
**Estado:** ✅ EXITOSO  

### Prueba 3: Buscar Imagen NASA por Fecha
**Paso:** Seleccionar fecha y hacer click en "EXPLORAR FECHA"  
**Resultado Esperado:** Muestre la imagen astronómica de esa fecha  
**Estado:** ✅ EXITOSO  

### Prueba 4: Acceder a Dashboard FIFA
**Paso:** Click en "Consultar FIFA"  
**Resultado Esperado:** Cargue liga actual con tabla de posiciones y jugadores  
**Estado:** ✅ EXITOSO  

### Prueba 5: Buscar Jugador FIFA
**Paso:** Ingresar nombre de jugador (ej: "Messi") y buscar  
**Resultado Esperado:** Muestre estadísticas del jugador (goles, asistencias, equipo)  
**Estado:** ✅ EXITOSO  

### Prueba 6: Acceder a Dashboard INEGI
**Paso:** Click en "Ver Datos INEGI"  
**Resultado Esperado:** Cargue indicadores económicos de México  
**Estado:** ✅ EXITOSO  

### Prueba 7: Visualizar Gráficos INEGI
**Paso:** Ver página INEGI completa  
**Resultado Esperado:** Gráficos de población, inflación, PIB y desocupación  
**Estado:** ✅ EXITOSO  

### Prueba 8: Búsqueda por Indicador ID INEGI
**Paso:** Ingresar ID de indicador (ej: 6200205259)  
**Resultado Esperado:** Cargue datos históricos del indicador  
**Estado:** ✅ EXITOSO  

### Prueba 9: Manejo de Errores de API
**Paso:** Desactivar internet o usar API Key inválida  
**Resultado Esperado:** Muestre datos de respaldo sin interrumpir UX  
**Estado:** ✅ EXITOSO  

### Prueba 10: Responsividad Móvil
**Paso:** Acceder desde dispositivo móvil o usar DevTools  
**Resultado Esperado:** Interfaz adapta correctamente a pantallas pequeñas  
**Estado:** ✅ EXITOSO  

---

## 💻 Código Front End

### Tecnologías Utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados (sin frameworks)
- **JavaScript Vanilla** - Interactividad sin dependencias
- **Pug.js** - Templating en backend

### Características del Frontend

#### 1. **Landing Page Animada** 
```javascript
// Efecto de estrellas animadas (public/stars.js)
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
// Generación dinámica de estrellas con animación suave
```

#### 2. **Selectores de Fecha Interactivos** 
```html
<input type="date" name="date" />
<button type="submit">EXPLORAR FECHA</button>
```

#### 3. **Gráficos Dinámicos** 
```javascript
// Implementación con datos en tiempo real
// Gráficos: barras, líneas, doughnut
```

#### 4. **Búsqueda en Tiempo Real**
```javascript
// AJAX sin refresh de página
// Validación de entrada antes de enviar
// Visualización de resultados dinámica
```

---

## 🖥️ Código Back End

### Tecnologías Utilizadas
- **Node.js v18+** - Runtime JavaScript
- **Express.js v5.x** - Framework web
- **Axios** - Cliente HTTP para consumir APIs externas
- **Dotenv** - Gestión de variables de entorno
- **Pug.js** - Motor de templates

### Arquitectura MVC

#### **Modelo (Controllers)**
Cada controlador maneja la lógica de negocio:

```javascript
// backend/controllers/fifaController.js
const getLeagues = async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE}/leagues`, {
      headers: { 'x-apisports-key': TOKEN },
      params: req.query
    });
    res.json({ success: true, data: data.response });
  } catch (err) {
    res.json({ success: false, data: STATIC_FIFA.leagues });
  }
};
```

#### **Rutas (Routes)**
Definición de endpoints:

```javascript
// backend/routes/fifaRoutes.js
router.get('/leagues', fifaController.getLeagues);
router.get('/players', fifaController.getPlayers);
router.get('/standings', fifaController.getStandings);
```

#### **Vista (Views)**
Templates Pug que consumen datos:

```pug
// views/fifa_dashboard.pug
each league in leagues
  .card
    h3= league.name
    p= league.country.name
    img(src=league.logo)
```

### API Endpoints Implementados

#### NASA Routes
- `GET /api/nasa/apod` - Imagen del día
- `GET /api/nasa/apod?date=YYYY-MM-DD` - Imagen por fecha
- `GET /api/nasa/asteroids` - Asteroides cercanos
- `GET /api/nasa/solar-flares` - Erupciones solares
- `GET /api/nasa/images?q=query` - Búsqueda de imágenes
- `GET /api/nasa/tech` - Proyectos tecnológicos

#### FIFA Routes
- `GET /api/fifa/leagues` - Todas las ligas
- `GET /api/fifa/countries` - Países disponibles
- `GET /api/fifa/players?search=name` - Búsqueda de jugadores
- `GET /api/fifa/standings` - Tabla de posiciones
- `GET /api/fifa/fixtures` - Próximos partidos
- `GET /api/fifa/teams` - Equipos disponibles

#### INEGI Routes
- `GET /api/inegi/poblacion` - Datos de población
- `GET /api/inegi/inflacion` - Datos de inflación
- `GET /api/inegi/economia` - Indicadores económicos
- `GET /api/inegi/indicador/:id` - Indicador específico por ID

---

## 📦 Dependencias del Proyecto

```json
{
  "dependencies": {
    "express": "^5.2.1",
    "axios": "^1.13.6",
    "dotenv": "^17.3.1",
    "pug": "^3.0.3",
    "mysql2": "^3.19.0",
    "sequelize": "^6.37.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

---

## 🚀 Deployment

### Opción 1: Heroku
```bash
heroku create nombre-app
heroku config:set NASA_API_KEY=xxx
git push heroku main
```

### Opción 2: Railway
1. Conectar repositorio GitHub
2. Definir variables de entorno
3. Deploy automático

### Opción 3: VPS (Servidor Propio)
```bash
npm install -g pm2
pm2 start index.js --name "apis-app"
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module 'axios'"
```bash
npm install axios
```

### Error: "API Key inválida"
1. Verificar `.env` tiene las claves correctas
2. Regenerar claves en sitios oficiales
3. Reiniciar servidor: `npm run dev`

### Las imágenes no cargan
- Verificar URLs válidas en APIs
- Comprobar conexión a internet
- Verificar permisos de `public/`

---

## 📚 Referencias Útiles

- [Documentación NASA API](https://api.nasa.gov/)
- [Documentación FIFA API](https://www.api-football.com/documentation)
- [Documentación INEGI](https://www.inegi.org.mx/app/api/)
- [Express.js Docs](https://expressjs.com/)
- [Pug Documentation](https://pugjs.org/)

---

## 📄 Licencia
Este proyecto está bajo licencia MIT.

---

## 👨‍💻 Autor
**Ingrid Natalia Martínez Carrasco** - 240537  
Universidad Tecnológica de Xicotepec de Juárez

**Fecha de Inicio:** 20 de febrero de 2026  
**Fecha de Entrega:** 6 de marzo de 2026

---

**¡Gracias por revisar este proyecto! 🙌**
