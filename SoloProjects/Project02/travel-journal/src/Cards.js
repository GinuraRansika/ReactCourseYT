import React from "react"
import cardsData from './cardData'
import Card from './components/Card'

export default function Cards(){
    const cardsElements = cardsData.map(card => {
        return( <Card
                    key = {card.id}
                    data = {card}
                />
        )
    })
    return(
        <div className="cards-container">
            {cardsElements}
        </div>
    )
}