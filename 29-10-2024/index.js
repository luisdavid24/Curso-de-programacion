
/*
Pregunta 1

¿Cuál será la salida del siguiente código?

let dates = [new Date('2022-08-01'), new Date('2022-08-05'), new Date('2022-08-03')];
let formattedDates = dates.map(date => date.toLocaleDateString()).sort().reverse();
console.log(formattedDates);

Opciones:

- A) `['08/01/2022', '08/03/2022', '08/05/2022']`
- B) `['08/05/2022', '08/03/2022', '08/01/2022']`
- C) `['2022-08-05', '2022-08-03', '2022-08-01']`
- D) Error de sintaxis


Pregunta 2

¿Cuál será la salida del siguiente código?

let numbers = [5, 8, 3, 10];
let result = numbers.map(num => num * 2)
    .filter(num => num > 10).reduce((acc, val) => acc + val, 0);
console.log(result);


Opciones:
- A) `26`
- B) `36`
- C) `48`
- D) `18`



Pregunta 3

¿Qué imprimirá el siguiente código en la consola?


let dates = [new Date('2023-03-15T12:30:00'), 
    new Date('2023-03-15T12:35:00'), new Date('2023-03-15T12:40:00')];
let totalSeconds = dates.map(date => date.getSeconds()).reduce((acc, val) => acc + val);
console.log(totalSeconds);


Opciones:

- A) `0`
- B) `105`
- C) `15`
- D) Depende de la fecha actual



Pregunta 4

¿Cuál será la salida de este código?


let arr = [3, 1, 4, 2];
let result = arr.sort().map(num => num.toString()).reduce((acc, val) => acc + val, '');
console.log(result);

Opciones:

- A) `'3142'`
- B) `'1234'`
- C) `'4321'`
- D) `'2431'`



Pregunta 5

¿Cuál es la salida de este fragmento de código?


let times = [new Date('2023-08-15T10:20:00'), 
    new Date('2023-08-15T10:45:00'),
    new Date('2023-08-15T11:15:00')];
let minutesArray = times.map(time => time.getMinutes())
    .filter(min => min > 30);
console.log(minutesArray);


Opciones:

- A) `[20, 45, 15]`
- B) `[10, 20, 15]`
- C) `[45]`
- D) `[10, 45]`


Pregunta 6

¿Qué valor se almacenará en la variable `sum` al ejecutar el siguiente código?

let values = [1, 2, 3, 4];
let sum = values.reverse().map(x => x * 3).reduce((acc, x) => acc + x, 0);
console.log(sum);

Opciones:
- A) `10`
- B) `20`
- C) `30`
- D) `36`



 Pregunta 7

¿Qué devuelve el siguiente código?*


let dates = [
  new Date('2024-01-01T00:00:00'),
  new Date('2024-01-01T00:01:00'),
  new Date('2024-01-01T00:02:00')
];
let result = dates.map(date => date.getTime())
    .reduce((acc, time) => acc + time) / dates.length;
console.log(result);


Opciones:

- A) El promedio de los timestamps en milisegundos
- B) El promedio de los segundos
- C) La suma de los timestamps en milisegundos
- D) La suma de los minutos


Pregunta 8

¿Cuál será la salida de este código?


let values = [5, 10, 15, 20];
let result = values.filter(val => val % 10 === 0).map(val => val - 5).reverse();
console.log(result);


Opciones:

- A) `[15, 5]`
- B) `[5, 10]`
- C) `[10, 5]`
- D) `[5, 15]`


 
Pregunta 9

¿Qué valor imprime el siguiente código?


let arr = [10, 20, 30, 40];
let output = arr.map(x => x / 2).filter(x => x > 10).reduce((acc, x) => acc * x, 1);
console.log(output);


Opciones:

- A) `100`
- B) `300`
- C) `200`
- D) `400`


Pregunta 10

¿Qué mostrará el siguiente código en la consola?

let dates = [
  new Date('2023-06-01T12:00:00'),
  new Date('2023-06-01T12:15:00'),
  new Date('2023-06-01T12:30:00')
];
let seconds = dates.map(date => date.getSeconds()).reduce((a, b) => a + b, 10);
console.log(seconds);

Opciones:

- A) `10`
- B) `45`
- C) `0`
- D) `10`





Pregunta 11

Dado el siguiente código, ¿cuál será el resultado en la consola?

let numbers = [10, 20, 30, 40];
let result = numbers.filter(num => num % 20 === 0).map(num => num / 2)
    
.reduce((acc, val) => acc + val, 5);
console.log(result);

Opciones:
1. `30`
2. `25`
3. `35`
4. `45`





*/
