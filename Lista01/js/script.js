window.addEventListener("DOMContentLoaded", function(){
        
    //1

        sumAges = (vet) => {
            sum = 0;
            for (i=0; i<vet.length; i++) sum+=vet[i];
            return sum;
            }
            vetAges = [5, 18,21,31,40, 45, 70];
            document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);
            
        
        //2a - Média das Idades

        const mediaIdades = (vet) => {
            var soma = 0;

            for (var i =0; i <vet.length; i++)
                soma = soma + vet[i];

            return soma/vet.length;
        } 

        document.write(`<p>Média das Idades =${mediaIdades(vetAges).toFixed(2)}</p>`);

        //2b - Maior Idade

        const maiorIdade = vet =>{
            var maior = vet[0];
        
            for (var i =1; i <vet.length; i++)
                if( vet[i] >= maior) maior = vet[i];
            return maior;

        }

        document.write(`<p>Maior Idade =${maiorIdade(vetAges)}</p>`);

        // c) As idades ímpares
        const idadesImpares = (vet) => {
            var vetImpar = []
            for (var i =0; i <vet.length; i++)
                if( vet[i] % 2 !=0) vetImpar.push(vet[i]);
                return vetImpar;
        }

        document.write(`<p>Idades ímpares: ${idadesImpares(vetAges).join(", ")}</p>`);

    
        // d) Verificar se todos são maiores de idade (idade >= 18)
        const todosMaiores = (vet) => {
            var teste = "sim";
            for (var i =0; i <vet.length; i++){
                if( vet[i] < 18) teste = "não";
                break;
            }
            return teste;
        }
        
        document.write(`<p>Todos são maiores de idade? ${todosMaiores(vetAges)}</p>`);

    
        // e) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
        
        var valorUsuario = parseInt(prompt("Digite um valor para comparar com as idades:"));
        
        const todasIdadesMaioresQue = (vet, valor) => {
            var testeNovo = "sim";
            for (var i =0; i <vet.length; i++){
                if( vet[i] < valor) testeNovo = "não";
                break;
            }
            return testeNovo;
        };


        document.write(`<p>Todas as idades são maiores ou iguais a ${valorUsuario}?: ${todasIdadesMaioresQue(vetAges, valorUsuario)}</p>`);

    
        // f) Exibir todas as idades maiores ou iguais a determinada idade
        
        const idadesMaioresQue = (vet, valor) => {
            var vetMaiores = [];
            for (var i = 0; i < vet.length; i++) {
                if (vet[i] >= valor) {
                    vetMaiores.push(vet[i]);
                }
            }
            return vetMaiores;
        };
        
        document.write(`<p>Idades maiores ou iguais a ${valorUsuario}: ${idadesMaioresQue(vetAges, valorUsuario).join(", ")}</p>`);        
        
        // g) A média das idades das pessoas com idades maiores ou iguais a determinada idade
        const mediaIdadesMaioresQue = (vet, valor) => {
            let soma = 0;
            let contador = 0;
            for (let i = 0; i < vet.length; i++) {
                if (vet[i] >= valor) {
                    soma += vet[i];
                    contador++;
                }
            }
            return contador > 0 ? soma / contador : 0;
        };
        
        document.write(`<p>Média das idades maiores ou iguais a ${valorUsuario}: ${mediaIdadesMaioresQue(vetAges, valorUsuario).toFixed(2)}</p>`);
})