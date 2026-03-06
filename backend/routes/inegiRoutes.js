import express from 'express';
const router = express.Router();
import inegiController from '../controllers/inegiController.js';

// --- RUTAS ESPECÍFICAS (Fase 03) ---

// Endpoints específicos para datos importantes
router.get('/poblacion', inegiController.getPoblacion);
router.get('/inflacion', inegiController.getInflacion);
router.get('/economia', inegiController.getEconomia);

// --- RUTA PARA DATOS DEL DASHBOARD (Fase 06) ---
router.get('/indicador/:id', inegiController.getInegiIndicator);

// --- RUTA PARA GRÁFICAS DEL DASHBOARD ---
router.get('/charts-data', async (req, res) => {
  try {
    const data = await inegiController.getDashboardChartsData();
    res.json({ success: true, data });
  } catch (err) {
    res.json({ success: false, data: [] });
  }
});

// --- RUTA PARA OBTENER TOP 10 INDICADORES ---
router.get('/top10', async (req, res) => {
  try {
    const list = await inegiController.getTopIndicators();
    res.json({ success: true, count: list.length, data: list });
  } catch (err) {
    res.json({ success: false, count: 0, data: [] });
  }
});

export default router;