import axios from 'axios';
const TOKEN = process.env.INEGI_API_KEY;

// --- Base de datos local de indicadores conocidos ---
const INDICADORES_CONOCIDOS = {
    '1002000001': {
        nombre: 'Población Total',
        valor: '126,014,024',
        fecha: '2020',
        unidad: 'Personas'
    },
    '444609': {
        nombre: 'INPC (Inflación)',
        valor: '3.79%',
        fecha: 'Enero 2026',
        unidad: 'Porcentaje'
    },
    '444610': {
        nombre: 'PIB',
        valor: '0.9%',
        fecha: '4to Trimestre 2025',
        unidad: 'Porcentaje'
    },
    '444612': {
        nombre: 'Tasa de Desocupación',
        valor: '2.6%',
        fecha: 'Enero 2026',
        unidad: 'Porcentaje'
    },
    '216064': {
        nombre: 'INPC General',
        valor: '3.79%',
        fecha: 'Enero 2026',
        unidad: 'Porcentaje'
    }
};

// --- Datos históricos para la gráfica ---
const DATOS_HISTORICOS = [
    { periodo: '2020', valor: 126014024 },
    { periodo: '2010', valor: 112336538 },
    { periodo: '2000', valor: 97483312 },
    { periodo: '1990', valor: 81249645 },
    { periodo: '1980', valor: 66846833 }
];

// --- FUNCIÓN PRINCIPAL PARA EL DASHBOARD ---
const getIndicatorData = async (id = '1002000001') => {
    console.log('🔍 Buscando indicador:', id);
    
    // Buscar en nuestra base local - es la única fuente
    if (INDICADORES_CONOCIDOS[id]) {
        console.log('✅ Encontrado en base local:', INDICADORES_CONOCIDOS[id]);
        return INDICADORES_CONOCIDOS[id];
    }
    
    // Fallback: devolver indicador genérico si no existe
    console.warn(`⚠️ Indicador ${id} no encontrado, devolviendo datos genéricos`);
    return {
        id: id,
        nombre: `Indicador ${id}`,
        valor: "Dato no disponible",
        fecha: "2025",
        unidad: "N/A"
    };
};

// --- FUNCIÓN PARA DATOS DE GRÁFICA ---
const getDashboardChartsData = async () => {
    // Siempre devolver los datos históricos
    return DATOS_HISTORICOS;
};

// --- Obtener lista de 10 indicadores conocidos ---
const getTopIndicators = async () => {
    const ids = Object.keys(INDICADORES_CONOCIDOS).slice(0, 10);
    const list = ids.map(id => ({ id, ...INDICADORES_CONOCIDOS[id] }));
    return list;
};

// --- ENDPOINTS ESPECÍFICOS (para API) ---
const getPoblacion = (req, res) => {
    res.json({
        success: true,
        source: 'INEGI Población',
        student: 'Ingrid Natalia - 240537',
        data: INDICADORES_CONOCIDOS['1002000001']
    });
};

const getInflacion = (req, res) => {
    res.json({
        success: true,
        source: 'INEGI Inflación',
        student: 'Ingrid Natalia - 240537',
        data: INDICADORES_CONOCIDOS['444609']
    });
};

const getEconomia = (req, res) => {
    const { tipo = 'pib' } = req.query;
    const data = STATIC_DATA?.[tipo] || { valor: '0.9%', periodo: '2025' };
    res.json({
        success: true,
        source: `INEGI ${tipo.toUpperCase()}`,
        student: 'Ingrid Natalia - 240537',
        data
    });
};

const getInegiIndicator = async (req, res) => {
    const indicatorId = req.params.indicatorId || req.params.id;
    const data = INDICADORES_CONOCIDOS[indicatorId] || {
        nombre: `Indicador ${indicatorId}`,
        valor: 'No disponible',
        fecha: 'N/A'
    };
    
    res.json({
        success: true,
        source: `INEGI Indicador ${indicatorId}`,
        student: 'Ingrid Natalia - 240537',
        data
    });
};

export default { 
    getPoblacion, 
    getInflacion, 
    getEconomia, 
    getIndicatorData, 
    getInegiIndicator, 
    getDashboardChartsData, 
    getTopIndicators
};