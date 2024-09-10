const calculadoraModulo = (function () {
    // Variables privadas
    let resultado = 0;
  
    // Funciones privadas
    function verificarNumero(valor) {
      if (typeof valor !== 'number') {
        throw new Error("El valor debe ser un número.");
      }
    }
  
    // Métodos públicos (expuestos)
    return {
      sumar: function (numero) {
        verificarNumero(numero);
        resultado += numero;
        return resultado;
      },
      restar: function (numero) {
        verificarNumero(numero);
        resultado -= numero;
        return resultado;
      },
      obtenerResultado: function () {
        return resultado;
        },
        reiniciar: function () {
        resultado = 0;
        }
        };
})();
       
       
// Usando el módulo
console.log(calculadoraModulo.sumar(10)); // 10
console.log(calculadoraModulo.restar(3)); // 7
console.log(calculadoraModulo.obtenerResultado()); // 7
calculadoraModulo.reiniciar();
console.log(calculadoraModulo.obtenerResultado()); // 0
         