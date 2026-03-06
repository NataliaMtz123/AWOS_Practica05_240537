const express = require('express');
const router = express.Router();
const nasaController = require('../controllers/nasaController');

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

module.exports = router;