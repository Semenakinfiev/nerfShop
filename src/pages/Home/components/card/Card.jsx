import s from './Card.module.scss';
import React from 'react';
import { MyContext } from './../../../../App';

function Card({ title, price, imgUrl }) {


  const [favorite, setFavorite] = React.useState(false);
  const contextCard = React.useContext(MyContext);
  const [checked, setChecked] = React.useState(false);

  const onClickFavorite = () => {
    setFavorite(!favorite);
  }

  const onClickAdd = () => {
    contextCard.onAddToCart({ title, price, imgUrl });
    setChecked(!checked);
  }

  return (
    <div className={s.card}>
      <div className={s.cardHightBlock}>
        <img className={s.heart} onClick={onClickFavorite} src={favorite ? "/assets/products/heart_red.svg" : "/assets/products/heart_white.svg"} alt="heart" />
        <img
          className={s.productImg}
          src={imgUrl}
          alt="product"
        />
      </div>
      <div className={s.cardText}>{title}</div>
      <div className={s.price}>
        <p>ЦЕНА:</p>
        <h3>{price} руб.</h3>
        <img onClick={onClickAdd} src={checked ? "/assets/products/check_mark.svg" : "/assets/products/plus.svg"} alt="product" />
      </div>
    </div>
  );
}

export default Card;
