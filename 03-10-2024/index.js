let regex = /hola/;
let texto = "hola mundo";
//console.log(regex.test(texto));




//      Modificador i (insensible a mayúsculas)
//Este modificador hace que la búsqueda no distinga entre mayúsculas 
//y minúsculas.
let regex2 = /hola/i;
let texto2 = "HoLa, ¿cómo estás?";
//console.log(regex2.test(texto2)); 




//          Modificador g (búsqueda global)
//El modificador g realiza la búsqueda en todo el texto, 
//no solo deteniéndose en la primera coincidencia.
let regex3 = /a/g;
let texto3 = "casa, camion, cadena";
let resultado = texto3.match(regex3);
//console.log(resultado); // ['a', 'a', 'a', 'a', 'a']



//      Modificador m (búsqueda multilínea)
//El modificador m permite que los caracteres de ancla 
//como ^ y $ coincidan al principio o al final de cada línea, no solo del texto completo.

let regex4 = /^hola/m;
let texto4 = `hola
cómo estás
hola otra vez`;
//console.log(texto4.match(regex4)); 


//              Combinación de i y g
//Aquí, tanto las mayúsculas como las minúsculas son ignoradas,
//y se realiza una búsqueda global para encontrar todas las coincidencias.
let regex5 = /hola/ig;
let texto5 = "Hola hola HOLA";
let resultado2 = texto5.match(regex5);
//console.log(resultado2); // ['Hola', 'hola', 'HOLA']



//          . (punto) - Representa cualquier carácter
//El punto coincide con cualquier carácter excepto el de nueva línea.
//Aquí, el patrón /c.t/ busca cualquier carácter entre "c" y "t". 
//Por eso coincide con "cat", "cut" y "c1t".
let regex6 = /a.g../;
let texto6 = "abgfc";
let texto7 = "cut";
let texto8 = "c1t";
//console.log(regex6.test(texto6)); // true
//console.log(regex6.test(texto7)); // true
//console.log(regex6.test(texto8)); // true



//\d - Cualquier dígito (0-9)
//Este metacaracter coincide con cualquier número del 0 al 9.
//En este caso, /\d\d/ busca dos dígitos seguidos, 
//por lo que encuentra "20" en el texto "Año 2024".
let regex7 = /\d\d\d\d/;
let texto9 = "Año 2024";
//console.log(texto9.match(regex7)); // ['20']




//\w - Cualquier carácter alfanumérico
//Coincide con cualquier letra, número o guion bajo (_).
//Aquí, /\w+/g encuentra todas las secuencias de caracteres alfanuméricos en el texto, 
//incluyendo palabras y números.
let regex8 = /\w+/g;
let texto10 = "Hola, esto es _un_ ejemplo123";
//console.log(texto10.match(regex8)); // ['Hola', 'esto', 'es', '_un_', 'ejemplo123']


//\s - Cualquier espacio en blanco
//Coincide con cualquier espacio en blanco (espacios, tabs, saltos de línea).

//El patrón /\s+/g busca secuencias de espacios en blanco y encuentra múltiples espacios, 
//un salto de línea y un tabulador.
let regex9 = /\s+/g;
let texto11 = "Hola    mundo\nesto es\tJavaScript";
//console.log(texto11.match(regex9)); // ['    ', '\n', '\t']


//\b - Límite de palabra
//El límite de palabra coincide en el inicio o fin de una palabra
//En este caso, /\bcat\b/g busca la palabra "cat" como palabra completa,
//no parte de otra como "category" o "scat".


let regex10 = /\bcat\b/g;
let texto12 = "cat category scat";
//console.log(texto12.match(regex10)); // ['cat']

//*: 0 o más veces
let regex11 = /a\d*/;
//console.log(regex11.test("b123"))



//+: 1 o más veces
let regex12 = /a\d+/;
//console.log(regex12.test("a455"))
//console.log("a123".match(regex));  // ["a123"]
//console.log("a".match(regex));     // null
//console.log("b123".match(regex));  // null

//?: 0 o 1 vez

let regex13 = /a?/;
//console.log(regex13.test("aaaa888"))
//console.log("a123".match(regex));  // ["a1"]
//console.log("a".match(regex));     // ["a"]
//console.log("b123".match(regex));  // null

//{n}: Exactamente n veces
let regex14 = /a\d{3}/;
//console.log(regex14.test("a477"))


//{n,}: Al menos n veces
let regex15 = /a\d{3,}/;
//console.log(regex15.test("a82"))


//{n,m}: Entre n y m veces
let regex16= /a\d{2,4}/;
console.log(regex16.test("a88"))



