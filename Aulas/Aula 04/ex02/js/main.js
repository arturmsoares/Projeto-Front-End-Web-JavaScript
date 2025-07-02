window.addEventListener("DOMContentLoaded", () =>{
    
    // var vet = [10,20,30];

    // var a;
    // var b;
    // var c;

    // // console.log(a, b, c);

    // //Como realizar a atribuição acima 
    // // utilizando o recurso SPREAD no JS?
    // [a, b, c] = [...vet];

    //Exemplos de Spread com Arrays
    var vet1 = [10,20,30];
    var vet2 = [40,50,60];
    var vet3= [...vet1,...vet2];
    console.log(vet3);

    var x = Math.max(10, 78, 54);
    console.log(x);

    var vet4 = [16,12,15,23,45,5,8];

    var y  = Math.max(...vet4);
    console.log(y);

    //Exemplos de Spread com Objetos

    const user1 = {nome: "Artur", idade: 25};
    
    // const user2 = {nome: "Artur", idade: 25};
    const user2 = {...user1};

    console.log(user1);
    console.log(user2);

    const user3 = {...user1, sexo:"M"};
    console.log(user3);

    const user4 = {...user1, idade:20};
    console.log(user4);



});