function registrarUsuario() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Intenta coger el usuario, si no está lo crea
    let usuario = JSON.parse(localStorage.getItem('usuario')) || {};
    

    // Verificando usuario
    if (usuario.nombre) {
        alert(`El nombre de usuario ${nombre} ya existe, por favor elija otro`);
        window.location.href = 'registrar.html';
    } else {
        // Almacenar datos
        usuario.nombre = nombre;
        usuario.contrasenia = contrasenia;
        usuario.direccion = direccion;
        usuario.email = email;
        usuario.telefono = telefono;

        const usuario_json = JSON.stringify(usuario);
        localStorage.setItem('usuario', usuario_json);
        
        alert('Se ha registrado con éxito');
        window.location.href = 'index.html';
    }
}

