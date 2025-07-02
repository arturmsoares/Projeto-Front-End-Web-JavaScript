import Descricao from "../Descrição"
import Formulario from "./Formulario";
import style from './SecaoDois.module.css';
import Ilustracao from "../Ilustracao"


export default function SecaoDois() {
    return (
        <section className={style.secaoDois}>
            <div className={style.imagem}>

            <Ilustracao imagem = "foto2.jpg" paragrafo="Melhor Serviço de Marketing Digital"/>

            </div>

            <div className={style.texto}>
                < Descricao subtitulo="Sua marca na vitrine"
                    paragrafo="Com criatividade, estratégia e um atendimento personalizado, meu
                objetivo é conectar pessoas e negócios de forma autêntica e eficaz. Então destaque o melhor da sua marca: alcance, engajamento e conexão no Instagram" />

                <Formulario/>
            </div>

        </section>
    )
}