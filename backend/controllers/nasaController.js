const axios = require('axios');

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = process.env.NASA_API_KEY;

// --- Utilidad: petición a NASA API ---
async function fetchNasa(endpoint, params = {}) {
    const { data } = await axios.get(`${BASE_URL}/${endpoint}`, {
        params: { ...params, api_key: API_KEY }
    });
    return data;
}

// --- Manejo de errores para respuestas JSON ---
const handleError = (res, err, source) => {
    res.status(500).json({
        success: false,
        source,
        student: 'Yazmin Ariana - 240235',
        error: err.message
    });
};

// 1. Imagen del día (APOD) - Respuesta JSON (Soporta ?date=YYYY-MM-DD)
exports.getApod = async (req, res) => {
    try {
        const data = await fetchNasa('planetary/apod', req.query);
        res.json({ success: true, source: 'NASA APOD', student: 'Yazmin Ariana - 240235', data });
    } catch (err) { handleError(res, err, 'NASA APOD'); }
};

// 2. Asteroides cercanos (NeoWs)
exports.getAsteroids = async (req, res) => {
    try {
        const data = await fetchNasa('neo/rest/v1/feed/today');
        res.json({ success: true, source: 'NASA Asteroids', student: 'Yazmin Ariana - 240235', data: data.near_earth_objects });
    } catch (err) { handleError(res, err, 'Asteroids'); }
};

// 3. Clima Espacial (Solar Flares)
exports.getSolarFlares = async (req, res) => {
    try {
        const data = await fetchNasa('DONKI/FLR', { startDate: '2024-01-01', endDate: '2024-01-31' });
        res.json({ success: true, source: 'NASA Solar Flares', student: 'Yazmin Ariana - 240235', data });
    } catch (err) { handleError(res, err, 'Solar Flares'); }
};

// 4. Biblioteca de Imágenes (Buscador)
exports.searchImages = async (req, res) => {
    try {
        const { q = 'galaxy' } = req.query;
        const { data } = await axios.get(`https://images-api.nasa.gov/search?q=${q}`);
        res.json({ success: true, source: 'NASA Image Library', student: 'Yazmin Ariana - 240235', data: data.collection.items.slice(0, 10) });
    } catch (err) { handleError(res, err, 'Image Search'); }
};

// 5. Proyectos Tecnológicos (TechPort)
exports.getTechProjects = async (req, res) => {
    try {
        const data = await fetchNasa('techport/api/projects');
        res.json({ success: true, source: 'NASA TechPort', student: 'Yazmin Ariana - 240235', data: data.projects.slice(0, 10) });
    } catch (err) { handleError(res, err, 'TechPort'); }
};

// --- 6. FUNCIONES PARA DASHBOARDS (Fase 05 - Renderizado Dinámico) ---

/**
 * Obtener datos APOD para renderizado en Pug.
 * @param {string} date - Fecha opcional en formato YYYY-MM-DD para búsqueda en tiempo real.
 */
exports.getApodData = async (date = null) => {
    try {
        // Si hay fecha, la agregamos a los parámetros de axios
        const params = date ? { date } : {};

        // fetchNasa ya agrega la API_KEY automáticamente
        return await fetchNasa('planetary/apod', params);
    } catch (err) {
        console.error("Error en getApodData:", err.message);
        return null;
    }
};

// Obtener múltiples imágenes para Galería Multimedia
exports.getGalleryData = async (query = 'nebula') => {
    try {
        const { data } = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
        return data.collection.items.slice(0, 6).map(item => ({
            title: item.data[0].title,
            description: item.data[0].description,
            href: item.links[0].href,
            date: item.data[0].date_created
        }));
    } catch (err) {
        console.error("Error en getGalleryData (Fase 05):", err.message);
        return [];
    }
};

// --- 7. FUNCIÓN MAESTRA DINÁMICA (Cubre los 20+ endpoints para el README) ---
/**
 * Manejador dinámico que permite consultar cualquier endpoint de la NASA 
 * enviando los parámetros necesarios a través de la query string.
 */
exports.getDynamicNasa = async (req, res) => {
    const subEndpoint = req.params[0];
    try {
        const data = await fetchNasa(subEndpoint, req.query);
        res.json({
            success: true,
            source: `NASA API: ${subEndpoint}`,
            student: 'Yazmin Ariana - 240235',
            data
        });
    } catch (err) { handleError(res, err, subEndpoint); }
};