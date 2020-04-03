import React, {Component} from 'react';

export default class PriceRow extends Component {

    state = {
        price: this.props.item.value,
        value: this.props.item.value,
        duration: this.props.item.duration,
        square: this.props.item.square,
        quantity: this.props.item.quantity
    }

    componentDidUpdate(prevProps, prevState) {
        const {value, duration, square, quantity} = this.state;
        if (value !== prevState.value) {
            this.props.updateBonusArray(this.props.item, value, duration, square, quantity);
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

    incValueToBonusLamp = () => {
        this.setState((state) => {
            return {
                value: state.value + 350,
                quantity: state.quantity + 1
            }
        })
    }  
    
    decValueToBonusLamp = () => {
        this.setState((state) => {
            if (state.value === 1) {
                return {
                    value: state.value,
                    quantity: state.quantity
                }
            } 
            return {
                value: state.value - 350,
                quantity: state.quantity - 1
            }
        })
    } 

    incValueToBonusIroning = () => {
        this.setState((state) => {
            return {
                value: state.value + 500,
                duration: state.duration + 60
            }
        })
    }  
    
    decValueToBonusIroning = () => {
        this.setState((state) => {
            if (state.value === 500) {
                return {
                    value: state.value,
                    duration: state.duration
                }
            } 
            return {
                value: state.value - 500,
                duration: state.duration - 60
            }
        })
    }

    incValueToBonusDryCarpet = () => {
        this.setState((state) => {
            return {
                value: state.value + 70,
                square: state.square + 1
            }
        })
    }  
    
    decValueToBonusDryCarpet = () => {
        this.setState((state) => {
            if (state.value === 70) {
                return {
                    value: state.value,
                    square: state.square
                }
            } 
            return {
                value: state.value - 70,
                square: state.square - 1
            }
        })
    }

    incValueToBonusDryСurtains = () => {
        this.setState((state) => {
            return {
                value: state.value + 250,
                square: state.square + 1
            }
        })
    }  
    
    decValueToBonusDryСurtains = () => {
        this.setState((state) => {
            if (state.value === 250) {
                return {
                    value: state.value,
                    square: state.square
                }
            } 
            return {
                value: state.value - 250,
                square: state.square - 1
            }
        })
    }

    incValueToBonusDryTextil = () => {
        this.setState((state) => {
            return {
                value: state.value + 250,
                quantity: state.quantity + 1
            }
        })
    }  
    
    decValueToBonusDryTextil = () => {
        this.setState((state) => {
            if (state.value === 250) {
                return {
                    value: state.value,
                    quantity: state.quantity
                }
            } 
            return {
                value: state.value - 250,
                quantity: state.quantity - 1
            }
        })
    }

    incValueToBonusDryLeather = () => {
        this.setState((state) => {
            return {
                value: state.value + 450,
                quantity: state.quantity + 1
            }
        })
    }  
    
    decValueToBonusDryLeather = () => {
        this.setState((state) => {
            if (state.value === 450) {
                return {
                    value: state.value,
                    quantity: state.quantity
                }
            } 
            return {
                value: state.value - 450,
                quantity: state.quantity - 1
            }
        })
    }

    changeButtons = (title) => {
        switch(title) {
            case 'Помыть посуду':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button calculator-total__button--right"
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
                            className="btn calculator-total__button calculator-total__buttons--right"
                            onClick={() => this.incValueToBonusLamp()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusLamp()}
                        >-</button>
                    </div>
                )
            case 'Глажка белья':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button calculator-total__button--right"
                            onClick={() => this.incValueToBonusIroning()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusIroning()}
                        >-</button>
                    </div>
                )
            case 'Химчистка ковров':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button calculator-total__button--right"
                            onClick={() => this.incValueToBonusDryCarpet()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusDryCarpet()}
                        >-</button>
                    </div>
                )
            case 'Химчистка штор':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button calculator-total__button--right"
                            onClick={() => this.incValueToBonusDryСurtains()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusDryСurtains()}
                        >-</button>
                    </div>
                )
            case 'Химчистка текстильной мебели':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button calculator-total__button--right"
                            onClick={() => this.incValueToBonusDryTextil()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusDryTextil()}
                        >-</button>
                    </div>
                )
            case 'Химчистка кожаной мебели':
                return (
                    <div className="calculator-total__buttons mb-3 text-right">
                        <button 
                            className="btn calculator-total__button calculator-total__button--right"
                            onClick={() => this.incValueToBonusDryLeather()}>+
                        </button>
                        <button 
                            className="btn calculator-total__button"
                            onClick={() => this.decValueToBonusDryLeather()}
                        >-</button>
                    </div>
                )
            default: 
                return 
        }
    }

    render() {       

        const {idx, item} = this.props;

        let price;
        if (!item.duration && !item.square && !item.quantity) {
            price = `${item.value} руб`
        } else if (item.duration && !item.square && !item.quantity) {
            price = `${this.state.value} руб / ${this.state.duration} мин`
        } else if (!item.duration && item.square && !item.quantity) {
            price = `${this.state.value} руб / ${this.state.square} м²`
        } else if (!item.duration && !item.square && item.quantity) {
            price = `${this.state.value} руб / ${this.state.quantity} шт`
        }           

        return (
            <li className="calculator-total__row" key={idx}>                
                <p className="calculator-total__title">{item.category}</p> 
                <div className="calculator-total__box">
                    <span className="calculator-total__title">{item.title}</span> 
                    <span className="calculator-total__price">{price} </span>
                    <button className="calculator-total__button calculator-total__button--delete"
                            onClick={() => this.props.deleteRow(this.props.item)}>
                        &#10006;
                    </button>
                </div>
                {item.buttons && this.changeButtons(item.title)}                                                                     
            </li>
        )
    }
}
