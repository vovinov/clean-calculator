
import React, {Component} from 'react';
import * as R from 'ramda';

import CalculatorRow from '../../components/CalculatorRow';
import PriceRow from '../../components/PriceRow';
import Order from '../../components/Order';
import ListCard from '../../components/ListCard';

import './app.scss';

import {data} from '../../data';
import {cards} from '../../data';
import {textilCards} from '../../data';
import {leatherCards} from '../../data';
import {matrassCards} from '../../data';

export default class App extends Component {

    state = {
        data: data,
        cards: cards,
        textilCards: textilCards,
        leatherCards: leatherCards,
        matrassCards: matrassCards,
        selectRoomValue: '',
        selectTypeValue: '',
        selectSquareValue: '',
        subPrice: null,
        totalPrice: null,        
        bonus: [],
        order: false,
        textil: false,
        leather: false,
        matrass: false

    }

    componentDidUpdate(prevProps, prevState) {

        const {selectRoomValue, selectTypeValue, selectSquareValue, bonus, subPrice} = this.state;
        

        if (selectRoomValue !== prevState.selectRoomValue) {            
            this.getSubPrice();
            this.getTotalPrice();
        }

        if (selectTypeValue !== prevState.selectTypeValue) {            
            this.getSubPrice();
            this.getTotalPrice();
        }

        if (selectSquareValue !== prevState.selectSquareValue) {
            this.getSubPrice();
            this.getTotalPrice();
            
        }

        if (prevState.bonus.length !== bonus.length) {  
            this.getTotalPrice(); 
        }

        if (prevState.subPrice !== subPrice) {
            this.getTotalPrice(); 
        }
    }

    onSelectRoom = (e) => {
        this.setState({
            selectRoomValue: e.target.value,
            selectTypeValue: '',
            selectSquareValue: '',
            subPrice: ''
        })

    }

    onSelectType = (e) => {
        this.setState({
            selectTypeValue: e.target.value
        })

    }

    onSelectSquare = (e) => {
        this.setState({
            selectSquareValue: e.target.value
        })
    }

    renderSwitch = (param) => {
        const {squareRoom, squareCottage, squareFurniture, typeRoom, typeFurniture, typeCottage, typeCottageRepair, typeOffice} = this.state.data;
        switch (param) {
            case 'Уборка квартиры':
                return (
                    <>  
                        <CalculatorRow 
                            title='Выберите тип уборки' 
                            options={typeRoom} 
                            onSelected={this.onSelectType}
                            />
                        <CalculatorRow 
                            title='Площадь помещения' 
                            options={squareRoom} 
                            onSelected={this.onSelectSquare}
                            />
                    </>);
            case 'Уборка квартиры после ремонта': 
                return  (
                <>  
                    <CalculatorRow 
                        title='Выберите обстановку' 
                        options={typeFurniture} 
                        onSelected={this.onSelectType}
                        initialValue=''
                        />
                    <CalculatorRow 
                        title='Площадь помещения' 
                        options={squareFurniture} 
                        onSelected={this.onSelectSquare}
                        initialValue=''
                        />
                </>)
            case 'Уборка коттеджа':
                return (
                    <>
                        <CalculatorRow 
                            title='Выберите тип уборки' 
                            options={typeCottage} 
                            onSelected={this.onSelectType} 
                             />
                        <CalculatorRow 
                            title='Площадь дома' 
                            options={squareCottage} 
                            onSelected={this.onSelectSquare} 
                             />
                    </>);
             case 'Уборка коттеджа после ремонта':
                return (
                    <>
                        <CalculatorRow 
                            title='Выберите дом' 
                            options={typeCottageRepair} 
                            onSelected={this.onSelectType} 
                             />
                        <CalculatorRow 
                            title='Площадь дома' 
                            options={squareCottage} 
                            onSelected={this.onSelectSquare} 
                             />
                    </>);
            case 'Уборка офиса':                
                return (
                    <>
                        <CalculatorRow 
                            title='Выберите тип уборки' 
                            options={typeOffice} 
                            onSelected={this.onSelectType} 
                             />
                        <CalculatorRow 
                            title='Площадь помещения' 
                            options={squareFurniture} 
                            onSelected={this.onSelectSquare}
                             />
                    </>);
            default:
                break
        }
    }

    getSubPrice = () => {
        const {selectRoomValue, selectTypeValue, selectSquareValue} = this.state; 

        if (selectRoomValue === 'Уборка квартиры') {
            if (selectTypeValue === 'Экспресс уборка') {                
                switch (selectSquareValue) {
                    case 'до 50 м²': this.setState({subPrice: 2500})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 3000})
                        break;
                    case 'до 90 м²': this.setState({subPrice: 3500})
                        break;
                    case 'до 120 м²': this.setState({subPrice: 4000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
            if (selectTypeValue === 'Генеральная уборка') {
                switch (selectSquareValue) {
                    case 'до 50 м²': this.setState({subPrice: 4000})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 5000})
                        break;
                    case 'до 90 м²': this.setState({subPrice: 6500})
                        break;
                    case 'до 120 м²': this.setState({subPrice: 7000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
            if (selectTypeValue === 'VIP уборка') {                
                switch (selectSquareValue) {
                    case 'до 50 м²':
                        this.setState({subPrice: 13000})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 17000})
                        break;
                    case 'до 90 м²': this.setState({subPrice: 21000})
                        break;
                    case 'до 120 м²': this.setState({subPrice: 24000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
        } else if (selectRoomValue === 'Уборка коттеджа') {
            if (selectTypeValue === 'Экспресс уборка') {                
                switch (selectSquareValue) {
                    case 'до 100 м²': this.setState({subPrice: 4000})
                        break;
                    case 'до 150 м²': this.setState({subPrice: 4500})
                        break;
                    case 'до 200 м²': this.setState({subPrice: 5000})
                        break;
                    case 'до 250 м²': this.setState({subPrice: 5500})
                        break
                    case 'до 300 м²': this.setState({subPrice: 6000})
                        break
                    case 'до 350 м²': this.setState({subPrice: 6500})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
            if (selectTypeValue === 'Генеральная уборка') {
                switch (selectSquareValue) {
                    case 'до 100 м²': this.setState({subPrice: 7000})
                        break;
                    case 'до 150 м²': this.setState({subPrice: 10000})
                        break;
                    case 'до 200 м²': this.setState({subPrice: 13000})
                        break;
                    case 'до 250 м²': this.setState({subPrice: 17000})
                        break
                    case 'до 300 м²': this.setState({subPrice: 19000})
                        break
                    case 'до 350 м²': this.setState({subPrice: 22000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
            if (selectTypeValue === 'VIP уборка') {                
                switch (selectSquareValue) {
                    case 'до 100 м²': this.setState({subPrice: 20000})
                        break;
                    case 'до 150 м²': this.setState({subPrice: 24000})
                        break;
                    case 'до 200 м²': this.setState({subPrice: 28000})
                        break;
                    case 'до 250 м²': this.setState({subPrice: 32000})
                        break
                    case 'до 300 м²': this.setState({subPrice: 36000})
                        break
                    case 'до 350 м²': this.setState({subPrice: 38000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
        } else if (selectRoomValue === 'Уборка квартиры после ремонта') {
            if (selectTypeValue === 'С мебелью') {
                switch (selectSquareValue) {
                    case 'до 40 м²': this.setState({subPrice: 5500})
                        break;
                    case 'до 50 м²': this.setState({subPrice: 6500})
                        break;
                    case 'до 60 м²': this.setState({subPrice: 7500})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 8000})
                        break
                    case 'до 80 м²': this.setState({subPrice: 8500})
                        break
                    case 'до 90 м²': this.setState({subPrice: 9000})
                        break
                    case 'до 100 м²': this.setState({subPrice: 9500})
                        break;
                    default: this.setState({subPrice: 0})
                }
            } else if (selectTypeValue === 'Без мебели') {
                switch (selectSquareValue) {
                    case 'до 40 м²': this.setState({subPrice: 4500})
                        break;
                    case 'до 50 м²': this.setState({subPrice: 5500})
                        break;
                    case 'до 60 м²': this.setState({subPrice: 6000})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 6400})
                        break
                    case 'до 80 м²': this.setState({subPrice: 6800})
                        break
                    case 'до 90 м²': this.setState({subPrice: 7200})
                        break
                    case 'до 100 м²': this.setState({subPrice: 7600})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
        } else if (selectRoomValue === 'Уборка коттеджа после ремонта') {
            if (selectTypeValue === 'Деревянный дом') {
                switch (selectSquareValue) {
                    case 'до 100 м²': this.setState({subPrice: 10000})
                        break;
                    case 'до 150 м²': this.setState({subPrice: 15000})
                        break;
                    case 'до 200 м²': this.setState({subPrice: 20000})
                        break;
                    case 'до 250 м²': this.setState({subPrice: 25000})
                        break
                    case 'до 300 м²': this.setState({subPrice: 30000})
                        break
                    case 'до 350 м²': this.setState({subPrice: 35000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            } else if (selectTypeValue === 'Коттедж') {
                switch (selectSquareValue) {
                    case 'до 100 м²': this.setState({subPrice: 8000})
                        break;
                    case 'до 150 м²': this.setState({subPrice: 12000})
                        break;
                    case 'до 200 м²': this.setState({subPrice: 16000})
                        break;
                    case 'до 250 м²': this.setState({subPrice: 20000})
                        break
                    case 'до 300 м²': this.setState({subPrice: 24000})
                        break
                    case 'до 350 м²': this.setState({subPrice: 28000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
        } else if (selectRoomValue === 'Уборка офиса') {
            if (selectTypeValue === 'Генеральная уборка') {
                switch (selectSquareValue) {
                    case 'до 40 м²': this.setState({subPrice: 5000})
                        break;
                    case 'до 50 м²': this.setState({subPrice: 5500})
                        break;
                    case 'до 60 м²': this.setState({subPrice: 6000})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 6500})
                        break
                    case 'до 80 м²': this.setState({subPrice: 7000})
                        break
                    case 'до 90 м²': this.setState({subPrice: 7500})
                        break
                    case 'до 100 м²': this.setState({subPrice: 8000})
                        break;
                    default: this.setState({subPrice: 0})
                }
            } else if (selectTypeValue === 'Уборка после ремонта без мебели') {
                switch (selectSquareValue) {
                    case 'до 40 м²': this.setState({subPrice: 4000})
                        break;
                    case 'до 50 м²': this.setState({subPrice: 4800})
                        break;
                    case 'до 60 м²': this.setState({subPrice: 5600})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 5900})
                        break
                    case 'до 80 м²': this.setState({subPrice: 6300})
                        break
                    case 'до 90 м²': this.setState({subPrice: 6500})
                        break
                    case 'до 100 м²': this.setState({subPrice: 6800})
                        break;
                    default: this.setState({subPrice: 0})
                }
            } else if (selectTypeValue === 'Уборка после ремонта c мебелью') {
                switch (selectSquareValue) {
                    case 'до 40 м²': this.setState({subPrice: 5000})
                        break;
                    case 'до 50 м²': this.setState({subPrice: 6000})
                        break;
                    case 'до 60 м²': this.setState({subPrice: 7000})
                        break;
                    case 'до 70 м²': this.setState({subPrice: 7400})
                        break
                    case 'до 80 м²': this.setState({subPrice: 7900})
                        break
                    case 'до 90 м²': this.setState({subPrice: 8200})
                        break
                    case 'до 100 м²': this.setState({subPrice: 8500})
                        break;
                    default: this.setState({subPrice: 0})
                }
            }
        }
    }

    addBonusPrice = (card) => {
        console.log(card)
        const {bonus} = this.state

        if (card.title === 'Химчистка текстильной мебели') { return };
        if (card.title === 'Химчистка кожаной мебели') { return };
        if (card.title === 'Химчистка матрасов') { return };
        
        let cards = bonus.slice();          
        if (!R.contains(card, cards)) {
            cards.push(card); 
        } else {      
            cards.splice(R.findIndex(R.propEq('id', card.id), cards), 1)
        }
        this.setState({
            bonus: cards
        })
        this.getTotalPrice();
    }

    updateBonusArray = (card, value, duration, square, quantity) => {
        const filter = R.find(R.propEq('title', card.title))(this.state.bonus)
        filter.value = value;
        filter.duration = duration;
        filter.square = square;
        filter.quantity = quantity;
        this.getTotalPrice();
    }

    getTotalPrice = () => {
        const total = R.map((item) => R.prop('value', item), this.state.bonus)
        const totalPrice = this.state.subPrice + R.sum(total)
        this.setState({
            totalPrice: totalPrice 
        })
    }

    changeMode = () => {
        this.setState((state) => {
            return {
                order: !state.order
            }
        })
    }

    deleteRow = (item) => {
        const {bonus} = this.state;

        let cards = bonus.slice();

        cards.splice(R.findIndex(R.propEq('title', item.title), cards), 1);
        this.setState({
            bonus: cards
        })
        this.getTotalPrice();
    }

    makeOrderObject = () => {
        return JSON.stringify({
            room: this.state.selectRoomValue,
            type: this.state.selectTypeValue,
            square: this.state.selectSquareValue,
            bonus: this.state.bonus,
            totalPrice: this.state.totalPrice
        })
    }

    changeToView = (card) => {
        if (card.title === 'Химчистка текстильной мебели') {
            this.setState({
                textil: true
            })
        }

        if (card.title === 'Химчистка кожаной мебели') {
            this.setState({
                leather: true
            })
        }

        if (card.title === 'Химчистка матрасов') {
            this.setState({
                matrass: true
            })
        }
    }

    makeCardList = () => {
        const {cards, textil, leather, matrass, textilCards, leatherCards, matrassCards} = this.state;

        let сardList;

        if (textil) {
            сardList = textilCards
        } else if (leather) {
            сardList = leatherCards
        } else if (matrass) {
            сardList = matrassCards
        }else {
            сardList = cards
        }

        return сardList
    } 

    changeCards = () => {

        return (
            <ListCard 
                cards={this.makeCardList()} 
                bonus={this.state.bonus}
                addBonusPrice={this.addBonusPrice}
                changeToView={this.changeToView}  /> 
        )
    }
    
    render() {  

        const {
            subPrice, 
            selectRoomValue, 
            selectTypeValue, 
            selectSquareValue, 
            totalPrice, 
            bonus, 
            order, 
            textil,
            leather,
            matrass
        } = this.state;        
        const {services} = this.state.data;

        return (
            <section>  
                <div className="container my-5">
                    <nav className="navigation navigation--calculator row">
                        <a href="/" className="navigation__img col-md-3 col-md-3">
                            <img src="../img/logo.png" alt="Logo" className="navigation__logo" />
                        </a>
                        <div className="navigation__box col-md-9">
                            <div className="navigation__box-contacts">
                                <ul className="contacts">
                                    <li className="contacts__item mr-3">
                                        <a href="https://wa.me/79858638014" className="contacts__link">
                                            <i className="fab fa-whatsapp contacts__icon contacts__icon--whatsapp"></i>
                                        </a>
                                    </li>
                                    <li className="contacts__item mr-3">
                                        <a href="!#" className="contacts__link">
                                            <i className="fab fa-telegram contacts__icon contacts__icon--telegram"></i>
                                        </a>
                                    </li>
                                    <li className="contacts__item mr-3">
                                        <a href="viber://forward?text=79858638014" className="contacts__link">
                                            <i className="fab fa-viber contacts__icon contacts__icon--viber"></i>
                                        </a>
                                    </li>
                                    <li className="contacts__item">
                                        <a href="https://instagram.com/hardclean_moscow?igshid=14ngow71x09su" className="contacts__link">
                                            <i className="fab fa-instagram contacts__icon contacts__icon--instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p className="navigation__phone navigation__phone--primary">+7(495)147-47-14</p>
                            </div>
                            <ul className="navigation__list">
                                <a href="../index.html#services" className="section__btn section__btn--main navigation__link">УСЛУГИ</a>
                                <a href="../price-clean.html" className="section__btn section__btn--main navigation__link">ПРАЙС</a>
                                <a href="../index.html#works" className="section__btn section__btn--main navigation__link">РАБОТЫ</a>
                                <a href="../index.html#comments" className="section__btn section__btn--main navigation__link">ОТЗЫВЫ</a>
                                <a href="../index.html#contacts" className="section__btn section__btn--main navigation__link">КОНТАКТЫ</a>
                            </ul>
                        </div>
                    </nav>
                    <div className="row">
                        {
                            order === true ? <Order  order={this.makeOrderObject()} />
                            :
                            <div className="col-md-6">
                                <h2 className="calculator__heading">КАЛЬКУЛЯТОР</h2>
                                <CalculatorRow 
                                    title='Выберите услугу'
                                    options={services} 
                                    onSelected={this.onSelectRoom} />                            
                                {this.renderSwitch(selectRoomValue)}                            
                                <div className="calculator__heading-box">
                                    <h2 className="calculator__heading">ДОПОЛНИТЕЛЬНО</h2>
                                    {textil === true || leather === true || matrass === true ? <button className="btn section__btn" onClick={() => this.setState({textil: false, leather: false, matrass: false})}>&larr; Назад</button> : null}
                                </div>                                 
                                {this.changeCards()}
                            </div>
                        }                       
                        <div className="col-md-6 d-flex justify-content-center flex-wrap align-content-start">
                            <div className="calculator-total">
                                <h3 className="mb-3 calculator__heading text-center">ИТОГ</h3>
                                <ul className="mb-5">
                                    <li className="calculator-total__row calculator-total__row--row">
                                        <div>
                                            <p className="calculator-total__heading">{selectRoomValue}</p>
                                            <p className="calculator-total__subtitle">{selectTypeValue}</p> 
                                            <p className="calculator-total__square">{selectSquareValue}</p> 
                                        </div>
                                        <span className="calculator-total__price">{subPrice && `${subPrice} руб`}</span> 
                                    </li>
                                </ul>
                                <h3 className="calculator-total__subheading">Дополнительные услуги</h3>
                                <ul className="calculator-total__list calculator-total__list--bordered">
                                    {bonus && bonus.map((item, idx) => {                            
                                        return (
                                            <PriceRow 
                                                key={idx} 
                                                item={item} 
                                                updateBonusArray={this.updateBonusArray} 
                                                deleteRow={this.deleteRow} />
                                        )
                                    })}
                                </ul>
                                <div className="calculator-total__row calculator-total__row--row my-5">
                                    <h3 className="mb-3">ВСЕГО</h3>
                                    <span className="calculator-total__price"> {totalPrice && `${totalPrice} руб`}</span>
                                </div>
                                <button type="button" className="section__btn calculator-total__btn" onClick={this.changeMode}>{this.state.order ? 'НАЗАД' : 'ПЕРЕЙТИ К ЗАКАЗУ'}</button>
                            </div>
                            <ul className="calculator-stages">
                            <li className="row justify-content-between align-items-center">
                                <div className="col-3 justify-self-center">
                                    <div className="calculator-stages__block">
                                        <span className="calculator-stages__number">1</span>
                                    </div>                            
                                </div>                            
                                <p className="col-9 calculator-stages__text">Связываетесь удобным для Вас способом</p>
                            </li>
                            <li className="row justify-content-between align-items-center">
                                <div className="col-3 align-self-center">
                                    <div className="calculator-stages__block calculator-stages__block--2">
                                        <span className="calculator-stages__number">2</span>
                                    </div>                            
                                </div>                            
                                <p className="col-9 calculator-stages__text">Ориентировочную стоимость вы можете посчитать с помощью калькулятора на сайте</p>
                            </li>
                            <li className="row justify-content-between align-items-center">
                                <div className="col-3 align-self-center">
                                    <div className="calculator-stages__block calculator-stages__block--3">
                                        <span className="calculator-stages__number">3</span>
                                    </div>                            
                                </div>                            
                                <p className="col-9 calculator-stages__text">В назначенные дату и время на объект приезжает бригада специалистов</p>
                            </li>
                            <li className="row justify-content-between align-items-center">
                                <div className="col-3 align-self-center">
                                    <div className="calculator-stages__block calculator-stages__block--0">
                                        <span className="calculator-stages__number">4</span>
                                    </div>                            
                                </div>                            
                                <p className="col-9 calculator-stages__text">Приёмка работ и оплата</p>
                            </li>
                        </ul>
                        </div> 
                    </div>                
                </div> 
            </section>
        )
    }
}
