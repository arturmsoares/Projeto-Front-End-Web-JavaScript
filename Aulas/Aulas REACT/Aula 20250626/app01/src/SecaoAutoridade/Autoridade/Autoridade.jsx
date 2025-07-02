export default  function Autoridade ({ imagem, texto }) {
  return (
    <div>
      <img src={imagem} alt="Autoridades" />
      <p>{texto}</p>
    </div>
  );
}