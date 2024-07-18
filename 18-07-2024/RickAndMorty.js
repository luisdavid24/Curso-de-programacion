const apiRick= async (pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    
}
apiRick(1);


