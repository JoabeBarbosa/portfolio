import "./card.css"
//---
interface CardProps {
    prato_title: string,
    prato_image: string,
    prato_price: number
}
//---
export function Card({prato_title,prato_image,prato_price} : CardProps){

    //---
    return (
        <div className="card">
            <img src={prato_image} alt="Imagem" />
            <h2>{prato_title}</h2>
            <p><b>Valor: {prato_price} </b></p>
        </div>
    )
}