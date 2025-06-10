import Apresentacao from '../Apresentacao';
import Boxes from './Boxes/Boxes';
import style from './SecaoServicos.module.css';

function Servicos() {
    return (
        <section className={style.secaoServicos}>
            <Apresentacao titulo="Serviços e Informações" paragrafo="Selecione o assunto desejado"/>
            <Boxes/>
        </section>
    );
}

export default Servicos;