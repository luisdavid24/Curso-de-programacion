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


