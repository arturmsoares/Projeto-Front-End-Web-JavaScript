import React from "react";


function Apresentacao(props) {
    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </>
    );
}

export default Apresentacao;