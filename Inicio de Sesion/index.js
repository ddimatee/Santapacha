document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la manera predeterminada

    let rol = document.getElementById('rol').value;
    let email = document.getElementById('emailLogin').value;
    let password = document.getElementById('passwordLogin').value;

    if (rol === '') {
        alert('Por favor, selecciona un rol.');
        return;
    }

    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }

    if (password === '') {
        alert('Por favor, ingresa tu contraseña.');
        return;
    }

    // Si todos los campos están llenos, redirigir según el rol seleccionado
    if (rol === '1') {
        window.location.href = "../pantalla_administrador/indexv2.html";
    } else if (rol === '2') {
        window.location.href = "../pantalla_docente/menu/indexv2.html";
    } else if (rol === '3') {
        window.location.href = "../pantalla_estudiate/index.html";
    } else if (rol === '4') {
        window.location.href = "../pantalla_padre/index.html";
    }
});