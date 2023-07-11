// Obtener el formulario y los campos
const reservaForm = document.getElementById('reservaForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const fechaHoraInput = document.getElementById('fechaHora');
const numPersonasInput = document.getElementById('numPersonas');

// Agregar el evento de submit al formulario
reservaForm.addEventListener('submit', function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Validar los campos
  if (nombreInput.value === '') {
    alert('Por favor, ingresa tu nombre.');
    return;
  }

  if (emailInput.value === '') {
    alert('Por favor, ingresa tu correo electrónico.');
    return;
  }

  if (fechaHoraInput.value === '') {
    alert('Por favor, ingresa la fecha y hora de la reserva.');
    return;
  }

  if (numPersonasInput.value === '' || numPersonasInput.value <= 0) {
    alert('Por favor, ingresa un número válido de personas.');
    return;
  }

  // Si todos los campos son válidos, se puede enviar el formulario
  alert('¡Reserva realizada con éxito!');
  reservaForm.reset(); // Reiniciar el formulario si se desea

  // Aquí puedes agregar el código adicional para enviar los datos del formulario a un servidor o realizar alguna otra acción.
});