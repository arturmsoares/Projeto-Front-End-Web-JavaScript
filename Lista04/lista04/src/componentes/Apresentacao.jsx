import style from './Apresentacao.module.css';

export default function Apresentacao({titulo, paragrafo}) {
    return (
        <div className={style.apresentacao}>
            <h2>{titulo}</h2>
            <p>{paragrafo}</p>
        </div>
    )
}