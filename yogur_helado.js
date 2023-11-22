function pedidos(){

}

function guardarDatos() {

    // Obtener valores seleccionados
    const base = document.querySelector('input[name="base"]:checked').value;
    const toppings = document.obtenerSeleccionados('topping');
    const salsas = document.obtenerSeleccionados('salsa');
    const extras = document.obtenerSeleccionados('extra');

    // Almacenar en localStorage
    localStorage.setItem('base', base);
    localStorage.setItem('toppings', JSON.stringify(toppings)); // JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON, porque el local storage solo almacena strings
    localStorage.setItem('salsas', JSON.stringify(salsas));
    localStorage.setItem('extras', JSON.stringify(extras));

    // Puedes redirigir a otra página o realizar otras acciones aquí
    alert('Datos guardados en localStorage. Redirigiendo...');
    window.location.href = 'index.html';
}

function obtenerSeleccionados(nombre) {
    //obtener todos los checkbox seleccionados
    const checkboxes = document.querySelectorAll(`input[name="${nombre}"]:checked`);
    return Array.from(checkboxes, checkbox => checkbox.value);
}