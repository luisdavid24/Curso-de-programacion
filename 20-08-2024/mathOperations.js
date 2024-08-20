// Función para sumar dos números
export function sumar(a, b) {
    return a + b;
  }
  
  // Función para restar dos números
  export function restar(a, b) {
    return a - b;
  }
  
  // Función para multiplicar dos números
  export function multiplicar(a, b) {
    return a * b;
  }
  
  // Función para dividir dos números
  export function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return a / b;
  }
  
  // Exportación por defecto
  export default {
    sumar,
    restar,
    multiplicar,
    dividir
  };
  