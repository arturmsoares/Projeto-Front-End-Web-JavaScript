window.addEventListener("DOMContentLoaded", () => {

    const maiorValor = (a, b) => a > b ? a : b;

    console.log(maiorValor(10,20));
    console.log(maiorValor(100,2));

    // ex 02 -  Crie uma arrow function que dado um vet e um valor
    // retorma um vetor contendo todos os valores do vetor maior ou igual a valor.
    // em seguida, exiba todos os valores no console, utilizando forEach;
    
    const vet = [10, 5, 78, 21, 33, 15, 80];
    const ref = 20;
    
    const maioresRef = (vet, ref) =>{
        var vetMaiores = [];
        for(var i = 0; i < vet.length; i++){
            if(vet[i]>= ref){
                vetMaiores.push(vet[i]);
            }
        }
        return vetMaiores;
    }

    const imprimirVet = (vet) => {
        vet.forEach((elemento, indice) => console.log(indice + " - "+ elemento));
    }

    imprimirVet(maioresRef(vet, ref));
    console.log(vet.map(elemento => elemento*2));

    console.log(vet.filter(elemento => elemento >= 15));
    console.log(vet.every(elemento => elemento >= 15)); //todos os elementos são maiores ou iguais a 15; true or false;
    console.log(vet.some(elemento => elemento >= 15)); //pelo menos um elemento é maior ou igual a 15; true or false;
    console.log(vet.reduce((total, elemento) => total + elemento, 0));
})