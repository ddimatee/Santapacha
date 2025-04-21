function restablecercontraseña() {
    // Ocultar el formulario de inicio de sesión
    document.getElementById("loginForm").style.display = "none";
     // Ocultar el botón de "¿Olvidaste tu contraseña?"
     document.getElementById("recuperarcontraseña").style.display = "none";
    // Mostrar el contenedor de recuperación de contraseña
    document.getElementById("contenedorrecuperarcontraseña").style.display = "block";
    
}
