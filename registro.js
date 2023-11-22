function registrarUsuario() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;


    // Realiza la lógica de registro (esto es solo un ejemplo)
    if (nombre && contrasenia) {
        // Puedes almacenar los datos en el servidor o en algún lugar seguro
        // Aquí, simplemente mostraremos una alerta indicando que el usuario se registró
        alert(`Usuario ${nombre} registrado con éxito`);
    } else {
        alert('Por favor, completa todos los campos');
    }
}