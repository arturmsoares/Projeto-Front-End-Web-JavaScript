window.addEventListener("DOMContentLoaded", function(){

  var usuarios =[
   {nome: "Ana", idade:18, genero:'F', salario: 1000},
   {nome: "Joao", idade:20, genero:'M', salario: 3000},
   {nome: "Cesar", idade:33, genero:'M', salario: 1900},
   {nome: "Maria", idade:12, genero:'F', salario: 7000},
   {nome: "Ze", idade:17, genero:'M', salario: 2400}
   ];


  console.log("Usuários:", usuarios);
  document.write("<p><strong>Usuários:</strong></p>");
  usuarios.forEach(usuario => {
    document.write(`<p>${JSON.stringify(usuario)}</p>`);
  });
  
  console.log("A - Exibir o nome e idade de todas as pessoas maiores de idade:");
  document.write("<p><strong>A - Exibir o nome e idade de todas as pessoas maiores de idade:</strong></p>");

  const maioridade = usuarios => {
      return usuarios.filter(elemento => elemento.idade >=18)
  }

  var maiores = maioridade (usuarios);

  maiores.forEach(elemento => {
      console.log(`nome: ${elemento.nome}, idade: ${elemento.idade}`);
      document.write(`<p>nome: ${elemento.nome}, idade: ${elemento.idade}</p>`);
  });

  console.log("B - Exibir os nomes de todas as pessoas do sexo masculino:");
  document.write("<p><strong>B - Exibir os nomes de todas as pessoas do sexo masculino:</strong></p>");

  usuarios.filter(elemento => elemento.genero === 'M').forEach(elemento => {
      console.log(elemento.nome);
      document.write(`<p>${elemento.nome}</p>`);
  });

  console.log("C - Exibir os dados da pessoa com maior salario:");
  document.write("<p><strong>C - Exibir os dados da pessoa com maior salário:</strong></p>");

  const maiorSalario = usuarios.reduce((maior, elemento) => {
      return elemento.salario > maior.salario ? elemento : maior
  }, usuarios[0]);

  console.log(maiorSalario);
  document.write(`<p>${JSON.stringify(maiorSalario)}</p>`);

  console.log("D - Há alguma mulher que ganha acima de 5000,00?");
  document.write("<p><strong>D - Há alguma mulher que ganha acima de 5000,00?</strong></p>");

  var existe = usuarios.some(usuarios => usuarios.genero === 'F' && usuarios.salario > 5000);
  console.log(existe ? "sim" : "não");
  document.write(`<p>${existe ? "sim" : "não"}</p>`);

  console.log("E - Média dos salários dos homens e das mulheres:");
  document.write("<p><strong>E - Média dos salários dos homens e das mulheres:</strong></p>");

  const mediaSalarios = (usuarios, genero) => {
      const subGrupo = usuarios.filter(usuarios => usuarios.genero === genero);
      const totalSalarios = subGrupo.reduce((total, usuarios) => total + usuarios.salario, 0);
      return subGrupo.length ? totalSalarios / subGrupo.length : 0;
  };

  var mediaHomens = mediaSalarios(usuarios, 'M');
  var mediaMulheres = mediaSalarios(usuarios, 'F');

  console.log(`Média dos salários dos homens: R$ ${(mediaHomens).toFixed(2)}`);
  console.log(`Média dos salários das mulheres: R$ ${(mediaMulheres).toFixed(2)}`);

  document.write(`<p>Média dos salários dos homens: R$ ${(mediaHomens).toFixed(2)}</p>`);
  document.write(`<p>Média dos salários das mulheres: R$ ${(mediaMulheres).toFixed(2)}</p>`);

});
