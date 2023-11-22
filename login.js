function login() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;

    if (nombre === 'usuario' && contrasenia === 'contrasena') {
        alert('Inicio de sesión exitoso');
        // Redirige o realiza otras acciones necesarias después del inicio de sesión
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
