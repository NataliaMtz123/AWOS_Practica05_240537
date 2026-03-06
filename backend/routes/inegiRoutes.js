// Cambiar require por import
import express from 'express';
const router = express.Router();
import inegiController from '../controllers/inegiController.js';

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

// Cambiar module.exports por export default
export default router;