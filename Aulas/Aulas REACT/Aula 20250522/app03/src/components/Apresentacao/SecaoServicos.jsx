import Apresentacao from "./Apresentacao";
import Box1 from "./Box1";

function SecaoServicos(){
    return(
        <section>
            <Apresentacao titulo = "Servicos e Informações" subtitulo = "Selecione assunto desejado" />
            <Box1 texto = "Eleições do Conselho Superior" />
            <Box1 texto = "Curso Superiores" />
        </section>
    );
}

export default SecaoServicos;