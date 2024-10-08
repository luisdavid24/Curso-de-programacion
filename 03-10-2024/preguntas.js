//¿Cuál de las siguientes expresiones regulares coincide con la 
//palabra "JavaScript" sin importar si está en mayúsculas o minúsculas?
let regex = /javascript/;
let texto = "JavaScript";

//A) `/javascript/`
//B) `/javascript/i`  
//C) `/JavaScript/`
// D) `/javascript/g`

//¿Qué resultado devuelve la siguiente expresión regular?
let regex2 = /\d\d/g;
let texto2 = "Año 2024";
//console.log(texto2.match(regex2));

// A) `['2', '0', '2', '4']`
//B) `['20','24']`
//C) `['20']` 
//D) `['24']`

//¿Qué opción coincide con todas las secuencias de letras y 
//números en el siguiente texto?
let texto3= "Hola, esto es _un_ ejemplo123"
//A) `/\d+/g`
//B) `/\w+/g` 
//C) `/\s+/g`
//D) `/\b/g`


// ¿Qué hará la siguiente expresión regular con el texto 
//"Hola    mundo\n esto es\tJavaScript"?
let regex4 = /\s+/g;
let texto4 = "Hola    mundo\n esto es\tJavaScript";
//console.log(texto4.match(regex4));
//A) `['    ', 'mundo', 'esto', 'es', 'JavaScript']`✅
//B) `['Hola', 'mundo', 'esto', 'es', 'JavaScript']`
//C) `['    ', '\n', '\t']` 
//D) `['Hola', '\n', 'esto', '\t']`


//¿Cuál es la salida de la siguiente expresión regular?
let regex5 = /\bcat\b/g;
let texto5 = "cat category scat";
//console.log(texto5.match(regex5));

//A) `['category']`
//B) `['cat']` 
//C) `['cat', 'category', 'scat']`
//D) `null`


//¿Cuál es la función del modificador `g` en la siguiente expresión regular?
let regex6 = /a/g;
let texto6 = "banana";
//console.log(texto6.match(regex6));
//A) Busca solo la primera aparición de la letra "a".
//B) Busca todas las ocurrencias de la letra "a". 
//C) Hace que la búsqueda sea insensible a mayúsculas.
//D) Solo busca la letra "a" al final del texto.





//¿Qué hace el metacaracter `.` en la siguiente expresión regular?
let regex7 = /c.t/;
let texto7 = "cat cot c1t";
//console.log(texto7.match(regex7));
//A) Coincide con cualquier carácter excepto los saltos de línea. 
//B) Coincide solo con letras entre "c" y "t".
//C) Solo busca números entre "c" y "t".
//D) Coincide solo con la primera ocurrencia de "cat".



//¿Cuál es el resultado de ejecutar la siguiente expresión regular?
let regex8 = /\w+/g;
let texto8 = "1234 - a_b c!";
//console.log(texto8.match(regex8));
//A) `['1234', 'a_b', 'c']`             ✅
//B) `['1234', '-', 'a_b', 'c', '!']`   ✅
//C) `['-', '!', 'c']`
//D) `['1234', 'c!']`                   ✅


//¿Cuál de las siguientes expresiones regulares busca 
//dos dígitos seguidos?
//A) `/\w\w/`
//B) `/\d\d/` 
//C) `/\s\s/`
//D) `/\b\d/`


//¿Cuál de las siguientes expresiones coincide con el inicio de una línea en un texto multilínea?
//A) `/^texto/`
//B) `/^texto/m` 
//C) `/texto$/`
//D) `/\btexto\b/`


//¿Qué resultado devuelve la siguiente expresión regular?

let regex9 = /\d{3}/;
let texto9 = "Código 12345";
//console.log(texto9.match(regex9));
//A) `['123', '4', '5']`
//B) `['12345']`
//C) `['123']` 
//D) `null`



//¿Cuál es la salida de la siguiente expresión regular?
let regex10 = /\w{4,}/g;
let texto10 = "uno dos tres cuatro cinco";
//console.log(texto10.match(regex10));
//A) `['uno', 'dos']`
//B) `['tres', 'cuatro', 'cinco']` 
//C) `['tres', 'cuatro']`
//D) `['uno', 'dos', 'tres', 'cuatro', 'cinco']`


//¿Qué hace el siguiente código?
let regex11 = /\s/g;
let texto11 = "Hola mundo";
//console.log(texto11.match(regex11));

//A) Busca todas las letras en el texto.
// B) Busca el primer espacio en blanco en el texto.
//C) Busca todos los espacios en blanco en el texto. 
//D) Coincide con todas las letras y espacios.


//¿Cuál de las siguientes expresiones regulares coincide con una 
//cadena que empieza y termina con una letra mayúscula?
// A) `/^[A-Z].*[A-Z]$/` 
//B) `/^[A-Z]{2,}$/`
//C) `/^.*[A-Z].*$/`
//D) `/^[a-zA-Z]+$/`



//¿Qué expresión regular coincide con un número que tenga entre 1 y 4 dígitos?
//A) `/\d+/`
//B) `/\d{1,4}/` 
//C) `/^\d{2,4}$/`
//D) `/\d{1,}/`
















