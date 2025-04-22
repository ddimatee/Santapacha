// Datos simulados del estudiante con estado de asignación
const materiasAsignadas = [
    { nombre: 'Matemáticas', profesor: 'Prof. Ana Torres', asignado: true },
    { nombre: 'Ciencias Naturales', profesor: 'Prof. Mario Ramírez', asignado: true },
    { nombre: 'Lengua y Literatura', profesor: 'Prof. Laura Suárez', asignado: false },
    { nombre: 'Educación Física', profesor: 'Prof. Carlos Gómez', asignado: true },
    { nombre: 'Historia', profesor: 'Prof. Valeria Méndez', asignado: false },
  ];
  
  const lista = document.getElementById('subjectList');
  
  // Cargar materias en la lista
  materiasAsignadas.forEach(materia => {
    const li = document.createElement('li');
    li.className = 'subject-item';
  
    const estado = materia.asignado
      ? `<span class="status">Asignado</span>`
      : `<span class="status">Asignado</span>`;
  
    li.innerHTML = `
      <div class="subject-info">
        <span class="subject-name">${materia.nombre}</span>
        <span class="teacher">${materia.profesor}</span>
      </div>
      ${estado}
    `;
    lista.appendChild(li);
  });
  