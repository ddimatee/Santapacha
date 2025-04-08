// Función para mostrar secciones
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

    if (id === 'modificar-usuario') {
        actualizarListaModificarUsuario();
}
}
// Mostrar por defecto
window.onload = () => mostrarSeccion('inicio');

// Mostrar/ocultar submenú
function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('visible');
}

// Lista para almacenar los usuarios
const usuarios = [];

// Función para crear un usuario
function crearUsuario(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const nombre = document.getElementById("nombreUsuario").value;
    const apellido = document.getElementById("apellidoUsuario").value;
    const tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
    const numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
    const email = document.getElementById("emailUsuario").value;
    const rol = document.getElementById("rolUsuario").value;

    // Validar que los campos no estén vacíos
    if (!nombre || !apellido || !tipoIdentificacion || !numeroIdentificacion || !email || !rol) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Agregar el usuario a la lista
    usuarios.push({
        nombre,
        apellido,
        tipoIdentificacion,
        numeroIdentificacion,
        email,
        rol,
        asignaturas: [] // Inicializar el array de asignaturas
    });

    console.log("Usuarios actuales después de agregar:", usuarios);


    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-usuario").textContent = `✅ Usuario ${nombre} ${apellido} creado correctamente.`;

    // Limpiar el formulario
    document.getElementById("form-crear-usuario").reset();

    // Opcional: Actualizar la lista de usuarios visualmente
    
    mostrarUsuarios();
    mostrarDocentes();
    actualizarListaModificarUsuario();
    actualizarListaEliminarUsuario();
    actualizarListaDocentes();
    actualizarListaDocentesParaAsignaturas();   
    
    };
    


// Función para mostrar la lista de usuarios (opcional)
function mostrarUsuarios() {
    const seccionUsuarios = document.getElementById("ver-usuarios");
    if (!seccionUsuarios) return;

    seccionUsuarios.innerHTML = "<h2>Usuarios Disponibles</h2>";
    if (usuarios.length === 0) {
        seccionUsuarios.innerHTML += "<p>No hay usuarios registrados.</p>";
        return;
    }

    const lista = document.createElement("ul");
    usuarios.forEach((usuario, index) => {
        const item = document.createElement("li");
        item.textContent = `${usuario.nombre} ${usuario.apellido} - ${usuario.tipoIdentificacion} ${usuario.numeroIdentificacion} - ${usuario.email} (${usuario.rol})`;
        lista.appendChild(item);
    });
    seccionUsuarios.appendChild(lista);
}

function eliminarUsuario(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const select = document.getElementById("usuarioSeleccionado");
    const index = select.value; // Obtiene el índice del usuario seleccionado

    if (index === "") {
        alert("Por favor, selecciona un usuario para eliminar.");
        return;
    }

    // Confirmar la eliminación
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar al usuario ${usuarios[index].nombre} ${usuarios[index].apellido}?`);
    if (!confirmacion) return;

    // Eliminar el usuario del arreglo
    usuarios.splice(index, 1);

    console.log("Usuarios actuales:", usuarios);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-eliminar-usuario").textContent = "✅ Usuario eliminado correctamente.";

    // Actualizar la lista de usuarios en la sección "Ver usuarios"
    
    mostrarUsuarios();
    mostrarDocentes()
    actualizarListaModificarUsuario();
    actualizarListaEliminarUsuario();
    actualizarListaDocentes()
    
}

// Función para actualizar las opciones del select en "Eliminar usuario"
function actualizarListaEliminarUsuario() {
    const select = document.getElementById("usuarioSeleccionado");
    select.innerHTML = ""; // Limpiar las opciones

    if (usuarios.length === 0) {
        select.innerHTML = "<option value=''>No hay usuarios disponibles</option>";
        return;
    }

    usuarios.forEach((usuario, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del usuario
        option.textContent = `${usuario.nombre} ${usuario.apellido} - ${usuario.email} - ${usuario.rol}`;
        select.appendChild(option);
    });

    console.log("Lista de usuarios actualizada en 'Eliminar usuario':", usuarios);
}

// Función para modificar un usuario
function modificarUsuario(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const select = document.getElementById("usuarioModificar");
    const index = select.value; // Obtiene el índice del usuario seleccionado

    if (index === "") {
        alert("Por favor, selecciona un usuario para modificar.");
        return;
    }

    // Obtener los nuevos valores del formulario
    const nuevoNombre = document.getElementById("nuevoNombre").value;
    const nuevoApellido = document.getElementById("nuevoApellido").value;
    const nuevoTipoIdentificacion = document.getElementById("nuevoTipoIdentificacion").value;
    const nuevoNumeroIdentificacion = document.getElementById("nuevoNumeroIdentificacion").value;
    const nuevoEmail = document.getElementById("nuevoEmail").value;
    const nuevoRol = document.getElementById("nuevoRol").value;

    // Validar que los campos no estén vacíos
    if (!nuevoNombre || !nuevoApellido || !nuevoTipoIdentificacion || !nuevoNumeroIdentificacion || !nuevoEmail || !nuevoRol) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Modificar los datos del usuario en el arreglo
    usuarios[index] = {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        tipoIdentificacion: nuevoTipoIdentificacion,
        numeroIdentificacion: nuevoNumeroIdentificacion,
        email: nuevoEmail,
        rol: nuevoRol
    };

    console.log("Usuario modificado:", usuarios[index]);
    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-modificar-usuario").textContent = "✅ Usuario modificado correctamente.";

    // Actualizar la lista de usuarios en la sección "Ver usuarios"
    mostrarUsuarios();

    // Actualizar las opciones del select en la sección "Modificar usuario"
    actualizarListaModificarUsuario();
    actualizarListaEliminarUsuario();
}

// Función para actualizar las opciones del select en "Modificar usuario"
function actualizarListaModificarUsuario() {
    console.log(usuarios);

    const select = document.getElementById("usuarioModificar");
    console.log(select); // Verifica si el elemento existe en el DOM
    select.innerHTML = ""; // Limpiar las opciones
    
    if (usuarios.length === 0) {
        select.innerHTML = "<option value=''>No hay usuarios disponibles</option>";
        return;
    }

    usuarios.forEach((usuario, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del usuario
        option.textContent = `${usuario.nombre} ${usuario.apellido} - ${usuario.email} - ${usuario.rol}`;
        select.appendChild(option);
    });
    console.log("Lista de usuarios actualizada en 'Modificar usuario':", usuarios); 
}

// Lista para almacenar los grados
const grados = [];

// Función para crear un grado
function crearGrado(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const nombre = document.getElementById("numeroGrado").value.trim();
    const descripcion = document.getElementById("descripcionGrado").value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !descripcion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Agregar el grado a la lista
    grados.push({
        nombre,
        descripcion
    });

    console.log("Grados actuales:", grados);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-crear-grado").textContent = `✅ Grado "${nombre}" creado correctamente.`;

    // Limpiar el formulario
    document.getElementById("form-crear-grado").reset();

    // Actualizar la lista de grados en la sección "Ver grados"
    mostrarGrados();
    actualizarListaEliminarGrado();
    actualizarListaModificarGrado();
    actualizarListaAsignarGrado()
}

// Función para mostrar la lista de grados
function mostrarGrados() {
    const seccionGrados = document.getElementById("lista-grados");
    if (!seccionGrados) return;

    seccionGrados.innerHTML = "";

    if (grados.length === 0) {
        seccionGrados.innerHTML = "<p>No hay grados registrados.</p>";
        return;
    }

    const lista = document.createElement("ul");
    grados.forEach((grado, index) => {
        const item = document.createElement("li");
        item.textContent = `${grado.nombre} - ${grado.descripcion}`;
        lista.appendChild(item);
    });
    seccionGrados.appendChild(lista);
}

//Función para eliminar un grado
function eliminarGrado(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const select = document.getElementById("gradoSeleccionado");
    const index = select.value; // Obtiene el índice del grado seleccionado

    if (index === "") {
        alert("Por favor, selecciona un grado para eliminar.");
        return;
    }

    // Confirmar la eliminación
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el grado "${grados[index].nombre}"?`);
    if (!confirmacion) return;

    // Eliminar el grado del arreglo
    grados.splice(index, 1);

    console.log("Grados actuales:", grados);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-eliminar-grado").textContent = "✅ Grado eliminado correctamente.";

    // Actualizar la lista de grados en la sección "Ver grados"
    mostrarGrados();

    // Actualizar las opciones del select en la sección "Eliminar grado"
    actualizarListaEliminarGrado();
    actualizarListaModificarGrado();
    actualizarListaAsignarGrado()
}

// Función para actualizar las opciones del select en "Eliminar grado"
function actualizarListaEliminarGrado() {
    const select = document.getElementById("gradoSeleccionado");
    select.innerHTML = ""; // Limpiar las opciones

    if (grados.length === 0) {
        select.innerHTML = "<option value=''>No hay grados disponibles</option>";
        return;
    }

    grados.forEach((grado, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del grado
        option.textContent = `${grado.nombre} - ${grado.descripcion}`;
        select.appendChild(option);
    });
}

// Función para modificar un grado
function modificarGrado(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const select = document.getElementById("gradoSeleccionadoModificar");
    const index = select.value; // Obtiene el índice del grado seleccionado

    if (index === "") {
        alert("Por favor, selecciona un grado para modificar.");
        return;
    }

    // Obtener los nuevos valores del formulario
    const nuevoNombre = document.getElementById("nuevoNombreGrado").value.trim();
    const nuevaDescripcion = document.getElementById("nuevaDescripcionGrado").value.trim();

    // Validar que los campos no estén vacíos
    if (!nuevoNombre || !nuevaDescripcion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Modificar los datos del grado en el arreglo
    grados[index] = {
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion
    };

    console.log("Grado modificado:", grados[index]);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-modificar-grado").textContent = "✅ Grado modificado correctamente.";

    // Actualizar la lista de grados en la sección "Ver grados"
    mostrarGrados();

    // Actualizar las opciones del select en la sección "Modificar grado"
    actualizarListaModificarGrado();

    // Actualizar las opciones del select en la sección "Eliminar grado"
    actualizarListaEliminarGrado();
    actualizarListaAsignarGrado()
}

// Función para actualizar las opciones del select en "Modificar grado"
function actualizarListaModificarGrado() {
    const select = document.getElementById("gradoSeleccionadoModificar");
    select.innerHTML = ""; // Limpiar las opciones

    if (grados.length === 0) {
        select.innerHTML = "<option value=''>No hay grados disponibles</option>";
        return;
    }

    grados.forEach((grado, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del grado
        option.textContent = `${grado.nombre} - ${grado.descripcion}`;
        select.appendChild(option);
    });
}

// Lista para almacenar las asignaturas
const asignaturas = [];

// Función para agregar una asignatura
function agregarAsignatura(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const nombre = document.getElementById("nombreAsignatura").value.trim();
    const curso = document.getElementById("cursoAsignatura").value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !curso) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Agregar la asignatura a la lista
    asignaturas.push({
        nombre,
        curso
    });

    console.log("Asignaturas actuales después de agregar:", asignaturas);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-agregar-asignatura").textContent = `✅ Asignatura "${nombre}" agregada correctamente.`;

    // Limpiar el formulario
    document.getElementById("form-agregar-asignatura").reset();

    // Actualizar la lista de asignaturas en la sección "Ver asignaturas"
    mostrarAsignaturas();
    actualizarListaEliminarAsignatura();
    actualizarListaModificarAsignatura();
    actualizarListaDocentesParaAsignaturas();
    actualizarListaAsignaturas();
    
}

// Función para mostrar la lista de asignaturas
function mostrarAsignaturas() {
    const seccionAsignaturas = document.getElementById("lista-asignaturas");
    if (!seccionAsignaturas) return;

    seccionAsignaturas.innerHTML = ""; // Limpiar la lista antes de actualizarla

    if (asignaturas.length === 0) {
        seccionAsignaturas.innerHTML = "<p>No hay asignaturas registradas.</p>";
        return;

    }

    const lista = document.createElement("ul");
    asignaturas.forEach((asignatura, index) => {
        const item = document.createElement("li");
        item.textContent = `${asignatura.nombre} - ${asignatura.curso}`;
        lista.appendChild(item);
    });
    seccionAsignaturas.appendChild(lista);
}

// Función para eliminar una asignatura
function eliminarAsignatura(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const select = document.getElementById("asignaturaSeleccionada");
    const index = select.value; // Obtiene el índice de la asignatura seleccionada

    if (index === "") {
        alert("Por favor, selecciona una asignatura para eliminar.");
        return;
    }

    // Confirmar la eliminación
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar la asignatura "${asignaturas[index].nombre}" - "${asignaturas[index].curso}?`);
    if (!confirmacion) return;

    // Eliminar la asignatura del arreglo
    asignaturas.splice(index, 1);

    console.log("Asignaturas actuales:", asignaturas);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-eliminar-asignatura").textContent = "✅ Asignatura eliminada correctamente.";

    // Actualizar la lista de asignaturas en la sección "Ver asignaturas"
    mostrarAsignaturas();

    // Actualizar las opciones del select en la sección "Eliminar asignatura"
    actualizarListaEliminarAsignatura();
    actualizarListaModificarAsignatura();
    actualizarListaAsignaturas();
}

// Función para actualizar las opciones del select en "Eliminar asignatura"
function actualizarListaEliminarAsignatura() {
    const select = document.getElementById("asignaturaSeleccionada");
    select.innerHTML = ""; // Limpiar las opciones

    if (asignaturas.length === 0) {
        select.innerHTML = "<option value=''>No hay asignaturas disponibles</option>";
        return;
    }

    asignaturas.forEach((asignatura, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice de la asignatura
        option.textContent = `${asignatura.nombre} - ${asignatura.curso}`;
        select.appendChild(option);
    });
}

// Función para modificar una asignatura
function modificarAsignatura(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const select = document.getElementById("asignaturaSeleccionadaModificar");
    const index = select.value; // Obtiene el índice de la asignatura seleccionada

    if (index === "") {
        alert("Por favor, selecciona una asignatura para modificar.");
        return;
    }

    // Obtener los nuevos valores del formulario
    const nuevoNombre = document.getElementById("nuevoNombreAsignatura").value.trim();
    const nuevoCurso = document.getElementById("nuevoCursoAsignatura").value.trim();

    // Validar que los campos no estén vacíos
    if (!nuevoNombre || !nuevoCurso) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Modificar los datos de la asignatura en el arreglo
    asignaturas[index] = {
        nombre: nuevoNombre,
        curso: nuevoCurso
    };

    console.log("Asignatura modificada:", asignaturas[index]);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-modificar-asignatura").textContent = "✅ Asignatura modificada correctamente.";

    // Actualizar la lista de asignaturas en la sección "Ver asignaturas"
    mostrarAsignaturas();

    // Actualizar las opciones del select en la sección "Modificar asignatura"
    actualizarListaModificarAsignatura();

    // Actualizar las opciones del select en la sección "Eliminar asignatura"
    actualizarListaEliminarAsignatura();
}

// Función para actualizar las opciones del select en "Modificar asignatura"
function actualizarListaModificarAsignatura() {
    const select = document.getElementById("asignaturaSeleccionadaModificar");
    select.innerHTML = ""; // Limpiar las opciones

    if (asignaturas.length === 0) {
        select.innerHTML = "<option value=''>No hay asignaturas disponibles</option>";
        return;
    }

    asignaturas.forEach((asignatura, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice de la asignatura
        option.textContent = `${asignatura.nombre} - ${asignatura.curso}`;
        select.appendChild(option);
    });
}

// Función para actualizar las opciones del select en "Asignar grado"
function actualizarListaAsignarGrado() {
    const select = document.getElementById("gradoSeleccionadoAsignar");
    select.innerHTML = ""; // Limpiar las opciones

    if (grados.length === 0) {
        select.innerHTML = "<option value=''>No hay grados disponibles</option>";
        return;
    }

    grados.forEach((grado, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del grado
        option.textContent = `${grado.nombre} - ${grado.descripcion}`;
        select.appendChild(option);
    });
}

// Función para actualizar las opciones del select en "Asignar grado" (docentes)
function actualizarListaDocentes() {
    const select = document.getElementById("docenteSeleccionado");
    select.innerHTML = ""; // Limpiar las opciones

    // Filtrar usuarios con el rol "Docente"
    const docentes = usuarios.filter(usuario => usuario.rol === "docente");

    if (docentes.length === 0) {
        select.innerHTML = "<option value=''>No hay docentes disponibles</option>";
        return;
    }

    docentes.forEach((docente, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del docente
        option.textContent = `${docente.nombre} ${docente.apellido}`;
        select.appendChild(option);
    });
}

function asignarGrado(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const gradoSelect = document.getElementById("gradoSeleccionadoAsignar");
    const docenteSelect = document.getElementById("docenteSeleccionado");

    const gradoIndex = parseInt(gradoSelect.value, 10); // Índice del grado seleccionado
    const docenteIndex = parseInt(docenteSelect.value, 10); // Índice del docente seleccionado

    if (isNaN(gradoIndex) || isNaN(docenteIndex)) {
        alert("Por favor, selecciona un grado y un docente.");
        return;
    }

    // Obtener el grado y el docente seleccionados
    const grado = grados[gradoIndex];
    const docente = usuarios[docenteIndex];

    // Validar que ambos existan
    if (!grado || !docente) {
        alert("Error al asignar el grado. Intenta nuevamente.");
        return;
    }

    // Asignar el grado al docente (puedes agregar una propiedad `grados` al docente)
    if (!docente.grados) {
        docente.grados = []; // Inicializar la lista de grados si no existe
    }
    docente.grados.push(grado);

    console.log(`Grado "${grado.nombre}" asignado al docente "${docente.nombre} ${docente.apellido}".`);
    console.log("Docente actualizado:", docente);

    // Mostrar un mensaje de éxito
    document.getElementById("mensaje-asignar-grado").textContent = `✅ Grado "${grado.nombre}" asignado a "${docente.nombre} ${docente.apellido}" correctamente.`;

    // Opcional: Limpiar los selects
    gradoSelect.value = "";
    docenteSelect.value = "";
}

// Función para mostrar la lista de docentes
function mostrarDocentes() {
    const seccionDocentes = document.getElementById("lista-docentes");
    if (!seccionDocentes) return;

    seccionDocentes.innerHTML = ""; // Limpiar la lista antes de actualizarla

    // Filtrar usuarios con el rol "Docente"
    const docentes = usuarios.filter(usuario => usuario.rol === "docente");

    if (docentes.length === 0) {
        seccionDocentes.innerHTML = "<p>No hay docentes registrados.</p>";
        return;
    }

    const lista = document.createElement("ul");
    docentes.forEach((docente) => {
        const item = document.createElement("li");
        item.textContent = `${docente.nombre} ${docente.apellido} - ${docente.email}`;
        lista.appendChild(item);
    });
    seccionDocentes.appendChild(lista);
}

// Función para asignar asignaturas a un docente
function asignarAsignaturasADocente(event) {
    event.preventDefault();
    
    const docenteSelect = document.getElementById("docenteSeleccionadoAsignatura");
    const asignaturasSelect = document.getElementById("asignaturasSeleccionadas");
    
    const docenteIndex = parseInt(docenteSelect.value);
    
    if (isNaN(docenteIndex) || asignaturasSelect.value === "") {
        alert("Por favor, selecciona un docente y una asignatura");
        return;
    }
    
    const docente = usuarios[docenteIndex];
    const asignaturaIndex = parseInt(asignaturasSelect.value);
    const asignatura = asignaturas[asignaturaIndex];
    
    if (!docente.asignaturas) {
        docente.asignaturas = [];
    }
    
    if (!docente.asignaturas.some(a => a.nombre === asignatura.nombre)) {
        docente.asignaturas.push(asignatura);
        console.log(`Asignatura "${asignatura.nombre}" asignada al docente "${docente.nombre}"`);
        document.getElementById("mensaje-asignar-asignatura-docente").textContent = 
            `✅ Asignatura "${asignatura.nombre}" asignada correctamente a "${docente.nombre}"`;
    } else {
        alert("Esta asignatura ya está asignada a este docente");
    }
    
    console.log("Docente actualizado:", docente);
}

// Mostrar sección inicial al cargar la página
window.onload = () => mostrarSeccion('inicio');

function actualizarListaDocentesParaAsignaturas() {
    const select = document.getElementById("docenteSeleccionadoAsignatura");
    select.innerHTML = ""; // Limpiar las opciones

    // Filtrar usuarios con el rol "Docente"
    const docentes = usuarios.filter(usuario => usuario.rol === "docente");

    if (docentes.length === 0) {
        select.innerHTML = "<option value=''>No hay docentes disponibles</option>";
        return;
    }

    docentes.forEach((docente, index) => {
        const option = document.createElement("option");
        option.value = index; // El índice del docente
        option.textContent = `${docente.nombre} ${docente.apellido}`;
        select.appendChild(option);
    });

    console.log("Lista de docentes actualizada:", docentes);
}

function actualizarListaAsignaturas() {
    const select = document.getElementById("asignaturasSeleccionadas");
    select.innerHTML = "";
    
    asignaturas.forEach((asignatura, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${asignatura.nombre} - ${asignatura.curso}`;
        select.appendChild(option);
    });
    
    console.log("Lista de asignaturas actualizada");
}
