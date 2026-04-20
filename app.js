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
  boton.textContent = "Modo Claro";
} else {
  boton.textContent = "Modo Oscuro";
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
    boton.textContent = "Modo Claro";
    localStorage.setItem("modo", "oscuro");
  } else {
    boton.textContent = "Modo Oscuro";
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
