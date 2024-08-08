
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




//              SECCION DE PREGUNTAS EN VIVO


//Uso de push  (Matías Palacio)
/*
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
*/


/*
¿Qué imprimirá el código anterior?   (Juan Andrés Santamaría)
a) ["apple", "banana"]
b) ["apple", "orange"]
c) ["apple", "banana", "orange"]
d) ["orange", "apple", "banana"]
*/




// Uso de pop    (Daniel Andrés Vasquez)
/*
let colors = ["red", "green", "blue"];
let lastColor = colors.pop();
console.log(lastColor);
*/


/*
¿Qué imprimirá el código anterior?  
a) red
b) green
c) blue
d) undefined


*/




// Uso de shift  (Julian Perez Ortiz)
/*
let numbers = [10, 20, 30];
let firstNumber = numbers.shift();
console.log(numbers);
*/


/*
¿Qué imprimirá el código anterior?   (Sebastian Ramirez)
a) [10, 20, 30]
b) [20, 30]
c) [30]
d) []
*/








//Pregunta 4: Uso de unshift   


/*
let animals = ["cat", "dog"];
animals.unshift("rabbit");
console.log(animals);
*/


/*
¿Qué imprimirá el código anterior? (Maicol Stiven Montoya)
a) ["cat", "dog"]
b) ["rabbit", "cat", "dog"]
c) ["cat", "dog", "rabbit"]
d) ["dog", "cat", "rabbit"]
*/








// Uso de length  (Jhon Esteban Londoño)
/*
let cities = ["New York", "Los Angeles", "Chicago"];
console.log(cities.length);
*/


/*
¿Qué imprimirá el código anterior?
a) 2
b) 3
c) 4
d) 5
*/




// Uso del ciclo for  (Andres Sriven Muñoz Malagon)


/*
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);
*/


/*
¿Qué imprimirá el código anterior?
a) 5
b) 10
c) 15
d) 20
*/






// Uso del ciclo for...of
/*
let letters = ["a", "b", "c"];
let result = "";
for (let letter of letters) {
  result += letter;
}
console.log(result);
*/
/*
¿Qué imprimirá el código anterior?
a) abc
b) cba
c) a, b, c
d) abc,


*/




// Uso de forEach
/*
let numbers = [1, 2, 3];
let total = 0;
numbers.forEach(function(number) {
  total += number;
});
console.log(total);
*/


/**
¿Qué imprimirá el código anterior?
a) 3
b) 6
c) 9
d) 12
 */






//Uso de map
/*
let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);
*/
/*
¿Qué imprimirá el código anterior?
a) [1, 2, 3]
b) [2, 4, 6]
c) [3, 6, 9]
d) [4, 8, 12]
*/




// Uso de filter


/*
let ages = [18, 22, 15, 30];
let adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults);




¿Qué imprimirá el código anterior?
a) [18, 22, 15, 30]
b) [22, 30]
c) [18, 22, 30]
d) [15]






*/






// Uso de reduce




/*
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0);
console.log(sum);


¿Qué imprimirá el código anterior?
a) 10
b) 20
c) 30
d) 40




*/






//Uso de find


/*


let students = [
    { name: "John", score: 85 },
    { name: "Jane", score: 92 },
    { name: "Jim", score: 74 }
];
let highScorer = students.find(function(student) {
    return student.score > 90;
});
console.log(highScorer.name);


¿Qué imprimirá el código anterior?
a) John
b) Jane
c) Jim
d) undefined


  */



