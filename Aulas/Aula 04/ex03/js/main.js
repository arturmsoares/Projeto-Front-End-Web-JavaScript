
//Destructuring em JavaScript ou Desestruturação

window.addEventListener("DOMContentLoaded", () =>{
    

    const vet = [10,20,30];

    const [a, b, c] = vet;

    const user1 = {nome: "Artur", idade: 25};

    const {nome: nomeUser} = user1; 
    // dois pontos para renomear;
    console.log(nomeUser);

    


});