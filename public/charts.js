document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('inegiChart');
    if (!ctx) return;

    // Configuración global de fuentes para mantener la estética técnica
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.color = '#fff';

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Población Total', 'Hombres', 'Mujeres'],
            datasets: [{
                label: 'Habitantes (Censo 2020)',
                data: [126014024, 61473390, 64540634],
                backgroundColor: [
                    'rgba(0, 212, 255, 0.8)', // Cian Neón
                    'rgba(0, 85, 255, 0.8)',  // Azul Profundo
                    'rgba(0, 170, 255, 0.8)'  // Azul Intermedio
                ],
                borderColor: '#fff',
                borderWidth: 1,
                borderRadius: 5,
                barPercentage: 0.6,
                categoryPercentage: 0.5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permite que se ajuste al alto del contenedor de 450px
            layout: {
                padding: { top: 10, bottom: 5 }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#00d4ff',
                        font: { size: 12, weight: 'bold' },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(5, 5, 5, 0.95)',
                    titleColor: '#00d4ff',
                    titleFont: { size: 14, weight: 'bold' },
                    bodyColor: '#fff',
                    bodyFont: { size: 13 },
                    borderColor: '#00d4ff',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    displayMode: 'index',
                    intersect: false,
                    callbacks: {
                        // REINTEGRADA: Función para mostrar números con comas (formato profesional)
                        label: function (context) {
                            let value = context.parsed.y;
                            return ' 📊 ' + new Intl.NumberFormat('es-MX').format(value) + ' habitantes';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawTicks: false
                    },
                    ticks: {
                        color: '#ccc',
                        font: { size: 10 },
                        // Simplifica la vista lateral (ej. 120M)
                        callback: function (value) {
                            return (value / 1000000) + 'M';
                        }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#fff',
                        font: { size: 12, weight: '500' }
                    }
                }
            },
            animation: {
                duration: 1800,
                easing: 'easeOutQuart'
            }
        }
    });
});