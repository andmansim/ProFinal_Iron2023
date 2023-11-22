function registrarUsuario() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Obtener datos del localStorage
    const pedido_local = localStorage.getItem('pedido');
    const pedido = JSON.parse(pedido_local);
    
    // Verificando usuario
    if (pedido.nombre) {
        alert(`El nombre de usuario ${nombre} ya existe, por favor elija otro`);
        window.location.href = 'registrar.html';
    } else {
        // Almacenar datos
        const usuario = {
            'nombre': nombre,
            'contrasenia': contrasenia,
            'direccion': direccion,
            'email': email,
            'telefono': telefono
        }
        const usuario_json = JSON.stringify(usuario);
        localStorage.setItem('pedido', usuario_json);
        
        alert('Se ha registrado con éxito');
        window.location.href = 'index.html';
    }
}

