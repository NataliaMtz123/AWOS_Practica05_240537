// Cambiar require por import
import express from 'express';
const router = express.Router();
import nasaController from '../controllers/nasaController.js';

// --- RUTAS ESPECÍFICAS (Fase 03 y Fase 05) ---

// 1. Imagen del día (Soporta ?date=YYYY-MM-DD)
router.get('/apod', nasaController.getApod);

// 2. Asteroides cercanos (NeoWs)
router.get('/asteroids', nasaController.getAsteroids);

// 3. Clima Espacial (Solar Flares)
router.get('/solar', nasaController.getSolarFlares);

// 4. Biblioteca de Imágenes (Buscador)
router.get('/search', nasaController.searchImages);

// 5. Proyectos Tecnológicos (TechPort)
router.get('/tech', nasaController.getTechProjects);

// --- RUTA MAESTRA DINÁMICA (Fase 06) ---
// Esta ruta es la que permite cumplir con los 20 endpoints del README.
// Captura cualquier sub-ruta y la envía al controlador dinámico.
router.get('/recurso/:id', nasaController.getDynamicNasa);

// Cambiar module.exports por export default
export default router;