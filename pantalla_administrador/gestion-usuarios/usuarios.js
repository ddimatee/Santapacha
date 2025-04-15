// Lista para almacenar los usuarios creados
const usuarios = [];

// Función para crear un usuario
function crearUsuario(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const identificacion = document.getElementById('identificacion').value;
    const tipoIdentificacion = document.getElementById('tipo-identificacion').value;
    const rol = document.getElementById('rol').value;

    // Verifica que los campos no estén vacíos
    if (nombre && identificacion && tipoIdentificacion && rol) {
        // Agrega el usuario a la lista
        usuarios.push(`${nombre} - ${tipoIdentificacion} ${identificacion} - ${rol}`);

        // Limpia el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('identificacion').value = '';
        document.getElementById('tipo-identificacion').value = '';
        document.getElementById('rol').value = '';

        // Actualiza la lista de usuarios en "Modificar Usuario"
        actualizarListaUsuarios();

        alert('Usuario creado exitosamente.');
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Función para actualizar la lista de usuarios en "Modificar Usuario"
function actualizarListaUsuarios() {
    const listaUsuarios = document.getElementById('lista-usuarios');
    const ul = listaUsuarios.querySelector('ul');
    ul.innerHTML = ''; // Limpia la lista actual

    // Agrega los usuarios a la lista
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<a href="#" class="text-decoration-none" onclick="seleccionarUsuario('${usuario}')">${usuario}</a>`;
        ul.appendChild(li);
    });
}

// Función para seleccionar un usuario y mostrar el formulario de modificación
function seleccionarUsuario(usuario) {
    // Oculta la lista de usuarios
    const listaUsuarios = document.getElementById('lista-usuarios');
    if (listaUsuarios) {
        listaUsuarios.style.display = 'none';
    }

    // Muestra el formulario de modificación
    const formularioModificar = document.getElementById('formulario-modificar');
    if (formularioModificar) {
        formularioModificar.style.display = 'block';
    }

    // Actualiza el breadcrumb para incluir el usuario seleccionado
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent += ` → ${usuario}`;
    }
}

// Función para mostrar una sección específica
function mostrarSeccion(id, breadcrumbText) {
    // Oculta todas las secciones
    document.querySelectorAll('.content').forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra la sección seleccionada
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.style.display = 'block';
    }

    // Actualiza el breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb && breadcrumbText) {
        breadcrumb.textContent = breadcrumbText;
    }
}

// Función para actualizar la lista de usuarios en "Ver Usuarios"
function actualizarListaVerUsuarios() {
    const listaVerUsuarios = document.getElementById('ver-usuarios-lista');
    listaVerUsuarios.innerHTML = ''; // Limpia la lista actual

    // Agrega los usuarios a la lista
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = usuario; // Muestra solo el texto del usuario
        listaVerUsuarios.appendChild(li);
    });
}

// Modifica la función crearUsuario para actualizar también la lista de "Ver Usuarios"
function crearUsuario(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const identificacion = document.getElementById('identificacion').value;
    const tipoIdentificacion = document.getElementById('tipo-identificacion').value;
    const rol = document.getElementById('rol').value;

    // Verifica que los campos no estén vacíos
    if (nombre && identificacion && tipoIdentificacion && rol) {
        // Agrega el usuario a la lista
        usuarios.push(`${nombre} - ${tipoIdentificacion} ${identificacion} - ${rol}`);

        // Limpia el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('identificacion').value = '';
        document.getElementById('tipo-identificacion').value = '';
        document.getElementById('rol').value = '';

        // Actualiza las listas de usuarios
        actualizarListaUsuarios(); // Para "Modificar Usuario"
        actualizarListaVerUsuarios(); // Para "Ver Usuarios"

        alert('Usuario creado exitosamente.');
    } else {
        alert('Por favor, completa todos los campos.');
    }
}