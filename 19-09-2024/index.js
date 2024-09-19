function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }
  
const counter1 = outer();
//console.log(counter1());
//console.log(counter1());


/*
¿Cuál es el resultado?

A) 0 1
B) 1 2
C) undefined undefined
D) 2 3
*/

function test() {
  console.log(x);
  let x = 20;
}
//test();
/*
¿Cuál es el resultado?

A) 10
B) undefined
C) ReferenceError
D) 20
*/

/*
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
*/

  /*
¿Qué hace este código?

A) Hace una petición GET y recibe una respuesta en formato JSON.
B) Hace una petición POST.
C) Llama a una función de evento del DOM.
D) Obtiene datos del almacenamiento local.
  */

/*
fetch('https://api.example.com/data', { method: 'POST' })
  .then(response => response.json())
  .then(data => console.log(data));
*/
  /*
  
¿Cuál es el método HTTP utilizado?

A) GET
B) POST
C) PUT
D) DELETE
  
  */



let arr = [1, 2, 3, 4];
arr.push(5);
//console.log(arr.length);
/*
¿Cuál es el valor de arr.length?

A) 4
B) 5
C) 3
D) undefined
*/



let arr2 = [1, 2, 3, 4];
arr2.pop();
//console.log(arr2);

/*
¿Cuál es el resultado?

A) [1, 2, 3]
B) [1, 2, 3, 4]
C) []
D) [1, 2]

*/


/*
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
 */

  /*
¿Cuál es el resultado?
A) 0 1 2
B) 3 3 3
C) undefined undefined undefined
D) 0 0 0
*/


let sum = 0;
for (let i = 1; i <= 6; i++) {
  sum += i;
}
//console.log(sum);

/**
¿Cuál es el resultado?
A) 5
B) 15
C) 10
D) 20
 */



const ul = document.getElementById('list');
const button = document.getElementById('btn2');

button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(newItem);
});

/*
¿Qué sucede si haces clic en el botón tres veces?
A) Se añaden tres nuevos elementos <li>, con los textos "Item 4", "Item 5", y "Item 6".
B) Se reemplazan los elementos existentes con nuevos elementos <li>.
C) Se lanza un error, ya que el número de hijos no se actualiza.
D) Se crea un bucle infinito de nuevos elementos <li>.
*/

button.addEventListener('click', () => {
    alert(input.value);
    input.value = '';
});

/* 
¿Qué sucede después de escribir algo en el campo de texto y hacer clic en el botón?
A) Se muestra un alert con el texto escrito, y luego el campo se vacía.
B) Se muestra un alert con un valor vacío, ya que el campo de texto se vacía antes del alert.
C) No sucede nada.
D) Se lanza un error porque el valor no se puede acceder.
*/


const container = document.getElementById('container');
  
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      alert(event.target.textContent);
    }
});
/* 
¿Qué sucede al hacer clic en uno de los botones?
A) Se muestra un alert con el texto del botón que se hizo clic.
B) No sucede nada porque el evento no está asociado a los botones.
C) Se lanza un error de tipo TypeError.
D) Se ejecuta un bucle infinito de alert sin fin.
*/




class Shape {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }
class Circle extends Shape {
    constructor(name, radius) {
      super(name);
      this.radius = radius;
    }
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
const circle = new Circle('Circle', 5);
//console.log(circle.getName());
//console.log(circle.getArea());
/*
¿Qué imprime el código?

A) Circle seguido de 78.54
B) Circle seguido de 25
C) undefined seguido de NaN
D) Error
*/
  


class Employee {
    constructor(name) {
      this.name = name;
    }
    work() {
      return `${this.name} is working.`;
    }
  }
  
  class Manager extends Employee {
    work() {
      return `${this.name} is managing.`;
    }
  }
  
  const emp = new Employee("John");
  const mgr = new Manager("Jane");
//console.log(emp.work());
//console.log(mgr.work());
/*
¿Cuál es el resultado?

A) John is working seguido de Jane is working
B) John is working seguido de Jane is managing
C) undefined seguido de undefined
D) Error
*/



const arr3 = [1, 2, [3, 4, [5, 6]], 7];
const arr4 = [8, 9, [10, 11]];

const mergeAndFlatten = (arr3, arr4) => {
  return arr3.concat(arr4).flat(2).filter(num => num % 2 === 0).map(num => num * 2);
};

const result = mergeAndFlatten(arr3, arr4);
//console.log(result);

/*
¿Cuál es el resultado de console.log(result)?
A) [2, 4, 6, 8, 10, 12, 14, 16, 20, 22]
B) [4, 8, 12, 16, 20]
C) [4, 8, 12, 16]
D) [2, 4, 6, 8, 10]
*/
const users = [
    { name: 'Alice', age: 30, isActive: true },
    { name: 'Bob', age: 25, isActive: false },
    { name: 'Charlie', age: 35, isActive: true },
    { name: 'David', age: 40, isActive: false }
  ];
  
  const processUsers = users => {
    return users
      .filter(user => user.isActive)
      .reduce((acc, user) => {
        acc[user.name] = user.age;
        return acc;
      }, {});
  };
  
const result2 = processUsers(users);
console.log(result2);

/* 
¿Cuál es el resultado de console.log(result)?
A) { Alice: 30, Charlie: 35 }
B) { Alice: 30, Bob: 25, Charlie: 35 }
C) { Alice: 30, Charlie: 35, David: 40 }
D) { Bob: 25, David: 40 }
*/
  