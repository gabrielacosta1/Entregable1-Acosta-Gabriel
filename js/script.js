function mostrarProductos(productos) {
  let listaDeProductos = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    listaDeProductos += `- ${productos[i]}\n`;
  }
  return listaDeProductos;
}

function verCarrito(carrito) {
  if (carrito.length === 0) {
    return "El carrito está vacío.";
  } else {
    let contenidoCarrito = "Contenido de tu carrito:\n";
    for (let i = 0; i < carrito.length; i++) {
      contenidoCarrito += `- ${carrito[i]}\n`;
    }
    return contenidoCarrito;
  }
}

function agregarAlCarrito(productos, carrito) {
  let productoParaAgregar = prompt(
    mostrarProductos(productos) +
    "\nEscribe el nombre del producto que quieres agregar:"
  );

  if (!productoParaAgregar) {
    return;
  }

  let productoEncontrado = false;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].toLowerCase() === productoParaAgregar.toLowerCase()) {
      carrito.push(productos[i]);
      productoEncontrado = true;
      alert(`"${productos[i]}" se agregó a tu carrito.`);
      break;
    }
  }

  if (!productoEncontrado) {
    alert(`El producto "${productoParaAgregar}" no está en nuestra lista.`);
  }
}


let nombreUsuario = "";
while (!nombreUsuario) {
  nombreUsuario = prompt("Por favor, ingresa tu nombre para comenzar:");
  if (!nombreUsuario) {
    alert("El nombre es un campo obligatorio.");
  }
}

alert(`Bienvenido, ${nombreUsuario}.`);

const productosDisponibles = ["Leche", "Pan", "Manzanas", "Huevos", "Queso"];
let carrito = [];
let salir = false;

do {
  let opcion = prompt(
    "Selecciona una opción:\n" +
    "1. Ver productos\n" +
    "2. Agregar producto al carrito\n" +
    "3. Ver carrito\n" +
    "4. Salir"
  );

  switch (opcion) {
    case "1":
      alert(mostrarProductos(productosDisponibles));
      break;

    case "2":
      agregarAlCarrito(productosDisponibles, carrito);
      break;

    case "3":
      alert(verCarrito(carrito));
      break;

    case "4":
      salir = true;
      alert(`Gracias por tu visita, ${nombreUsuario}.`);
      break;

    default:
      alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
      break;
  }
} while (!salir);