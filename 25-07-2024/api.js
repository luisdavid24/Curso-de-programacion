async function getUsers() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        console.log('Users:', users);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


getUsers();


/*
Explicacion al detalle:

async function getUsers() 
async: La palabra clave async se utiliza para definir una función asíncrona. 
Una función asíncrona devuelve una promesa y permite el uso de await dentro de ella.


try {
    // Código que puede lanzar excepciones
} catch (error) {
    // Código para manejar las excepciones
    console.error('There was a problem with the fetch operation:', error);
}


try: El bloque try contiene el código que puede lanzar excepciones.
catch: El bloque catch captura y maneja cualquier excepción que ocurra en el bloque try.






const response = await fetch('https://rickandmortyapi.com/api/character/?page=1', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
await: Espera a que la promesa de fetch se resuelva. fetch devuelve una promesa que se resuelve en la respuesta HTTP cuando la solicitud completa.

fetch: Función que realiza la solicitud HTTP. Toma dos argumentos:
    URL: 'https://rickandmortyapi.com/api/character/?page=1'. La URL del endpoint de la API que se está consultando.
    Opciones: Un objeto que contiene detalles sobre la solicitud:
        method: 'GET': Especifica que el método HTTP utilizado es GET, que se utiliza para obtener datos del servidor.
        headers: Un objeto que contiene headers HTTP:
        Accept: 'application/json': Indica que el cliente espera una respuesta en formato JSON.
        Content-Type: 'application/json': Indica que el cuerpo de la solicitud, si lo hubiera, estaría en formato JSON.



if (!response.ok) {
    throw new Error('Network response was not ok');
}
response.ok: Una propiedad de la respuesta que es true si la solicitud fue exitosa (estado HTTP en el rango 200-299).
throw new Error: Lanza una excepción si la respuesta no es exitosa.



const users = await response.json();
response.json(): Método que convierte el cuerpo de la respuesta en un objeto JSON.
Este método devuelve una promesa que se resuelve con el cuerpo de la respuesta convertido en JSON.



catch (error) {
    console.error('There was a problem with the fetch operation:', error);
}
console.error: Imprime un mensaje de error en la consola si ocurre una excepción durante la ejecución del bloque try.

*/