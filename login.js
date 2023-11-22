function login() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    // Obtener datos del localStorage
    const pedido_local = localStorage.getItem('pedido');
    const pedido = JSON.parse(pedido_local);
    if (nombre === pedido.nombre && contrasenia === pedido.contrasenia) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html';
        // Redirige o realiza otras acciones necesarias después del inicio de sesión
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}