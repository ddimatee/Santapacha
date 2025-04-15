// Lista para almacenar los usuarios creados
const usuarios = [];

// Función para mostrar sección
function mostrarSeccion(id, breadcrumbText) {
    // Oculta todas las secciones
    document.querySelectorAll('.content').forEach(function(seccion) {
        seccion.style.display = 'none';
    });
    
    // Muestra la sección seleccionada
    document.getElementById(id).style.display = 'block';

    // Actualiza el breadcrumb
    if (breadcrumbText) {
        document.querySelector('.breadcrumb').textContent = breadcrumbText;
    }
}

// Función para crear un usuario
function crearUsuario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const identificacion = document.getElementById('identificacion').value;
    const tipoIdentificacion = document.getElementById('tipo-identificacion').value;
    const rol = document.getElementById('rol').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    if (nombre && identificacion && tipoIdentificacion && rol && correo && contrasena) {
        const usuario = {
            nombre,
            identificacion,
            tipoIdentificacion,
            rol,
            correo,
            contrasena
        };

        usuarios.push(usuario);
        
        // Limpiar formulario
        document.getElementById('nombre').value = '';
        document.getElementById('identificacion').value = '';
        document.getElementById('tipo-identificacion').value = '';
        document.getElementById('rol').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('contrasena').value = '';

        actualizarListaUsuarios();
        actualizarVerUsuarios();
        actualizarListaBorrarUsuarios();
        
        alert('Usuario creado exitosamente');
    } else {
        alert('Por favor complete todos los campos');
    }
}

// Función para actualizar la lista de usuarios en la sección modificar
function actualizarListaUsuarios() {
    const listaUsuarios = document.getElementById('lista-usuarios');
    const ul = listaUsuarios.querySelector('ul');
    ul.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <a href="#" class="text-decoration-none" onclick="seleccionarUsuario(${index})">
                ${usuario.nombre} - ${usuario.tipoIdentificacion} ${usuario.identificacion} - ${usuario.rol}
            </a>
        `;
        ul.appendChild(li);
    });
}

// Función para actualizar la lista de usuarios en la sección ver usuarios
function actualizarVerUsuarios() {
    const listaVerUsuarios = document.getElementById('ver-usuarios-lista');
    listaVerUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${usuario.nombre} - ${usuario.tipoIdentificacion} ${usuario.identificacion} - ${usuario.rol}`;
        listaVerUsuarios.appendChild(li);
    });
}

// Variable para almacenar el índice del usuario seleccionado
let usuarioSeleccionadoIndex = -1;

// Función para seleccionar un usuario para modificar
function seleccionarUsuario(index) {
    usuarioSeleccionadoIndex = index;
    const usuario = usuarios[index];

    // Rellenar el formulario de modificación
    document.getElementById('nombre-modificar').value = usuario.nombre;
    document.getElementById('identificacion-modificar').value = usuario.identificacion;
    document.getElementById('tipo-identificacion-modificar').value = usuario.tipoIdentificacion;
    document.getElementById('rol-modificar').value = usuario.rol;
    document.getElementById('correo-modificar').value = usuario.correo;
    document.getElementById('contrasena-modificar').value = usuario.contrasena;

    // Ocultar lista y mostrar formulario
    document.getElementById('lista-usuarios').style.display = 'none';
    document.getElementById('formulario-modificar').style.display = 'block';
}

// Función para guardar las modificaciones
function guardarModificaciones(event) {
    event.preventDefault();

    if (usuarioSeleccionadoIndex === -1) {
        alert('No se ha seleccionado ningún usuario para modificar');
        return;
    }

    const usuario = {
        nombre: document.getElementById('nombre-modificar').value,
        identificacion: document.getElementById('identificacion-modificar').value,
        tipoIdentificacion: document.getElementById('tipo-identificacion-modificar').value,
        rol: document.getElementById('rol-modificar').value,
        correo: document.getElementById('correo-modificar').value,
        contrasena: document.getElementById('contrasena-modificar').value
    };

    if (usuario.nombre && usuario.identificacion && usuario.tipoIdentificacion && 
        usuario.rol && usuario.correo && usuario.contrasena) {
        
        // Actualizar usuario en el array
        usuarios[usuarioSeleccionadoIndex] = usuario;

        // Actualizar listas
        actualizarListaUsuarios();
        actualizarVerUsuarios();
        actualizarListaBorrarUsuarios();

        // Resetear formulario y mostrar lista
        document.getElementById('formulario-modificar').style.display = 'none';
        document.getElementById('lista-usuarios').style.display = 'block';
        
        alert('Usuario modificado exitosamente');
    } else {
        alert('Por favor complete todos los campos');
    }
}

// ...existing code...

// Función para actualizar la lista de usuarios en la sección borrar
function actualizarListaBorrarUsuarios() {
    const listaBorrarUsuarios = document.getElementById('borrar-usuarios-lista');
    listaBorrarUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${usuario.nombre} - ${usuario.tipoIdentificacion} ${usuario.identificacion} - ${usuario.rol}</span>
            <button class="btn btn-danger btn-sm" onclick="borrarUsuario(${index})">Borrar</button>
        `;
        listaBorrarUsuarios.appendChild(li);
    });
}

// Función para borrar usuario
function borrarUsuario(index) {
    const usuario = usuarios[index];
    const usuarioInfo = `${usuario.nombre} - ${usuario.tipoIdentificacion} ${usuario.identificacion} - ${usuario.rol}`;
    
    // Actualizar todas las listas antes de mostrar el diálogo de confirmación
    actualizarListaUsuarios();
    actualizarVerUsuarios();
    actualizarListaBorrarUsuarios();
    
    // Confirmar antes de borrar
    if (confirm(`¿Está seguro que desea borrar al usuario ${usuarioInfo}?`)) {
        // Eliminar usuario del array
        usuarios.splice(index, 1);
        
        // Actualizar todas las listas después de borrar
        actualizarListaUsuarios();
        actualizarVerUsuarios();
        actualizarListaBorrarUsuarios();
        
        alert('Usuario eliminado exitosamente');
    }
}

// Función para volver al menú principal
function volverAlMenu() {
    if (confirm('¿Está seguro que desea volver al menú principal?')) {
        window.location.href = '../indexv2.html'; // Ajusta esta ruta según tu estructura de archivos
    }
}