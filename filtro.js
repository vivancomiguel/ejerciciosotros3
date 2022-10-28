/* La funcion debe filtrar los resultados de un listado de zapatos */

// Tenemos un listado de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Se asignan nombres mas descriptivos y cambian var por const
const $lista = document.getElementById("lista-de-productos"); // Se cambia TagName por Id
const $input = document.querySelector(".input");
const $botonDeFiltro = document.getElementsByTagName("button")[0]; // Se mueve junto a los demas elementos del DOM y se cambia su estructura

// Se incluye esta linea a peticion de la funcion debajo de esta
const displayProductos = function (productos) {
  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    $lista.appendChild(d);
  }
}
// Muestra los productos al inicio
displayProductos(productos);

// Evento al presionar el boton
$botonDeFiltro.addEventListener("click", function() {
  while ($lista.firstChild) {
    $lista.removeChild($lista.firstChild);
  }

  const texto = $input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  const newDiv = document.createElement("div"); // Se saca del ciclo for
  for (let i = 0; i < productosFiltrados.length; i++) {
    newDiv.classList.add("producto");
  
    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    newDiv.appendChild(ti);
    newDiv.appendChild(imagen);
  
    $lista.appendChild(newDiv);
  }
});

// Funcion de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  