import style from './Boxes.module.css'

export default function Boxes() {

  const boxes = [
      { texto: "Plano de Desenvolvimento Institucional" },
      { texto: "Pesquisa Pública Processos IFTM" },
      { texto: "Licitações e Contratos" },
      { texto: "Receitas e Despesas" },
      { texto: "Dados abertos" },
      { texto: "Transparência e Prestaçãod de Contas" },
      { texto: "Servidores" },
      { texto: "Perguntas Frequentes" }
  ]

  function showBoxes() {
    return (
      <>
        {boxes.map(box => <div>{box.texto}</div>)}
      </>
    );
  }

  return (
    <div className={style.container}>
        {showBoxes()}
    </div>
  );
}
