
export default function Ilustracao({imagem, paragrafo}) {
    return (
        <>
            <img src={imagem} alt="" width="300px" />
            <p>{paragrafo}</p>
        </>
    )
}