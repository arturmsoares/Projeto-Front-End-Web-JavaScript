import ajax from './ajax.js';

window.addEventListener("DOMContentLoaded", () => {
  const opcaoSelecionada = document.getElementById("filtro");

  opcaoSelecionada.addEventListener("change", (evento) => {
    const opcao = evento.target.value;
    ajax.filtrar(opcao);
  });
});
