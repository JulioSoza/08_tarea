// Obtener elementos del DOM
const userAgeInput = document.getElementById('userAge');
const speciesSelect = document.getElementById('species');
const calculateButton = document.getElementById('calculateButton');
const resultOutput = document.getElementById('result');

// Función para calcular la edad equivalente
function calcularEdadEquivalente(edad, esperanzaVida) {
  return (edad * esperanzaVida) / 80;
}

// Evento al hacer clic en el botón
calculateButton.addEventListener('click', () => {
  // Obtener la edad del usuario
  const edad = parseInt(userAgeInput.value);

  // Validar la entrada
  if (isNaN(edad) || edad < 0) {
    resultOutput.textContent = "Por favor, ingresa una edad válida.";
    return;
  }

  // Obtener la esperanza de vida de la especie seleccionada
  const esperanzaVida = parseInt(speciesSelect.value);

  // Calcular la edad equivalente
  const edadEquivalente = calcularEdadEquivalente(edad, esperanzaVida);

  // Mostrar el resultado
  resultOutput.textContent = `Tu edad equivalente es: ${edadEquivalente.toFixed(2)} años.`;
});