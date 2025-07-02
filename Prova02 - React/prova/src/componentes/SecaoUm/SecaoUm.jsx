import Descricao from "../Descrição"
import style from './SecaoUm.module.css';
import Ilustracao from "../Ilustracao"

export default function SecaoUm() {
    return (
        <section className={style.secaoUm}>
            <div className={style.texto}>
                < Descricao subtitulo="Desde 2018, impulsionando marcas, produtos e serviços em
                    Uberlândia."
                    paragrafo="Sou Especialista em Marketing Digital, apaixonada por histórias de
                            vida e por criar conexões que transformam. Acredito no poder de
                            trabalhar com propósito, ao lado de pessoas honestas e dedicadas,
                            que buscam conquistar seu espaço com amor pelo que fazem." />

                    <input type="button" value="Seja um Parceiro"  className={style.button}/>

            </div>

            <div className={style.imagem}>

            <Ilustracao imagem = "foto2.jpg" paragrafo="Erica - Vitrine Uberlandia"/>

            </div>

        </section>
    )
}