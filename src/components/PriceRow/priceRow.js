import React, {Component} from 'react'

export default class PriceRow extends Component {

    state = {
        price: this.props.item.value,
        value: this.props.item.value,
        duration: this.props.item.duration,
        square: this.props.item.square,
        quantity: this.props.item.quantity
    }

    componentDidUpdate(prevProps, prevState) {
        const {value} = this.state;
        if (value !== prevState.value) {
            this.props.updateBonusPrice(this.props.item, value);
        }
    }

    incValueToBonusDishes = () => {
        this.setState((state) => {
            return {
                value: state.value + 250,
                duration: state.duration + 60
            }
        })
    }  
    
    decValueToBonusDishes = () => {
        this.setState((state) => {
            if (state.value === 250) {
                return {
                    value: state.value,
                    duration: state.duration
                }
            } 
            return {
                value: state.value - 250,
                duration: state.duration - 60
            }
        })
    } 

    changeButtons = (title) => {
        switch(title) {
            case 'Помыть посуду':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.incValueToBonusDishes()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusDishes()}
                        >-</button>
                    </div> 
                )
            case 'Помыть люстру':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.incValueToBonusLamp()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusLamp()}
                        >-</button>
                    </div>
                )
        }
    }

    render() {       

        const {idx, item} = this.props;

        let price;
        if (!item.duration && !item.square && !item.quantity) {
            price = `${item.value}`
        } else if (item.duration && !item.square && !item.quantity) {
            price = `${this.state.value} руб / ${this.state.duration} мин`
        } else if (!item.duration && item.square && !item.quantity) {
            price = `${this.state.value} руб / ${item.square} м²`
        } else if (!item.duration && !item.square && item.quantity) {
            price = `${this.state.value} руб / ${item.quantity} шт`
        }           

        return (
            <li className="calculator-total__row" key={idx}>
                <div className="calculator-total__box mb-3">
                    <span className="calculator-total__title">{item.title}</span> 
                    <span className="calculator-total__price">{price}</span>
                </div>
                {item.buttons && this.changeButtons(item.title)}                                                               
            </li>
        )
    }
}
