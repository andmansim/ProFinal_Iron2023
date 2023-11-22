function registrarUsuario() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Obtener datos del localStorage
    const nombre_verificar = localStorage.getItem('nombre');

    // Verificando usuario
    if (nombre_verificar) {
        alert(`El nombre de usuario ${nombre} ya existe, por favor elija otro`);
    } else {
        // Almacenar datos
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('contrasenia', contrasenia);
        localStorage.setItem('direccion', direccion);
        localStorage.setItem('email', email);
        localStorage.setItem('telefono', telefono);
        alert('Se ha registrado con éxito');
        window.location.href = 'index.html';
    }
}

