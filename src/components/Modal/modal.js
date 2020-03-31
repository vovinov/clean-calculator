import React from 'react'

import './modal.scss'

const Modal = () => {

    return (
        <div className="col-md-6 modal__form">
            <div className="row modal__row">
                <h3 className="modal__heading">Оформление заказа</h3>
            </div>
            <div className="row justify-content-center">
                <form method="POST" action="mail.php" className="form">
                    <input type="text" name="name" placeholder="Имя" className="form-control form-control__modal" required />
                    <input type="tel" name="phone" placeholder="Телефон" className="form-control form-control__modal" required />
                    <input type="email" name="email" placeholder="Электронный адрес" className="form-control form-control__modal" required />
                    <div className="form-group row align-items-center">
                        <label htmlFor="input__time" className="col-8 col-form-label form__label">Предпочтительное время звонка</label>
                        <div className="col-4">
                            <input type="time" name="time" className="form__time" id="input__time" />
                        </div>
                    </div>
                    <textarea name="text" id="text" rows="5" className="form-control form-control__modal" placeholder="Сообщение"></textarea>
                    <button type="submit" className="form__button section__btn">ОТПРАВИТЬ</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
