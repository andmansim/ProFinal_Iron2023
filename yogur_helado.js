function guardarDatos_yogurhelado() {

    // Obtener valores seleccionados
    const base = document.querySelector('input[name="base"]:checked').value;
    const toppings = document.obtenerSeleccionados('topping');
    const salsas = document.obtenerSeleccionados('salsa');
    const extras = document.obtenerSeleccionados('extra');

    pedido = {
        'nombre': 'yogur helado',
        'base': base,
        'salsas': salsas, 
        'extras': extras
    }

    let carrito = JSON.parse(localStorage.getItem('pedido')) || [];


    // Almacenar en localStorage
    localStorage.setItem('pedido', pedido);

    // Puedes redirigir a otra página o realizar otras acciones aquí
    alert('Su pedido se ha añadido con éxito');
    window.location.href = 'index.html';
}

function obtenerSeleccionados(nombre) {
    //obtener todos los checkbox seleccionados
    const checkboxes = document.querySelectorAll(`input[name="${nombre}"]:checked`);
    return Array.from(checkboxes, checkbox => checkbox.value);
}

function guardarDatos(dato){
    const dato_guardar = document.querySelector(`input[name="${dato}"]:checked`).value;

    const pedido_local = localStorage.getItem('pedido');
    const pedido = JSON.parse(pedido_local);

    pedido.dato = dato_guardar
    localStorage.setItem('pedido', pedido );
    
    alert('Su pedido se ha añadido con éxito');
    window.location.href = 'index.html';
}
