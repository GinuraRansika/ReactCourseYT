import cardsData from "./cardsData"
import Card from "./components/Card"

function Cards(){
    const cardsElements = cardsData.map(card => {
        return ( <Card 
                    key  = {card.id}
                    card = {card}
                />
        )
    })
    return(
        <div className='cards-container'>
            {cardsElements}
        </div>
    )
}

export default Cards