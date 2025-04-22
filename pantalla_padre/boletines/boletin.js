function mostrarBoletin() {
    const grado = document.getElementById("grado").value;
    const periodo = document.getElementById("periodo").value;
    const tabla = document.getElementById("tablaBoletin");
  
    if (grado && periodo) {
      tabla.classList.remove("d-none");
    } else {
      tabla.classList.add("d-none");
      alert("Por favor seleccione el grado y el período.");
    }
  }
  