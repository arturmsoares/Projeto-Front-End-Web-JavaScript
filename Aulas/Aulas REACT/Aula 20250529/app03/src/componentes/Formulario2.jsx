import React, {useState} from "react";

function Formulario2() {
    const [nome, setNome] = useState("informe acima um nome válido");
    const [email, setEmail] = useState("informe acima um email válido");

    return (
        <>
            <h1>Formulário 2</h1>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={(e) =>setNome(e.target.value)}/>

                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>

            </form>

            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <hr />
        </>
    );
}

    export default Formulario2;