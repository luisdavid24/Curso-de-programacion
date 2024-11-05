//Ejercicio 1
/*
function storeUserData(userInfo) {
  if (Array.isArray(userInfo) && userInfo[0].hasOwnProperty("username")) {
    userInfo[0].username = userInfo[0].username.trim();
    if (userInfo[0].username.includes(" ")) {
      localStorage.clear();
    } else {
      localStorage.setItem("userData", JSON.stringify(userInfo));
    }
  }
}

const userInfo = [{ username: "  JohnDoe " }, { username: "Jane" }];
storeUserData(userInfo);
*/
/**
Opciones:

1.Se almacena userInfo en localStorage como una cadena JSON sin espacios en los nombres de usuario.
2.Se borra todo el localStorage porque userInfo[0].username incluye espacios.
3.No se realiza ninguna acción ya que userInfo no es un arreglo.
4.Se almacena solo el primer objeto de userInfo en localStorage.
 */

//Ejercicio 2:
/*
function processArray(arr) {
  if (Array.isArray(arr) && arr.every((item) => item.hasOwnProperty("name"))) {
    const flattenedArr = arr
      .flat()
      .sort((a, b) => a.name.localeCompare(b.name));
    return flattenedArr.map((item) => item.name).includes("John");
  }
  return false;
}

const data = [[{ name: "Anna" }], [{ name: "Zara" }, { name: "John" }]];
console.log(processArray(data));
*/
/***
Opciones:
1.Devuelve true porque 'John' está presente después de aplanar y ordenar el arreglo.
2.Devuelve false porque data no cumple con los requisitos de desanidación.
3.Devuelve true ya que el arreglo está desanidado, pero el orden es irrelevante.
4.Devuelve false porque Array.isArray() devuelve false.
 */

//Ejercicio 3
/*
function storeTime() {
  if (!localStorage.getItem("timestamp")) {
    localStorage.setItem("timestamp", new Date().getTime());
  }

  const interval = setInterval(() => {
    const timestamp = parseInt(localStorage.getItem("timestamp"), 10);
    if (new Date().getTime() - timestamp >= 5000) {
      console.log("5 segundos han pasado");
      clearInterval(interval);
      localStorage.clear();
    }
  }, 1000);
}
storeTime();
*/
/*
Opciones:
1.Muestra '5 segundos han pasado' en la consola y borra localStorage después de 5 segundos.
2.Muestra '5 segundos han pasado' en la consola cada segundo sin borrar localStorage.
3.Nunca borra localStorage porque clearInterval() no se llama correctamente.
4.No muestra nada ya que la función setInterval() no se ejecuta.
*/

//Ejercicio 4
/*
function validateAndStore(userInput) {
  if (
    Array.isArray(userInput) &&
    userInput.every(
      (item) => item.hasOwnProperty("email") && item.email.trim() !== ""
    ) &&
    !userInput.some((item) => item.email.includes(" "))
  ) {
    localStorage.setItem("validUsers", JSON.stringify(userInput));
  } else {
    localStorage.clear();
  }
}

const userInput = [
  { email: " john.doe@example.com " },
  { email: "jane_doe@example.com" },
];
validateAndStore(userInput);
*/
/*
Opciones:
1.Se guarda userInput en localStorage sin los espacios en blanco en email.
2.Se limpia localStorage porque uno de los email incluye espacios en blanco.
3.Se guarda solo el segundo objeto en localStorage.
4.No realiza ninguna acción porque Array.isArray(userInput) devuelve false
*/

//Ejercicio 5
/*
function processData(data) {
  if (
    Array.isArray(data) &&
    data.flat().every((item) => item.hasOwnProperty("timestamp"))
  ) {
    const sortedData = data.flat().sort((a, b) => a.timestamp - b.timestamp);
    localStorage.setItem("processedData", JSON.stringify(sortedData));
  }
}

const data = [
  [{ timestamp: 1633052800000 }, { timestamp: 1633139200000 }],
  [{ timestamp: 1633225600000 }],
];
processData(data);
*/
/*
Opciones:
1.localStorage contiene processedData con los datos en orden ascendente de timestamp.
2.localStorage permanece vacío ya que data no cumple con los requisitos.
3.localStorage contiene solo el último elemento del arreglo.
4.No se realiza ninguna acción, ya que Array.isArray() devuelve false.
*/

//Ejercicio 6
/*
function validateAndStoreDate(dates) {
  if (Array.isArray(dates) && dates.every(date => date.hasOwnProperty('eventDate'))) {
    const currentTime = new Date().getTime();
    const validDates = dates.filter(date => new Date(date.eventDate).getTime() >= currentTime);
    localStorage.setItem('validDates', JSON.stringify(validDates));
  } else {
    localStorage.clear();
  }
}

const dates = [
  { eventDate: '2024-12-01T10:00:00' },
  { eventDate: '2024-10-30T08:30:00' }
];
validateAndStoreDate(dates);

*/

/*
Opciones:
1.Guarda solo las fechas futuras en localStorage como validDates.
2.Guarda todas las fechas de dates en localStorage como validDates.
3.Limpia localStorage y no guarda nada.
4.Guarda todas las fechas en localStorage, sin importar si están en el pasado o el futuro.
*/

//Ejercicio 7
/*
function transformAndStoreData(users) {
  if (Array.isArray(users) && users.every(user => user.hasOwnProperty('age') && user.age >= 18)) {
    const sortedAges = users.map(user => user.age).sort((a, b) => b - a).flat();
    const result = sortedAges.includes(21);
    localStorage.setItem('adults', JSON.stringify(users));
    return result;
  }
  localStorage.clear();
  return false;
}

const users = [{ age: 18 }, { age: 21 }, { age: 30 }];
console.log(transformAndStoreData(users));

*/
/**
Opciones:
1.Guarda users en localStorage y devuelve true porque 21 está en sortedAges.
2.Guarda users en localStorage y devuelve false porque 21 no está en sortedAges.
3.Limpia localStorage y devuelve false.
4.Guarda solo usuarios con edades mayores a 21 en localStorage y devuelve true.
 */

//Ejercicio 8
/*
function processUserInput(input) {
  if (typeof input === 'string') {
    const trimmedInput = input.trim();
    if (trimmedInput.includes('@') && trimmedInput.length > 5) {
      localStorage.setItem('userEmail', trimmedInput);
      
      const interval = setInterval(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail && storedEmail.includes('@')) {
          console.log('Email válido almacenado');
          clearInterval(interval);
        } else {
          localStorage.clear();
        }
      }, 2000);
    }
  }
}

processUserInput('   example@domain.com   ');
*/

/*
Opciones:
1.Borra localStorage cada 2 segundos hasta que se cumple la condición y luego detiene el temporizador.
2.Muestra Email válido almacenado en la consola y detiene el temporizador, conservando el correo en localStorage.
3.Limpia localStorage y no guarda nada porque input es una cadena con espacios.
4.Ejecuta un temporizador indefinidamente sin mostrar mensaje en la consola
*/
