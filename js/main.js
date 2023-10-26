// productos
const productos = [
//vial
{
    id: "vial-01",
    titulo: "vial-01",
    imagen: "/Imagenes/vial/CUBIERTA-VIAL-1.png",
    categoria: {
        nombre: "viales",
        id: "vial"
    },
    precio: 1000
},

{
    id: "vial",
    titulo: "vial-02",
    imagen: "/Imagenes/vial/CUBIERTA-VIAL-2.png",
    categoria: {
        nombre: "vial",
        id: "vial"
    },
    precio: 1000
},

{
    id: "vial-03",
    titulo: "vial-03",
    imagen: "/Imagenes/vial/CUBIERTA-VIAL-3.png",
    categoria: {
        nombre: "vial",
        id: "vial"
    },
    precio: 1000
},

{
    id: "vial-01",
    titulo: "vial-01",
    imagen: "/Imagenes/vial/CUBIERTA-VIAL-4.png",
    categoria: {
        nombre: "vial",
        id: "vial"
    },
    precio: 1000
},

//agro
{
    id: "Agro-01",
    titulo: "agro-01",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-1.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-02",
    titulo: "agro-02",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-2.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-03",
    titulo: "agro-03",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-3.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-04",
    titulo: "agro-04",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-4.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-05",
    titulo: "agro-05",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-5.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-06",
    titulo: "agro-06",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-6.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-07",
    titulo: "agro-07",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-7.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-08",
    titulo: "agro-08",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-8.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-09",
    titulo: "agro-09",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-9.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-10",
    titulo: "agro-10",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-10.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-11",
    titulo: "agro-11",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-11.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},

{
    id: "Agro-12",
    titulo: "agro-12",
    imagen: "Imagenes/Agro/CUBIERTA-AGRO-12.png",
    categoria: {
        nombre: "agro",
        id: "agro"
    },
    precio: 1000
},
// Industrial
{
    id: "industrial-1",
    titulo: "industrial-1",
    imagen: "Imagenes/Industrial/CUBIERTA-INDUSTRIAL-1.png",
    categoria: {
        nombre: "industrial",
        id: "industrial"
    },
    precio: 1000
},

{
    id: "industrial-2",
    titulo: "industrial-2",
    imagen: "Imagenes/Industrial/CUBIERTA-INDUSTRIAL-2.png",
    categoria: {
        nombre: "industrial",
        id: "industrial"
    },
    precio: 1000
},

{
    id: "industrial-3",
    titulo: "industrial-3",
    imagen: "Imagenes/Industrial/CUBIERTA-INDUSTRIAL-3.png",
    categoria: {
        nombre: "industrial",
        id: "industrial"
    },
    precio: 1000
},

{
    id: "industrial-4",
    titulo: "industrial-4",
    imagen: "Imagenes/Industrial/CUBIERTA-INDUSTRIAL-4.png",
    categoria: {
        nombre: "industrial",
        id: "industrial"
    },
    precio: 1000
},
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-cat");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numero");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""; 

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
               <p class="producto-precio">${producto.precio}</p>
               <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
        `;

        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton); 
        }  else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const ProductoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        ProductoAgregado.cantidad = 1;
        productosEnCarrito.push(ProductoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem ("Productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumerito;
}
