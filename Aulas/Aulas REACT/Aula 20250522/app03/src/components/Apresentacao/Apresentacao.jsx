// function Apresentacao(props) {
//   return (
//     <>
//         <h1>{props.titulo}</h1>
//         <p>{props.subtitulo}</p>
//     </>
//   );
// }

function Apresentacao({ titulo, subtitulo }) {
  return (
    <>
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
    </>
  );
}

export default Apresentacao;