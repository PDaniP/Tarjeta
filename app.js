const nombreGuardado = localStorage.getItem("nombre");
const tituloGuardado = localStorage.getItem("titulo");

if (nombreGuardado) {
  document.querySelector(".nombre").textContent = nombreGuardado;
}

if (tituloGuardado) {
  document.querySelector(".titulo").textContent = tituloGuardado;
}

// Creamos un objeto de fecha con el momento actual
const fechaActual = new Date();

// Obtenemos los valores individuales
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por eso sumamos 1
const anio = fechaActual.getFullYear();

// Inyectamos los valores en los párrafos usando su ID
document.getElementById("current-day").textContent = dia;
document.getElementById("current-month").textContent = mes;
document.getElementById("current-year").textContent = anio;

//Para boton modo oscuro y guardar el estado actual

const modoGuardado = localStorage.getItem("modo");
const boton = document.querySelector(".mode");
const card = document.querySelector(".card");

if (modoGuardado === "oscuro") {
  document.body.classList.add("dark-mode");
  boton.textContent = "🔆";
} else {
  boton.textContent = "🌙";
}

// Cargar color guardado
const colorGuardado = localStorage.getItem("colorTexto");

if (colorGuardado) {
  card.classList.add(`text-${colorGuardado}`);
}

//Boton modo oscuro

boton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    boton.textContent = "🔆";
    localStorage.setItem("modo", "oscuro");
  } else {
    boton.textContent = "🌙";
    localStorage.setItem("modo", "claro");
  }
});

//botones de colores

const botonesColor = document.querySelectorAll(".color-btn");

botonesColor.forEach((boton) => {
  boton.addEventListener("click", () => {
    const color = boton.dataset.color;

    // limpiar colores anteriores
    card.classList.remove("text-red", "text-blue", "text-yellow");

    if (color === "reset") {
      localStorage.removeItem("colorTexto");
    } else {
      card.classList.add(`text-${color}`);
      localStorage.setItem("colorTexto", color);
    }
  });
});

// JavaScript: Función para cambiar la visibilidad
function mostrarFormulario() {
  const formulario = document.getElementById("formulario");

  if (formulario.style.display === "none") {
    formulario.style.display = "block"; // Muestra el formulario
  } else {
    formulario.style.display = "none"; // Lo vuelve a ocultar si se presiona de nuevo
  }
}

function modificarDatos() {
  var nombreInput = document.getElementById("input-nombre").value;
  var tituloInput = document.getElementById("input-titulo").value;

  const nombre = document.querySelector(".nombre");
  const titulo = document.querySelector(".titulo");

  //actaualiza si hay contenido

  if (nombreInput.trim() !== "") {
    nombre.textContent = nombreInput;
    localStorage.setItem("nombre", nombreInput);
  }

  if (tituloInput.trim() !== "") {
    titulo.textContent = tituloInput;
    localStorage.setItem("titulo", tituloInput);
  }

  //ocultar el formulario
  document.getElementById("formulario").style.display = "none";
}
