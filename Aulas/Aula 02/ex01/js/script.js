window.addEventListener("DOMContentLoaded", function(){

    // function showMsg(){
    //     alert("Hello, World!")
    // }

    // showMsg()   ;

    // 1) função declarativa    
    function soma(x, y){
        return x +y
    }

    console.log(soma(10, 20));

    //2) função literal
    const s = function soma(x, y){
        return x +y
    }

    console.log(s(20,30));

    //3) anonima
    const s2 = function (x, y){
        return x +y
    }

    console.log(s2(30,30));


    //4)arrow function
    const s3 =  (x, y) =>{
        return x +y
    }

    console.log(s3(40,30));

    const s4 = () =>  alert("Hello, World, Arrow!")


    s4();


    const exibir = nome => alert(nome); //quando o parametro (nome) é único, não precisa de parenteses
                                        //quando há somente 1 instrução, não precisa de chaves;

    exibir("Artur");
    exibir(10);
    exibir("Projeto Front End JavaSript");



    const somaEhPar = (x, y) => ((x+y)%2 == 0);

    console.log(somaEhPar(10,13)); //false
    console.log(somaEhPar(22,46)); //true



    //arrow function para calcular a média das idades;

    //lista1 - 2a

    const vet1 = [1, 2, 3, 4];
    const vet2 = [17, 82, 94, 14];

    const mediaIdades = (vet) => {
        var soma = 0;

        for (var i =0; i <vet.length; i++)
            soma = soma + vet[i];

        return soma/vet.length;
    } 


    console.log(mediaIdades(vet1));
    console.log(mediaIdades(vet2));

    //lista1 - 2b

    const maiorIdade = vet =>{
        var maior = vet[0];
       
        for (var i =1; i <vet.length; i++)
            if( vet[i] >= maior) maior = vet[i];
        return maior;

    }

    console.log(maiorIdade(vet1));
    console.log(maiorIdade(vet2));







})