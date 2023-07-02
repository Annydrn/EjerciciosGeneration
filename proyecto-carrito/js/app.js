const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

// FUNCIONES
cargarEventListeners();

function cargarEventListeners() {
  // AGREGAR CURSO AL DAR CLICK EN EL BOTON AGREGAR
  listaCursos.addEventListener("click", agregarCurso);
  // ELIMINAR CURSO DEL CARRITO
  carrito.addEventListener("click", eliminarCurso);

  // VACIAR EL CARRITO
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito); 

} 

function agregarCurso(event) {
  event.preventDefault();
  if (event.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = event.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function eliminarCurso(event) {
  if (event.target.classList.contains("borrar-curso")) {
    const cursoId = event.target.getAttribute("data-id");
    // ELIMINA DEL ARREGLO ARTICULOS CARRITO POR EL DATA-ID
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
    console.log(articulosCarrito);
    carritoHtml();
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  console.log(existe);

  if (existe) {
    articulosCarrito = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
      }
      return curso;
    });
  } else {
    articulosCarrito.push(infoCurso);
  }

  console.log(articulosCarrito);
  carritoHtml();
}

function carritoHtml() {
  limpiarHtml();

  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td> 
        <img src="${curso.imagen}" width="100">
        </td>
        <td>
        ${curso.titulo}
        </td>
        <td>
        ${curso.precio}
        </td>
        <td>
        ${curso.cantidad}
        </td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a> 
        </td>`;

    contenedorCarrito.appendChild(row);
  });
}

function limpiarHtml() {
  contenedorCarrito.innerHTML = "";
}

function vaciarCarrito() {
  articulosCarrito = [];
  limpiarHtml();
}
