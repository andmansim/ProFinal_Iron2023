function login() {
    const nombre = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    // Obtener datos del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (nombre === usuario.nombre && contrasenia === usuario.contrasenia) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('usuarioAutenticado', 'true');
        cambioIndex();
        window.location.href = 'index.html';
        // Redirige o realiza otras acciones necesarias después del inicio de sesión
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}

function cerrarSesion(){
    localStorage.setItem('usuarioAutenticado', 'false');
    cambioIndex();
    alert('Se ha cerrado sesión con éxito')
    window.location.href = 'index.html';
}

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

        localStorage.setItem('usuario', JSON.stringify(usuario));
        
        alert('Se ha registrado con éxito');
        window.location.href = 'index.html';
    }
}

function cambioIndex() {
    // Verificar si el usuario está autenticado
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado') === 'true';
    // Mostrar u ocultar elementos según el estado del usuario
    if (usuarioAutenticado) {
        document.getElementById('bienvenidoMensaje').style.display = 'block';
        document.getElementById('cerrar-sesion').style.display = 'block';
        // Ocultar los enlaces de Login y Registrarse
        document.getElementById('inicio-sesion').style.display = 'none';
        document.getElementById('registro-usuario').style.display = 'none';
    } else {
        document.getElementById('bienvenidoMensaje').style.display = 'none';
        document.getElementById('cerrar-sesion').style.display = 'none';
        // Mostrar los enlaces de Login y Registrarse
        document.getElementById('inicio-sesion').style.display = 'block';
        document.getElementById('registro-usuario').style.display = 'block';

    }
}





