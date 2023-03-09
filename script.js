// selecciona todos los botones de compra
const botonesCompra = document.querySelectorAll('.boton-compra');

// añade un evento de click a cada botón de compra
botonesCompra.forEach(boton => {
  boton.addEventListener('click', () => {
    // obtiene el nombre de la cerveza y su precio
    const nombre = boton.parentElement.querySelector('h3').innerText;
    const precio = 5.99; // este valor puede ser obtenido de una base de datos o de otro sitio

    // crea un objeto con la información del producto
    const producto = {
      nombre: nombre,
      precio: precio
    };

    // agrega el producto al carrito de compras
    agregarAlCarrito(producto);
  });
});

// función para agregar un producto al carrito de compras
function agregarAlCarrito(producto) {
  // código para agregar el producto al carrito de compras
}