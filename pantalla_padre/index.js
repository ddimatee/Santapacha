document.addEventListener('DOMContentLoaded', () => {
  // Sección de tarjetas
  const cards = document.querySelectorAll('.card');
  const contenidoReportes = document.getElementById('contenido-reportes');
  const contenidoNotas = document.getElementById('contenido-notas');
  const contenidoNotificaciones = document.getElementById('contenido-notificaciones');

  // Función para mostrar secciones
  function mostrarSeccion(seccion) {
    contenidoReportes.style.display = 'none';
    contenidoNotas.style.display = 'none';
    contenidoNotificaciones.style.display = 'none';

    if (seccion === 'reportes-academicos') {
      contenidoReportes.style.display = 'block';
    } else if (seccion === 'ver-notas') {
      contenidoNotas.style.display = 'block';
    } else if (seccion === 'notificaciones') {
      contenidoNotificaciones.style.display = 'block';
    }
  }

  // Agregar eventos a cada tarjeta para mostrar la sección correspondiente
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.id === 'reportes-academicos') {
        mostrarSeccion('reportes-academicos');
      } else if (card.id === 'ver-notas') {
        mostrarSeccion('ver-notas');
      } else if (card.id === 'notificaciones') {
        mostrarSeccion('notificaciones');
      } else {
        alert(`Redirigiendo a: ${card.innerText}`);
      }
    });
  });

  // Al hacer clic en los botones de descarga
  const descargarBtns = document.querySelectorAll('.descargar-btn');
  descargarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Descargando reporte en formato PDF/Excel...');
      // Aquí podrías integrar una funcionalidad real para descargar
    });
  });
});
