import React, { useState } from "react";

function FormularioBonus() {
    //nome é uma variável de estado que irá controlar o conteúdo do "input:text"
    const [nomeIn, setNomeIn] = useState(""); //useState é um hook que permite adicionar o estado a um componente funcional
    const [nomeOut, setNomeOut] = useState("");
    const [emailIn, setEmailIn] = useState("");
    const [emailOut, setEmailOut] = useState("");
    const [foneIn, setFoneIn] = useState("");
    const [foneOut, setFoneOut] = useState("");


    function mostrarValor() {
        //função que irá atribuir o valor do input ao parágrafo
        setNomeOut(nomeIn);
        setEmailOut(emailIn);
        setFoneOut(foneIn);
    }

    return (
        <>
            <h1>Formulario Bonus:</h1>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={(e) => setNomeIn(e.target.value)} />
                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e) => setEmailIn(e.target.value)}/>
                <label htmlFor="">Telefone:</label>
                <input type="tel" onChange={(e) => setFoneIn(e.target.value)}/>
                <input type="button" value="Mostrar" onClick={mostrarValor} />
            </form>
            <p>Nome:{nomeOut}</p>
            <p>Email:{emailOut}</p>
            <p>Telefone:{foneOut}</p>

            <hr />

        </>
    );
}

export default FormularioBonus;