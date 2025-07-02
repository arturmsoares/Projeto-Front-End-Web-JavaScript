window.addEventListener("DOMContentLoaded", function(){

   var usuarios =[
    {nome: "Ana", idade:18, genero:'F', salario: 1000},
    {nome: "Joao", idade:20, genero:'M', salario: 3000},
    {nome: "Cesar", idade:33, genero:'M', salario: 1900},
    {nome: "Maria", idade:12, genero:'F', salario: 7000},
    {nome: "Ze", idade:17, genero:'M', salario: 2400}
    ];

    
    console.log("Exibir o nome e idade de todas as pessoas maiores de idade:");

        const maioridade = usuarios =>{
            return usuarios.filter(elemento => elemento.idade >=18)
        }

        var maiores = maioridade (usuarios);

        maiores.forEach(elemento => console.log(`nome: ${elemento.nome}, idade: ${elemento.idade}`));
        
        //Outra possibilidade:
        // usuarios.filter(usuario => usuario.idade >= 18).forEach(maior => console.log(`nome: ${maior.nome}, idade: ${maior.idade}`));

    
    console.log("Exibir os nomes de todas as pessoas do sexo masculino:");
      
        usuarios.filter(elemento => elemento.genero === 'M').forEach(elemento => console.log(elemento.nome));
      
    console.log("Exibir os dados da pessoa com maior salario:");
        
        const maiorSalario = usuarios.reduce((maior, elemento) => {return elemento.salario > maior.salario ? elemento : maior}, usuarios[0]);

        console.log(maiorSalario);

    console.log("Há alguma mulher que ganha acima de 5000,00?");
        
      var existe = usuarios.some(usuarios => usuarios.genero === 'F' && usuarios.salario>5000);
      console.log(existe?"sim":"não");

    console.log("Média dos salarios dos homes e das mulheres:");
        
      const mediaSalarios = (usuarios, genero) => {
        const subGrupo = usuarios.filter(usuarios => usuarios.genero === genero);
        const totalSalarios = subGrupo.reduce((total, usuarios) => total + usuarios.salario, 0);
        return subGrupo.length ? totalSalarios / subGrupo.length : 0;
      };
    
      var mediaHomens = mediaSalarios(usuarios, 'M');
      var mediaMulheres = mediaSalarios(usuarios, 'F');
    
      console.log(`Média dos salários dos homens: R$ ${(mediaHomens).toFixed(2)}`);
      console.log(`Média dos salários das mulheres: R$ ${mediaMulheres}`);

    //
 

    
})