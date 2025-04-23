document.addEventListener('DOMContentLoaded', () => {
    const pass = document.getElementById('exampleInputPasswordReg');
    const confirm = document.getElementById('exampleInputConfirmPasswordReg');
    const email = document.getElementById('emailLogin');
    const rol = document.getElementById('rol');
    const btn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('confirmPasswordError');
  
    const icons = {
      length: document.getElementById('req-length'),
      upper: document.getElementById('req-uppercase'),
      number: document.getElementById('req-number')
    };
  
    const updateIcon = (icon, valid) => {
      icon.className = `bi me-1 ${valid ? 'bi-check-circle text-success' : 'bi-x-circle text-danger'}`;
    };
  
    const validar = () => {
      const val = pass.value;
      const confirmVal = confirm.value;
      const correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
      const rolOk = rol.value !== "";
  
      const longOk = val.length >= 8;
      const mayusOk = /[A-Z]/.test(val);
      const numOk = /\d/.test(val);
      const match = val && confirmVal && val === confirmVal;
  
      updateIcon(icons.length, longOk);
      updateIcon(icons.upper, mayusOk);
      updateIcon(icons.number, numOk);
  
      errorMsg.style.display = (val && confirmVal && !match) ? 'block' : 'none';
  
      btn.disabled = !(longOk && mayusOk && numOk && match && correoOk && rolOk);
    };
  
    // Mostrar u ocultar contraseña
    const togglePassword = (inputId, iconId) => {
      const input = document.getElementById(inputId);
      const icon = document.getElementById(iconId);
      input.type = input.type === 'password' ? 'text' : 'password';
      icon.classList.toggle('bi-eye');
      icon.classList.toggle('bi-eye-slash');
    };
  
    document.getElementById('togglePasswordReg').addEventListener('click', () => {
      togglePassword('exampleInputPasswordReg', 'eye-icon-reg');
    });
  
    document.getElementById('toggleConfirmPasswordReg').addEventListener('click', () => {
      togglePassword('exampleInputConfirmPasswordReg', 'eye-icon-confirm-reg');
    });
  
    // Validación en tiempo real
    [pass, confirm, email, rol].forEach(input => input.addEventListener('input', validar));
  
    // Si quieres validar al enviar, puedes añadir este listener:
    btn.addEventListener('click', () => {
      alert('Formulario válido. Enlace enviado.'); // Aquí llamas a EnviarEnlaceRecuperacion si quieres
    });
  });
  