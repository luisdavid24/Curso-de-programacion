const listUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `

        <div class="card">
        
            <div class="card-header">
                <h2>${user.name}</h2>
            </div>
            <div class="card-body">
                <p><strong>ID:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.name}</p>
                <p><strong>Email:</strong> <a href=${user.email}>${user.email}</a></p>
                <p><strong>Website:</strong> <a href=${user.website} target="_blank">${user.website}</a></p>
                <p>
                    <a href="#" class="btn btn-1">Agregar</a>
                </p>
                
                </div>
        </div>
        `;
    });
     document.getElementById("tableBody_Users").innerHTML = tableBody;
    
};

window.addEventListener("load", function () {
    listUsers();
});


let numeros = [1, 2, 3, 4, 5];// Encontrar el primer número mayor que 3let mayorQueTres =numeros.find(function(numero) {    return numero > 3;});console.log(mayorQueTres); // Imprime 4

let nuevo=numeros.find(function(numero) {  
      return numero < 6;});
console.log(nuevo); // Imprime 4



