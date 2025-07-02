import Autoridade from './Autoridade/Autoridade.jsx';
import autoridades from './descricoes.jsx';

function SecaoAutoridade() {
    return (
    <section>
        <Autoridade
            imagem={autoridades.imagem}
            texto={autoridades.texto}
            />
    </section>
  );
}

export default SecaoAutoridade;