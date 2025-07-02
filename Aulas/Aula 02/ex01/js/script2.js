window.addEventListener("DOMContentLoaded", function(){

   var vet = [10, 21, 30, 43];
   
//    const imprimirVet = (vet) =>{
//         for(var i = 0; i< vet.length; i++)
//             imprimir(vet[i]);
//    }

//    const imprimir = (elemento) =>{
//         console.log(elemento);
//    }

//    imprimirVet(vet);




//    vet.forEach(imprimir);

   
//    const imprimir = (elemento) =>{
//         console.log(elemento);
//    }


//    vet.forEach(elemento => console.log(elemento));

    // parImpar= x =>{
    //     (x%2==0)?console.log("par"):console.log("impar");
    // }

    // parImpar(20);
    // parImpar(21);

    // vet.forEach(parImpar);
    
    
    vet.forEach(x => (x%2==0)?console.log("par"):console.log("impar"));


})