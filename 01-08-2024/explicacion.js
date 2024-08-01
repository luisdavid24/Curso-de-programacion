
/*
const numbersEjemplo1 = [10, 20, 30, 40, 50];

numbersEjemplo1.forEach(function(currentValue, index, array) {
  console.log('Valor actual:', currentValue);
  console.log('Índice actual:', index);
  console.log('Array completo:', array);
  console.log('----------------');
});
*/

/*
const multiplier = {
    value: 2
  };
  
  const numbersEjemplo2 = [10, 20, 30, 40, 50];
  
  numbersEjemplo2.forEach(function(currentValue, index, array) {
    console.log('Valor actual:', currentValue);
    console.log('Multiplicado por:', this.value);
    console.log('Resultado:', currentValue * this.value);
    console.log('----------------');
  }, multiplier);

*/


//Ejemplo avanzado de forEach

/*
const students = [
    { name: 'John', score: 85 },
    { name: 'Jane', score: 92 },
    { name: 'Jim', score: 74 },
    { name: 'Jack', score: 80 }
  ];
  
  students.forEach(function(student, index, array) {
    console.log(`${index + 1}. ${student.name} - Score: ${student.score}`);
  });

*/



//Ejemplos Prácticos de SCOPE

/*

var name = "John"; // Variable global

function greet() {
  var greeting = "Hello"; // Variable local
  console.log(greeting + " " + name); // Accede a la variable global 'name'
}

greet(); // "Hello John"
console.log(greeting); // Error: greeting no está definida
*/

/*
if (true) {
    let blockVariable = "Soy una variable de bloque";
    console.log(blockVariable); // Puede acceder a blockVariable
  }
  
  console.log(blockVariable); // Error: blockVariable no está definida
*/



