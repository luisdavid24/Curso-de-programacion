const apiRick= async (pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#Resultado");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement('div');
        divItem.innerHTML=`
            <div class="card">
                <img src="${item.image}" alt="Imagen de ejemplo" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">${item.name}</h2>
                    <p class="card-text">Estatus:  ${item.status}</p>
                    <p class="card-text">Especie:  ${item.species}</p>
                    <p class="card-text">Ubicacion:  ${item.location.name}</p>
                    <button class="btn" 
                        data-name="${item.name}" 
                        data-status="${item.status}" 
                        data-species="${item.species}" 
                        data-location="${item.location.name}" 
                        data-image="${item.image}" 
                        onClick='guardarCard(event)'>Guardar</button>
                </div>
            </div>
        `;
        divRes.appendChild(divItem);
        
    })
}
apiRick(1);


function guardarCard(event) {
    const button = event.target;
    const item = {
        name: button.getAttribute('data-name'),
        status: button.getAttribute('data-status'),
        species: button.getAttribute('data-species'),
        location: button.getAttribute('data-location'),
        image: button.getAttribute('data-image')
    };
    console.log("Guardando item:", item);
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.push(item);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    alert(`${item.name} ha sido guardado!`);
}

document.getElementById('mostrarItemsBtn').addEventListener('click', mostrarItems);

function mostrarItems() {
    limpiar();
    const itemsContainer = document.getElementById('itemsGuardados');
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    if (savedItems.length === 0) {
        itemsContainer.innerHTML = '<p>No hay items guardados.</p>';
        return;
    }

    savedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <div class="card cardLocal">
                <img src="${item.image}" alt="Imagen de ejemplo" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">${item.name}</h2>
                    <p class="card-text">Estatus:  ${item.status}</p>
                    <p class="card-text">Especie:  ${item.species}</p>
                    <p class="card-text">Ubicacion:  ${item.location.name}</p>
                    <button class="btn btnLocal" 
                        data-name="${item.name}" 
                        data-status="${item.status}" 
                        data-species="${item.species}" 
                        data-location="${item.location.name}" 
                        data-image="${item.image}" 
                        onClick='eliminarItem(event)'>Eliminar</button>
                </div>
            </div>
        `;

        itemsContainer.appendChild(itemElement);
    });
}

document.getElementById('limpiarStorageBtn').addEventListener('click', limpiarStorage);

function limpiar(){
    const itemsContainer = document.getElementById('itemsGuardados');
    itemsContainer.innerHTML = ''; 
}

function limpiarStorage() {
    localStorage.removeItem('savedItems');
    alert('Todos los items guardados han sido eliminados.');
    document.getElementById('itemsGuardados').innerHTML = '';
}


document.getElementById('limpiarBtn').addEventListener('click', limpiar);



function eliminarItem(event) {
    const button = event.target;
    let nameEliminar=button.getAttribute('data-name');
    console.log(nameEliminar);
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const updatedItems = savedItems.filter(item => item.name !== nameEliminar);
    localStorage.setItem('savedItems', JSON.stringify(updatedItems));
    alert(`${nameEliminar} ha sido eliminado!`);
    mostrarItems(); 
}