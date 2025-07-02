import getCats from "./thecatapi.js";

window.addEventListener("DOMContentLoaded", () => {

    // const gatos = getCats();
    // console.log(gatos);
    document.getElementById("btnShowCats").addEventListener("click", showCats);

});



const showCats = async () => {
    showMsgAlerta("Processando, aguarde...");
    const vetCats = await getCats();//aguarda a função assincrona ser executada 
    // para inseri-la em uma variável


    if (vetCats.length > 0) {
        const catPainel = document.getElementById("catPainel");
        vetCats.forEach(gato =>{
            const img = document.createElement("img");
            img.src = gato.url;
            img.className = "cat";
            img.alt = "Gatinho";
            catPainel.appendChild(img);
        });

        showMsgAlerta("");
        console.log

    }
    else {
        showMsgAlerta("Erro no carregamento dos gatos");
    }

}

const showMsgAlerta = (msg) =>{
    document.getElementById("msgAlerta").innerHTML = msg;
}