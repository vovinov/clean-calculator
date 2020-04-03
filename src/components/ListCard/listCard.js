import React from 'react';
import Card from '../Card';

const ListCard = ({cards, bonus, addBonusPrice, changeToView}) => {
    return (
        <ul className="calculator__list row">
            {cards &&
            cards.map((card) => {
                return <Card 
                            card={card} 
                            key={card.id} 
                            bonus={bonus}
                            onCardClick={() => addBonusPrice(card)} 
                            changeToView={() => changeToView(card)} />
            })}
        </ul>
    )
}

export default ListCard
