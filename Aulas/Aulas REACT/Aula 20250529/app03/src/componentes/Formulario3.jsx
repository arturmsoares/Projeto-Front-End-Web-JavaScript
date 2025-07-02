import React, { useState } from "react";

function Formulario3() {
    //nome é uma variável de estado que irá controlar o conteúdo do "input:text"
    const [nomeIn, setNomeIn] = useState(""); //useState é um hook que permite adicionar o estado a um componente funcional
    const [nomeOut, setNomeOut] = useState("");

    function mostrarValor() {
        //função que irá atribuir o valor do input ao parágrafo
        setNomeOut(nomeIn);
    }

    return (
        <>
            <h1>Formulario3:</h1>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={(e) => setNomeIn(e.target.value)} />
                <input type="button" value="Mostrar" onClick={mostrarValor} />
            </form>
            <p>Nome:{nomeOut}</p>

            <hr />

        </>
    );
}

export default Formulario3;