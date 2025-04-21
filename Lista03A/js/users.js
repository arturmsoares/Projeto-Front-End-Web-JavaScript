

const url = 'https://raw.githubusercontent.com/arturmsoares/lista03a/main/aluno.json';

export function getNomeHttpResquest() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            const aluno = JSON.parse(xhttp.responseText); // pega o json e transforma em objeto
            // const aluno = (xhttp.responseText); // pega o json como uma strin/g
            document.getElementById("txtAluno").innerHTML = aluno.nome + ", " + aluno.idade;
        }
    };    

    xhttp.open("GET", url, true);
    xhttp.send();
}

export function getNomeFetch() {
    fetch(url)
        .then(response => response.json())
        .then(aluno => {
            document.getElementById("txtAluno2").innerHTML = aluno.nome + ", " + aluno.idade;
        })
}


