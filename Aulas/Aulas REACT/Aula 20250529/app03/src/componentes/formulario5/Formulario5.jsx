import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Formulario5() {
    const [form, setForm] = useState({
        nome: "",
        email: ""
    });

    const [msgEnvio, setMsgEnvio] = useState("");

    function updateForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function mostrarInfo() {
        const { nome, email } = form;

        if (!nome.trim() || !email.trim()) {
            alert("Preencha os campos corretamente!");
            return;
        }

        // Atualiza mensagem de status enquanto envia o email
        setMsgEnvio("Aguarde um instante! Enviando ...");

        const templateParams = {
            from_name: nome, // Utiliza o valor do estado form.nome
            from_email: email, // Utiliza o valor do estado form.email
            message: "Email do aplicativo"
        };

        emailjs
            .send("service_chw2v27", "template_js1wh1k", templateParams, "Afbrz42Z_mZPpS4Q6")
            .then(
                function (response) {
                    setMsgEnvio("Email enviado com sucesso!");
                },
                function (error) {
                    setMsgEnvio("ERRO ao enviar email!");
                }
            );
    }

    return (
        <>
            <h1>Formulário 5</h1>
            <form action="">
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    onChange={updateForm}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={updateForm}
                />
                <input
                    type="button"
                    value="Mostrar"
                    onClick={mostrarInfo}
                />
            </form>
            <p>{msgEnvio}</p>
            <hr />
        </>
    );
}

export default Formulario5;
