
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
        'extras': extras,
        'precio': 3.5
    };

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push(pedido);
    // Almacenar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Puedes redirigir a otra página o realizar otras acciones aquí
    alert('Su pedido se ha añadido con éxito');
    window.location.href = 'index.html';
}



function guardarDatos(dato){
    const dato_guardar = document.querySelector(`input[name="${dato}"]:checked`).value;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (dato_guardar == 'Combo 1'){
        pedido = {
            'nombre': dato_guardar, 
            'topping': 'Oreo',
            'yogur': 'Natural con frutas',
            'salsa': 'Fresa', 
            'precio': 2.5
        };
    } else if (dato_guardar == 'Combo 2'){
        pedido = {
            'nombre': dato_guardar, 
            'topping': 'Chocolate blanco',
            'yogur': 'Vainilla con alemendras',
            'salsa': 'Caramelo', 
            'precio': 2.5};
    } else if (dato_guardar == 'Combo 3'){
        pedido = {
            'nombre': dato_guardar, 
            'topping': 'Frutas mixtas',
            'yogur': 'Mango con coco',
            'salsa': 'Kiwi', 
            'precio': 2.5};
    } else {
        pedido = {
            'nombre': dato_guardar, 
            'tipo': dato, 
            'precio': 1.5};
            
    };
    
    carrito.push(pedido);
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    alert('Su pedido se ha añadido con éxito');
    window.location.href = 'index.html';
    
    //window.location.replace('/index.html');
}

function vaciarCarro(){
    localStorage.removeItem('carrito');
    alert('Su pedido se ha realizado con éxito');
    window.localtion.href = 'index.html';
}

function cargarPedidos(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    let tabla = document.getElementById('pedidosContainer'); //lugar de los pedidos

    //Limpiamos lista para evitar duplicados
    tabla.innerHTML = '';

    carrito.forEach(function (pedido, index) {
        let elemento = document.createElement('tr');

        let contenidoElemento = '';
        if (pedido.nombre == 'yogur helado'){
            contenidoElemento = `
            <td>${pedido.nombre}</td>
            <td>${pedido.base}</td>
            <td>${pedido.toppings}</td>
            <td>${pedido.salsas}</td>
            <td>${pedido.extras}</td>
            <td>${pedido.precio}</td>
            `;
        } else if (pedido.nombre == 'Combo 1' || pedido.nombre == 'Combo 2' || pedido.nombre == 'Combo 3') {
            contenidoElemento = `
            <td>${pedido.nombre}</td>
            <td>${pedido.topping}</td>
            <td>${pedido.yogur}</td>
            <td>${pedido.salsa}</td>
            <td>${pedido.precio}</td>
            `;
        } else{
            contenidoElemento = `
            <td>${pedido.nombre}</td>
            <td>${pedido.tipo}</td>
            <td>${pedido.precio}</td>
            `;
        }

    });
}