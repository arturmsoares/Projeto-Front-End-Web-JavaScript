import React, { useState } from 'react';

function Formulario4() {

    const [form, setForm] = useState({
        nome: "",
        email: ""
    });

    const [output, setOutput] = useState(null)


    function updateForm(e) {
        // Atualiza o estado do formulário com base no input
        setForm({
            ...form, //spread operator para manter os outros campos
            [e.target.name]: e.target.value // usa o nome do input como chave (nome ou email)
            //o target serve para acessar o elemento que disparou o evento
        });

    }

    function mostrarInfo(e) {

        const { nome, email } = form; // Desestrutura o objeto form para obter os valores de nome e email

        if (!nome.trim() || !email.trim()) alert("Preencha os campos corretamente!");
        else setOutput({ ...form }); // atualiza o estado de output com os valores do formulário
    }



    return (
        <>
            <h1>Formulário 4</h1>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" onChange={(e) => updateForm(e)} />

                <label htmlFor="">Email:</label>
                <input type="email" name="email" onChange={(e) => updateForm(e)} />
                <input type="button" value="Mostrar" onClick={mostrarInfo} />

            </form>

            {
                output && (
                    <>
                        <p>Nome: {output.nome}</p>
                        <p>Email: {output.email}</p>
                    </>
                )}

            <hr />
        </>
    );
}

export default Formulario4;