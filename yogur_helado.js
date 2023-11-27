//Obtener valores seleccionados de los checkbox
function obtenerSeleccionados(nombre) {
    let ingredientes = [];
    const checkboxes = document.querySelectorAll(`input[name^="${nombre}"]:checked`);
    checkboxes.forEach(function (checkbox) {
        ingredientes.push(checkbox.value);
    });
    return ingredientes;
}

function guardarDatos_yogurhelado() {
    
    // Obtener valores seleccionados
    let base = document.querySelector('input[name="base"]:checked').value;
    let toppings = obtenerSeleccionados('topping_');
    let salsas = obtenerSeleccionados('salsa_');
    let extras = obtenerSeleccionados('extra_');

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
    window.location.href = 'index2.html';
    return false;
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
    window.location.href = 'index2.html';
    
    return false;
}


function vaciarCarro(){
    localStorage.removeItem('carrito');
    alert('Su pedido se ha realizado con éxito');
    window.location.href = 'index2.html';
}

function cargarPedidos(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    let tabla = document.getElementById('pedidosContainer'); //lugar de los pedidos

    //Limpiamos lista para evitar duplicados
    tabla.innerHTML = '';

    carrito.forEach(function (pedido, index) {
        let elementoli = document.createElement('li');

        let contenidoElemento = '';
        if (pedido.nombre == 'yogur helado'){
            contenidoElemento = `
            Nombre del pedido: ${pedido.nombre} <br>
            Base: ${pedido.base} <br>
            Topping: ${pedido.toppings}<br>
            Salsas: ${pedido.salsas}<br>
            Estrax: ${pedido.extras}<br>
            Precio: ${pedido.precio}<br>
            `;
        } else if (pedido.nombre == 'Combo 1' || pedido.nombre == 'Combo 2' || pedido.nombre == 'Combo 3') {
            contenidoElemento = `
            Nombre pedido: ${pedido.nombre}<br>
            Toppings: ${pedido.topping}<br>
            Base yogur: ${pedido.yogur}<br>
            Salsa: ${pedido.salsa}<br>
            Precio: ${pedido.precio}<br>
            `;
        } else{
            contenidoElemento = `
            Nombre pedido: ${pedido.nombre}<br>
            Tipo: ${pedido.tipo}<br>
            Precio: ${pedido.precio}<br>
            `;
        }
        elementoli.innerHTML = contenidoElemento;
        //agregamos el elemento a la lista
        tabla.appendChild(elementoli);

        let botonEliminar = document.createElement('button');
        botonEliminar.className = 'eliminar-botones';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function () {
            eliminarPedido(index);
        });

        //Agregamos el boton eliminar
        elementoli.appendChild(botonEliminar);

        //Agregar el elemento <li> a la lista
        tabla.appendChild(elementoli);
    });
    //Actualizar el total
    actualizarTotal();
}

function actualizarTotal(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    carrito.forEach(function (pedido) {
        total += pedido.precio;
    });
    document.getElementById('total').textContent = `Precio total: ${total}€`;
}

function eliminarPedido(index){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarPedidos();
}