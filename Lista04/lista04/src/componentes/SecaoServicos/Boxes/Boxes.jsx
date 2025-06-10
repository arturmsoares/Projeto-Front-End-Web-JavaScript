import style from './Boxes.module.css';

export default function Boxes(){

    const boxes = [
        { texto:"ELEIÇÕES DO CONSELHO SUPERIOR"},
        { texto:"ESTUDE NO IFTM"},
        { texto:"EDITAIS"},
    ]

    function showBoxes(){
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