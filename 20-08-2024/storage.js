// Función para guardar un resultado en localStorage
export function guardarResultado(clave, resultado) {
    localStorage.setItem(clave, JSON.stringify(resultado));
  }
  
  // Función para obtener un resultado de localStorage
  export function obtenerResultado(clave) {
    const resultado = localStorage.getItem(clave);
    return resultado ? JSON.parse(resultado) : null;
  }
  