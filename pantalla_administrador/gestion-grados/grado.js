// Función para mostrar secciones
function mostrarSeccion(id, breadcrumbText) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content').forEach(function(seccion) {
        seccion.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.style.display = 'block';
    }

    // Actualizar el breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb && breadcrumbText) {
        breadcrumb.textContent = breadcrumbText;
    }
}

// Función para volver al menú
function volverAlMenu() {
    if (confirm('¿Está seguro que desea volver al menú principal?')) {
        window.location.href = '../indexv2.html';
    }
}

// Función para crear grado
function crearGrado(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    
    if (nombre) {
        alert('Grado creado exitosamente');
        document.getElementById('nombre').value = '';
    } else {
        alert('Por favor ingrese el nombre del grado');
    }
}