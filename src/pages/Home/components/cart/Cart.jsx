import s from './Cart.module.scss';
import React from 'react';


function Cart({ onClickOpenCart, gunsForCart, onDeleteCartGun }) {

  return (
  <div className={s.cart}>
      <div className={s.rightBlock}>
        <h2 className={s.title}>Корзина</h2>
        <img onClick={onClickOpenCart} className={s.closeImg} src='/assets/cart/close.svg' />

        <div className={s.cardBlock}>
          {
            gunsForCart.map((item, id) => {
            return (
              <div key={id} className={s.cardForCart}>
                <img src={item.imgUrl} />
                <div className={s.cardForCartText}>
                  <p className={s.cardForCartTitle}>{item.title}</p>
                  <p className={s.cardForCartPrice}>{item.price}</p>
                </div>
                <img onClick={() => onDeleteCartGun(item.id)} className={s.cardForCartClose} src='/assets/cart/close.svg' />
              </div>
            )
            }
            )
          }
        </div>

        <div className={s.total}>
        <div className={s.totalHightBlock}>
          <p className={s.totalText}>Итого:</p>
          <div className={s.totalLine}></div>
          <p className={s.totalPrice}>2023 руб.</p>
        </div>
        <button className={s.buttonPay}>
            Оформить заказ
            <img src='/assets/cart/arrow.svg' />
        </button>
        </div>

      </div>

    </div>
  );
}

export default Cart;
