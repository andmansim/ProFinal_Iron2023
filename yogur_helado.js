
function obtenerSeleccionados(nombre) {
    //obtener todos los checkbox seleccionados
    let ingredientes = [];
    const checkboxes = document.querySelectorAll(`input[name^="${nombre}"]:checked`);
    checkboxes.forEach(function (checkbox) {
        ingredientes.push(checkbox.value);
    });
    return ingredientes;
}

function guardarDatos_yogurhelado() {
    try{
        // Obtener valores seleccionados
        alert('Puta madre');
        let base = document.querySelector('input[name="base"]:checked').value;
        let toppings = obtenerSeleccionados('topping_');
        let salsas = obtenerSeleccionados('salsa_');
        let extras = obtenerSeleccionados('extra_');
        alert('Puta madre');
        let pedido = {
            'nombre': 'yogur helado',
            'topping': toppings,
            'base': base,
            'salsas': salsas, 
            'extras': extras
        };
    
        let carrito = JSON.parse(localStorage.getItem('pedido')) || [];

        carrito.push(pedido);
        // Almacenar en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Puedes redirigir a otra página o realizar otras acciones aquí
        alert('Su pedido se ha añadido con éxito');
        window.location.href = 'index.html';
    } catch (e) {
        alert('Error: ' + e.message);
    }
}



function guardarDatos(dato){
    const dato_guardar = document.querySelector(`input[name="${dato}"]:checked`).value;
    if (dato_guardar == 'Combo 1'){
        let pedido = {
            'nombre': dato_guardar, 
            'topping': 'Oreo',
            'yogur': 'Natural con frutas',
            'salsa': 'Fresa'};
    } else if (dato_guardar == 'Combo 2'){
        let pedido = {
            'nombre': dato_guardar, 
            'topping': 'Chocolate blanco',
            'yogur': 'Vainilla con alemendras',
            'salsa': 'Caramelo'};
    } else if (dato_guardar == 'Combo 3'){
        let pedido = {
            'nombre': dato_guardar, 
            'topping': 'Frutas mixtas',
            'yogur': 'Mango con coco',
            'salsa': 'Kiwi'};
    } else {
        let pedido = {
            'nombre': dato_guardar, 
            'tipo': dato};
    };

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(pedido);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    alert('Su pedido se ha añadido con éxito');
    window.location.href = 'index.html';
}
