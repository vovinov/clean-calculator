import React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';

const  Card = ({card, bonus, onCardClick}) => { 

    const {url, alt, title, price} = card;

    const linkClass = classNames({
        'calculator-card': true,
        'calculator-card--active': R.contains(card, bonus)
    })
   
    return (

        <li className="col-lg-4 col-sm-6 calculator-item text-center" onClick={onCardClick}>
            <div className={linkClass}>
                <div className="calculator-card__img">
                    <img className="img-fluid" src={url} alt={alt} />
                </div>
                <div className="calculator-card__title text-center">
                    <span className="calculator-card__name">{title}</span>
                </div>
                <p className="calculator-card__price">{price}</p>
            </div>
        </li>
        
    )
}

export default Card
