import React, { useState } from 'react';

function Formulario1() {
  //nome é uma variável de estado que irá controlar o conteúdo do "input:text"
  const[nome, setNome] = useState(""); //useState é um hook que permite adicionar o estado a um componente funcional


  return (
    <>
        <h1>Formulário 1</h1>
        <form action="">

        <label htmlFor="">Nome:</label>
        <input type="text" onChange={(e) =>setNome(e.target.value)}/>
        </form>
    <p>{nome}</p>
    <hr />
    </>

  );
}

export default Formulario1;