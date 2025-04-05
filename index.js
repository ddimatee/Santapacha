// Función para mostrar secciones
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');

    const activa = document.getElementById(id);
    if (activa) activa.style.display = 'block';
}

// Mostrar sección 'inicio' al cargar
window.onload = () => mostrarSeccion('inicio');