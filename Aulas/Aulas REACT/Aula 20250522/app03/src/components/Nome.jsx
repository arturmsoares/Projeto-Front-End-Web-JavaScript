// src/components/Nome.jsx

import React from "react";
// import HelloWorld from "./HelloWorld.jsx"; // Removida esta linha, pois Nome não usa HelloWorld

function Nome() {
  return (
    // Não precisa de um wrapper extra se for só um parágrafo.
    // Se fosse mais de um elemento, usaria <></> ou <div></div>
    <p>Artur Machado</p>
  );
}

export default Nome;