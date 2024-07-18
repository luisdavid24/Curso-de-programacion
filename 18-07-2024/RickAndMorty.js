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
