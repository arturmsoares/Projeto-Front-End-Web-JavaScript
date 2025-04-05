window.addEventListener("DOMContentLoaded", function(){
        

    const vetorTexto = document.getElementById("vetor").textContent; // "[5, 18,21,31,40, 45, 70];"
    const vetAges = JSON.parse(vetorTexto.replace(";", ""));

    //1 - soma das idades
        
        const somaIdades = vetAges.reduce((total, elemento) => total + elemento, 0);
        var soma = this.document.getElementById("soma");
        soma.innerHTML = somaIdades;

    //2 - média das idades

        const mediaIdades = vetAges.reduce((soma, idade) => soma + idade, 0) / vetAges.length;

        var media = this.document.getElementById("media");
        media.innerHTML = mediaIdades.toFixed(2);

    
    //3 - a maior idades

        const maiorIdade = vetAges.reduce((maior, atual) => atual > maior ? atual : maior, 0);

        var maior = this.document.getElementById("maior");
        maior.innerHTML = maiorIdade;

    //4 - idades impares

        const idadesImpares = vetAges.filter(idade => idade % 2 ==! 0);

        var impares = this.document.getElementById("impares");
        impares.innerHTML = idadesImpares;


    //5 - Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false

        const todosMaiores = vetAges.every(idade => idade >= 18);
        
        var maiores = this.document.getElementById("maiores");
        maiores.innerHTML = todosMaiores;


    //6 - Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
        const idadesMaiorQue = (valor) => {
            return vetAges.every(idade => idade >= valor);
        }
        
        function verificarIdades() {
            const valor = Number(document.getElementById("valor").value);
            const resultado = idadesMaiorQue(valor);
            const maioresF = document.getElementById("maioresF");
            maioresF.innerHTML = resultado;
        }
        //registro do evento de clique via JavaScript
        // já que a função não está disponível globalmente (fora do DOMcontentLoaded)
        document.getElementById("btnVerificaIdades").addEventListener("click", verificarIdades);


    // 7 - Exibir todas as idades maiores ou iguais a determinada idade

        const idadesMaioresOuIguais = (valorG) => {
            return vetAges.filter(idade => idade>= valorG);
        }

        function verificaMaioresG() {
            const valorG = Number(document.getElementById("valorG").value);
            const resultado = idadesMaioresOuIguais(valorG);
            const maioresG = document.getElementById("maioresG");
            maioresG.innerHTML = resultado;
        }

        document.getElementById("btnVerificaG").addEventListener("click", verificaMaioresG);
    
    // 8 - A média das idades das pessoas com idades maiores ou iguais a determinada idade

    const mediaIdMaioresOuIguais = (valorH) => {
        const maioresOuIguais = vetAges.filter(idade => idade >= valorH);
        return maioresOuIguais.reduce((soma, idade) => soma + idade, 0) / maioresOuIguais.length;
    }

    function verificaMediaH() {
        const valorH = Number(document.getElementById("valorH").value);
        const resultado = mediaIdMaioresOuIguais(valorH);
        const mediaH = document.getElementById("mediaH");
        mediaH.innerHTML = resultado;
    }

    document.getElementById("btnVerificaH").addEventListener("click", verificaMediaH);


})