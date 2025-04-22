function mostrarBoletin() {
    const periodo = document.getElementById('periodo').value;
    const tabla = document.getElementById('tablaBoletin');
  
    if (periodo !== "") {
      tabla.classList.remove('d-none');
      tabla.scrollIntoView({ behavior: 'smooth' });
    } else {
      tabla.classList.add('d-none');
      alert("Por favor, seleccione un período.");
    }
  }
  