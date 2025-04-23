document.addEventListener('DOMContentLoaded', () => {
    // Manejador de eventos para los botones de descarga
    const descargarBtns = document.querySelectorAll('.descargar-btn');
    descargarBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const formato = e.target.innerText.includes("PDF") ? "PDF" : "Excel";
        alert(`Descargando reporte en formato ${formato}...`);
        // Aquí puedes agregar lógica real de descarga si tienes backend
      });
    });
  });
  