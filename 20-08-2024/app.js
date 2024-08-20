import { sumar, restar, multiplicar, dividir } from './mathOperations.js';
import { guardarResultado, obtenerResultado } from './storage.js';
import { mostrarResultado, mostrarError } from './domManipulation.js';

// Manejar el evento de clic en el botón "Calcular"
document.getElementById('calcular').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operacion = document.getElementById('operacion').value;

  try {
    let resultado;
    switch (operacion) {
      case 'sumar':
        resultado = sumar(num1, num2);
        break;
      case 'restar':
        resultado = restar(num1, num2);
        break;
      case 'multiplicar':
        resultado = multiplicar(num1, num2);
        break;
      case 'dividir':
        resultado = dividir(num1, num2);
        break;
      default:
        throw new Error('Operación no válida.');
    }

    guardarResultado('ultimoResultado', resultado);
    mostrarResultado(resultado);
  } catch (error) {
    mostrarError(error.message);
  }
});

// Cargar el último resultado almacenado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const ultimoResultado = obtenerResultado('ultimoResultado');
  if (ultimoResultado !== null) {
    mostrarResultado(ultimoResultado);
  }
});
