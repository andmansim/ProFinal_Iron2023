function guardarDatos_yogurhelado() {

    // Obtener valores seleccionados
    const base = document.querySelector('input[name="base"]:checked').value;
    const toppings = document.obtenerSeleccionados('topping');
    const salsas = document.obtenerSeleccionados('salsa');
    const extras = document.obtenerSeleccionados('extra');
    alert('Puta madre')
    pedido = {
        'nombre': 'yogur helado',
        'topping': toppings,
        'base': base,
        'salsas': salsas, 
        'extras': extras
    }

    let carrito = JSON.parse(localStorage.getItem('pedido')) || [];

    carrito.push(pedido);
    // Almacenar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

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
    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[0].dato = dato_guardar;
    localStorage.setItem('carrito', carrito );
    
    alert('Su pedido se ha añadido con éxito');
    window.location.href = 'index.html';
}
