import style from './Boxes.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Boxes(){

    const boxes = [
        { texto: "ELEIÇÕES DO CONSELHO SUPERIOR", icone: "fa-solid fa-check-to-slot text-primary-lighten-01" },
        { texto: "ESTUDE NO IFTM", icone: "fas fa-user-graduate text-primary-lighten-01" },
        { texto: "EDITAIS", icone: "fas fa-file-alt text-primary-lighten-01" },
    ];
    
function showBoxes() {
    return (
        <>
            {boxes.map(box => (
                // cada elemento em uma lista deve ter uma "key" única
                // box.icone é uma classe do Font Awesome, que já está importada - desenha o icone
                // style.icone é a classe complementar do CSS para estilizar o ícone
                <div key={box.texto}> 
                    <i className={`${box.icone} ${style.icone}`}></i>
                    <p>{box.texto}</p>
                </div>
            ))}
        </>
    );
}

    return (
        <div className={style.container}>
            {showBoxes()}
        </div>
    );
}