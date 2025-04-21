const url = "https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json";

const fetchAlunos = async () => {
  const req = await fetch(url);
  const response = await req.json();
  return response;
};

const filtrar = async (tipo) => {
  const alunos = await fetchAlunos(); //chama a função anterior para carregar os alunos da URL.
  
  alunos.forEach(aluno => {
    aluno.notaTotal = aluno.notaBim1 + aluno.notaBim2;
  });

  const respostaDiv = document.getElementById("resposta");
  respostaDiv.innerHTML = "";

  let resultado;

  switch (tipo) {
    case "todos":
      resultado = alunos.map(aluno => {
        return `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaTotal}</p>`;
      });
      break;

    case "homens":
      resultado = alunos
        .filter(aluno => aluno.sexo === "M")
        .map(aluno => `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaTotal}</p>`);
      break;

    case "mulheres":
      resultado = alunos
      .filter(aluno => aluno.sexo === "F")
      .map(aluno => `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaTotal}</p>`);
    break;

    case "aprovados":
      resultado = alunos
        .filter(aluno => aluno.notaTotal >= 60)
        .map(aluno => `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaTotal}</p>`);
      break;

    case "reprovados":
      resultado = alunos
        .filter(aluno => aluno.notaTotal < 60)
        .map(aluno => `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaTotal}</p>`);
      break;

    case "todosAprovados":
      const todosAprovados = alunos.every(aluno => aluno.notaTotal >= 60);
      resultado = [`<p>${todosAprovados ? "Sim" : "Não"}</p>`];
      break;

    case "notaMedia":
      const media = alunos.reduce((total, aluno) => total + aluno.notaTotal, 0) / alunos.length;
      resultado = [`<p>Nota Média: ${media.toFixed(2)}</p>`];
      break;

    default:
      resultado = [`<p>Selecione uma opção válida.</p>`];
  }

  resultado.forEach(r => respostaDiv.innerHTML += r); //transforma cada item do array de strings em um elemento html
};

export default {
  filtrar
};
