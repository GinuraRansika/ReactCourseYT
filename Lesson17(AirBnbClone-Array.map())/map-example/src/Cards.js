import cardsData from "./cardsData"
import Card from "./components/Card"

function Cards(){
    const cardsElements = cardsData.map(card => {
        return ( <Card 
                    key  = {card.id}
                    img = {card.coverImg}
                    rating = {card.stats.rating}
                    reviewCount = {card.stats.reviewCount}
                    country = {card.country}
                    title = {card.title}
                    description = {card.description}
                    price = {card.price}
                    location = {card.location}
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