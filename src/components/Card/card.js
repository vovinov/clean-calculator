import React, { Component } from 'react';
import classNames from 'classnames';

export default class Card extends Component { 

    state = {
        active: false
    }

    changeState = () => {
        this.setState((state) => {
            return {
                active: !state.active
            }
        })
    }

    cardClick = () => {
        this.changeState()
        this.props.onCardClick()
    }
   
    render() {
 
        const {card} = this.props;
        const {url, alt, title, price} = card;
    
        const linkClass = classNames({
            'calculator-card': true,
            'calculator-card--active': this.state.active
        })

        return (
            <li className="col-lg-4 col-sm-6 calculator-item text-center" onClick={this.cardClick}>
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
  
}
