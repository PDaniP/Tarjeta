// Creamos un objeto de fecha con el momento actual
    const fechaActual = new Date();

    // Obtenemos los valores individuales
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por eso sumamos 1
    const anio = fechaActual.getFullYear();

    // Inyectamos los valores en los párrafos usando su ID
    document.getElementById('current-day').textContent = dia;
    document.getElementById('current-month').textContent = mes;
    document.getElementById('current-year').textContent = anio;


const boton = document.querySelector('.mode');

boton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        boton.textContent = 'Modo Claro';
    } else {
        boton.textContent = 'Modo Oscuro';
    }
});


