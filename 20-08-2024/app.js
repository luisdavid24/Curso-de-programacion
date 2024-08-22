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

/*

Pregunta 1: Jhon Esteban
¿Cuál es el propósito del módulo mathOperations.js en el proyecto?
a) Guardar resultados en localStorage.
b) Realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.
c) Manipular el DOM para mostrar resultados.
d) Manejar errores en la aplicación.



Pregunta 2: Andres Stiven Muñoz Malagon
¿Qué hace la función guardarResultado en el módulo storage.js?
a) Guarda el resultado de una operación en el DOM.
b) Guarda el resultado de una operación en localStorage.
c) Muestra un mensaje de error si ocurre un problema.
d) Calcula la suma de dos números y lo guarda en localStorage.



Pregunta 3:Matias Palacios
¿Qué tipo de exportación se utiliza para la función sumar en el módulo mathOperations.js?
a) Exportación por defecto (default).
b) Exportación directa (named export).
c) Exportación anónima.
d) Exportación de clase.


Pregunta 4:Alexandra Henao
En el archivo app.js, ¿qué ocurre si el valor de la variable operacion es "dividir" y el segundo número (num2) es 0?
a) Se muestra un mensaje de error en el DOM.
b) El resultado es 0.
c) La aplicación ignora la operación.
d) El resultado es NaN.


Pregunta 5:Alejandra Henao
¿Cuál es el propósito del módulo domManipulation.js?
a) Realizar operaciones matemáticas en el navegador.
b) Manipular localStorage para almacenar datos.
c) Manipular el DOM para mostrar resultados y errores.
d) Importar otros módulos a la aplicación.



Pregunta 6:Maicon Stiven
¿Qué hace la función obtenerResultado en el módulo storage.js?
a) Recupera el resultado de una operación almacenada en localStorage.
b) Elimina un resultado de localStorage.
c) Guarda el resultado en una variable global.
d) Muestra el resultado en el DOM.


Pregunta 7: Juan Andres Santamaria
¿Qué sucede cuando se hace clic en el botón "Calcular" en la página?
a) Se recarga la página y se reinician los valores de entrada.
b) Se ejecuta una función que realiza la operación seleccionada y muestra el resultado o un error en el DOM.
c) El resultado de la operación se guarda automáticamente en un archivo de texto.
d) Se ocultan los campos de entrada.

*/
