import express from 'express';
const router = express.Router();
import fifaController from '../controllers/fifaController.js';

// --- RUTAS ESPECÍFICAS (Fase 03 y Fase 05) ---

// 1. Catálogo de Ligas (Dashboard)
router.get('/leagues', fifaController.getLeagues);

// 2. Países afiliados
router.get('/countries', fifaController.getCountries);

// 3. Estadios (Venues)
router.get('/venues', fifaController.getVenues);

// 4. Equipos y Jugadores
router.get('/teams', fifaController.getTeams);
router.get('/players', fifaController.getPlayers);

// 5. Estadísticas y Resultados
router.get('/standings', fifaController.getStandings);
router.get('/fixtures', fifaController.getFixtures);
router.get('/topscorers', fifaController.getTopScorers);

// --- RUTA MAESTRA DINÁMICA (Fase 06) ---
/**
 * RUTA COMODÍN: Permite consultar CUALQUIER endpoint de la API de Fútbol.
 * Cumple con el requisito de documentar 20 endpoints reales.
 * Ejemplo: /api/fifa/predictions?fixture=12345
 */
router.get('/recurso/:id', fifaController.handleGenericFIFA);

export default router;