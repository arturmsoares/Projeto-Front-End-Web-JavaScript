const getCats = async () => {

    try{
        const response  =  await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await response.json();
        console.log(data);
        // console.log(data[0].url);
        return data; // vetor contendo os gatos
    }
    catch(error){
        console.log(error);
        return []; // vetor vazio: erro
    }

}

export default getCats;