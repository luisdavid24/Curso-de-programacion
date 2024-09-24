let arr = [2, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 4 === 0) {
    arr[i] *= 2;
  } else {
    arr[i] -= 1;
  }
}
//console.log(arr);

/*
A) [1, 8, 5, 16, 9].
B) [1, 4, 5, 16, 9]
C) [2, 8, 6, 16, 10]
D) [1, 8, 5, 8, 9]
*/



let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers.filter(num => num % 2 === 0)
                    .reduce((acc, num) => acc + num, 0);
//console.log(result)
/*
A) 12
B) 14
C) 20
D) 30
*/



let arr3 = [1, 2, 3, 4, 5, 6];
arr3.splice(2, 2, 10, 20);
//console.log(arr3);

/*
 A) [1, 2, 10, 20, 5, 6]
B) [1, 2, 3, 10, 20, 6]
C) [1, 10, 20, 3, 4, 5, 6]
D) [10, 20, 3, 4, 5, 6]
*/




function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  let resultado = 0;
  for (let i = 1; i <= 10; i++) {
    if (esPrimo(i)) {
      resultado += i;
    }
  }
//console.log(resultado);
/**
A) 17
B) 28
C) 18
D) 27
 */
  

let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
//console.log(sum);
/*
A) 30
B) 20
C) 10
D) 40
*/




function diferenciaCuadrados(n) {
    let sumaCuadrados = 0;
    let cuadradoSuma = 0;
    for (let i = 1; i <= n; i++) {
      sumaCuadrados += i ** 2;
      cuadradoSuma += i;
    }
    cuadradoSuma = cuadradoSuma ** 2;
    return cuadradoSuma - sumaCuadrados;
}
//console.log(diferenciaCuadrados(5))  
/*
A) 172
B) 225
C) 170
D) 168
*/



function sumarDigitos(num) {
    let suma = 0;
    while (num > 0) {
      suma += num % 10;
      num = Math.floor(num / 10);
    }
    return suma;
  }
  
//console.log(sumarDigitos(12345))
/*
A) 6
B) 15
C) 10
D) 12
*/

