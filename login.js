function login() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    // Obtener datos del localStorage
    const nombre_verificar = localStorage.getItem('nombre');
    const contrasenia_verificar = localStorage.getItem('contrasena');
    if (nombre === nombre_verificar && contrasenia === contrasenia_verificar) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html';
        // Redirige o realiza otras acciones necesarias después del inicio de sesión
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
        window.location.href = 'login.html';
    }
}