/**
Pregunta 10:
¿Qué devuelve `Math.min(-10, 5, 0)`?

a) `-10`   
b) `0`  
c) `5`  
d) `-5`  


Pregunta 11:¿Cuál es el resultado de `Math.abs(-20)`?

a) `-20`  
b) `20`   
c) `0`  
d) `undefined`  


Pregunta 12: 
Dado el siguiente código, ¿cuál es el resultado de `console.log(result)`?


const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);
const result = 
    Object.assign({}, { [keys[0]]: values[0] }, { [keys[1]]: Math.abs(values[1] - 4) });

console.log(result);


a) `{ a: 2, b: 2 }`  
b) `{ a: 1, b: 1 }`  
c) `{ a: 1, b: 2 }`   
d) `{ a: 1, b: 1 }`  



Pregunta 12:¿Qué se mostrará en la consola después de ejecutar el siguiente código?


const numbers = [5, 12, 8, 130, 44];
const maxNum = Math.max(...numbers);
const minNum = Math.min(...numbers);
const roundedMax = Math.round(maxNum / 10);
const result = { max: roundedMax, min: minNum };

console.log(Object.entries(result).map(([key, value]) => `${key}: ${value}`).join(', '));


a) `max: 1, min: 5`  
b) `max: 13, min: 5`
c) `max: 1, min: 0`  
d) `max: 1, min: 130`  



Pregunta 13:
Dado el siguiente código, ¿qué se imprime en `div.innerHTML` al final de su ejecución?

const div = document.createElement('div');
div.classList.add('original');

const classNames = ['first', 'second', 'third'];
classNames.forEach(className => div.classList.add(className));

div.classList.remove('second');
div.classList.toggle('original');
div.classList.toggle('fourth');

div.innerHTML = `Classes: ${Array.from(div.classList).join(', ')}`;
console.log(div.innerHTML);

a) `Classes: original, first, third, fourth` 
b) `Classes: first, third, fourth`  
c) `Classes: first, second, third`  
d) `Classes: first, second, third, fourth`  


Pregunta 14: ¿Cuál es el resultado de ejecutar el siguiente bloque de código?


const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(num => num * 2);
const squared = arr.map(num => Math.pow(num, 2));
const combined = Object.assign({}, ...doubled
    .map((num, index) => ({ [index]: squared[index] })));

console.log(Object.entries(combined).reduce((acc, [key, value]) => acc + value, 0));

a) `30`  
b) `55`  
c) `60`   
d) `20`  

---

Pregunta 15:
Considera el siguiente código. ¿Qué se mostrará en la consola?
*/
const data = {
    name: "Alice",
    age: 25,
    scores: [95, 85, 75],
};

const summary = Object.entries(data).map(([key, value]) => {
    if (Array.isArray(value)) {
        return `${key}: ${value.join(', ')}, 
        average: ${Math.round(value.reduce((a, b) => a + b) / value.length)}`;
    }
    return `${key}: ${value}`;
});

console.log(summary.join(' | '));
/*

a) `name: Alice | age: 25 | scores: 95, 85, 75, average: 85`  
b) `name: Alice | age: 25 | scores: 85`  
c) `name: Alice | age: 25 | scores: 95, 85, 75, average: 75`  
d) `name: Alice | age: 25 | scores: 95, 85, 75, average: 85` 

 */