import React, { useState } from 'react';
import style from "./Formulario.module.css";

function Formulario() {
    const [email, setEmail] = useState("");

    function mostrarInfo(e) {
        if (!email.trim()) alert("Email em branco. Favor informá-lo");
        else alert("Email informado. OK!");
    }

    return (
        <>
            <form action="" className={style.forms}>

                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className={style.email}/>
                <input type="button" value="Enviar" onClick={mostrarInfo} className={style.button} />

            </form>
            <p>{email}</p>
        </>

    );
}

export default Formulario;

