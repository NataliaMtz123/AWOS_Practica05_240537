import 'dotenv/config'; // carga variables de entorno antes de cualquier otro módulo
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// advertencias tempranas si faltan claves importantes
if (!process.env.NASA_API_KEY) {
  console.warn('⚠️  ENV variable NASA_API_KEY no configurada. Asegúrate de copiar .env.example y llenar la clave.');
}
if (!process.env.FIFA_API_KEY) {
  console.warn('⚠️  ENV variable FIFA_API_KEY no configurada.');
}
if (!process.env.INEGI_API_KEY) {
  console.warn('⚠️  ENV variable INEGI_API_KEY no configurada.');
}

// Obtener __dirname equivalente en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Importar rutas (nota: deben terminar en .js)
import fifaRoutes from './backend/routes/fifaRoutes.js';
import inegiRoutes from './backend/routes/inegiRoutes.js';
import nasaRoutes from './backend/routes/nasaRoutes.js';
import nasaController from './backend/controllers/nasaController.js';

// Usar rutas
app.use('/fifa', fifaRoutes);
app.use('/inegi', inegiRoutes);
app.use('/nasa', nasaRoutes);

// Rutas para dashboards
app.get('/dashboard/fifa', (req, res) => {
  res.render('fifa_dashboard');
});

app.get('/dashboard/inegi', (req, res) => {
  res.render('inegi_dashboard');
});

app.get('/dashboard/nasa', async (req, res) => {
  try {
    const { date } = req.query;
    const apod = await nasaController.getApodData(date);
    res.render('nasa_dashboard', { apod });
  } catch (err) {
    console.error('Error loading NASA dashboard:', err);
    res.render('nasa_dashboard', { apod: null });
  }
});

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});