import s from './Favorite.module.scss';
import React from 'react';


function Favorite() {

  return (
    <div className={s.favorite}>
        <div className={s.hightBlock}>
        <img className={s.leftArrow}  src={"/assets/favorite/leftArrow.svg"} alt="arrow" />
        <h2 className={s.title}>Мои закладки</h2>
        </div>
        <div className={s.cardBlock}>
          
        </div>
    </div>
     
  );
}

export default Favorite;
