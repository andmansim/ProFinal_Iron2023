// Variables para almacenar el carrito y el total
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    const totalElement = document.getElementById('total');

    // Limpiar contenido previo
    carritoElement.innerHTML = '';

    // Agregar productos al carrito
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        carritoElement.appendChild(li);
    });

    // Actualizar total
    totalElement.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}