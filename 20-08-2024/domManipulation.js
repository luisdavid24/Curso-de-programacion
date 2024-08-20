// Función para mostrar un resultado en el DOM
export function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `Resultado: ${resultado}`;
  }
  
  // Función para mostrar un mensaje de error en el DOM
  export function mostrarError(mensaje) {
    const errorElemento = document.getElementById('error');
    errorElemento.textContent = `Error: ${mensaje}`;
  }
  