//Ejemplo de filter:
const numeros = [1, 2, 3, 4, 5];
const mayoresDeTres = numeros.filter((num) => num > 3);
console.log(mayoresDeTres); // [4, 5]

//Ejemplo de reduce:
const numeros2 = [1, 2, 3, 4];
const suma = numeros2.reduce((total, num) => total + num, 0);
console.log(suma); // 10
