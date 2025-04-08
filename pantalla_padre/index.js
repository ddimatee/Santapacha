function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');
  
    const activa = document.getElementById(id);
    if (activa) activa.style.display = 'block';
  }
  
  // Mostrar sección 'inicio' al cargar
  window.onload = () => mostrarSeccion('inicio');
  
  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('fade');
    });
  
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = 'block';
        setTimeout(() => activa.classList.add('fade'), 10);
    }
  
    // Opcional: activar clase "active" en el menú
    const enlaces = document.querySelectorAll('.sidebar ul li a');
    enlaces.forEach(link => link.classList.remove('active'));
  
    const linkActivo = document.querySelector(`a[onclick*="${id}"]`);
    if (linkActivo) linkActivo.classList.add('active');
  }
  
  // Mostrar por defecto
  window.onload = () => mostrarSeccion('inicio');
  
  // Mostrar/ocultar submenú
  function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('visible');
  }
  
  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');
  
    const activa = document.getElementById(id);
    if (activa) activa.style.display = 'block';
  }
  
  // Mostrar sección 'inicio' al cargar
  window.onload = () => mostrarSeccion('inicio');
  
  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('fade');
    });
  
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = 'block';
        setTimeout(() => activa.classList.add('fade'), 10);
    }
  
    // Opcional: activar clase "active" en el menú
    const enlaces = document.querySelectorAll('.sidebar ul li a');
    enlaces.forEach(link => link.classList.remove('active'));
  
    const linkActivo = document.querySelector(`a[onclick*="${id}"]`);
    if (linkActivo) linkActivo.classList.add('active');
  }
  
  // Mostrar por defecto
  window.onload = () => mostrarSeccion('inicio');
  
  // Mostrar/ocultar submenú
  function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('visible');
  }
  
  
  