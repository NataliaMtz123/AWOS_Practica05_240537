const express = require('express');
const router = express.Router();
const inegiController = require('../controllers/inegiController');

// --- RUTAS ESPECÍFICAS (Fase 03 y Fase 05) ---

// 1. Población (Usada en el Dashboard)
router.get('/poblacion', inegiController.getPoblacion);

// 2. Inflación
router.get('/inflacion', inegiController.getInflacion);

// 3. Economía (Maneja los indicadores estáticos: pib, desocupacion, etc.)
router.get('/economia', inegiController.getEconomia);

// --- RUTA DINÁMICA (Cubre los 20 endpoints del README) ---
// Permite consultar cualquier indicador real por su ID
// Ejemplo: /api/inegi/indicador/6200205259
router.get('/indicador/:indicatorId', inegiController.getInegiIndicator);

module.exports = router;