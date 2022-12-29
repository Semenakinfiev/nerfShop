import s from './Header.module.scss';


function Header() {
   return  (
    <header className={s.header}>
        <div className={s.headerRightPart}>
            <div className={s.logo}>
                <img className={s.logoImg} src='/assets/header/NERF-LOGO.PNG' alt='logo' />
            </div>
            <div className={s.logoText}>
                <h1 className={s.logoTextHight}>
                    NerfShop
                </h1>
                <p className={s.logoTextLow}>
                    Магазин детских товаров
                </p>
            </div>
        </div>
        <div className={s.headerLeftPart}>
            <div className={s.cart}>
                <img className={s.imgCart}  src='/assets/header/cart.svg' alt='cart' />
                <p className={s.sumCart}>1206 руб.</p>
            </div>
            <img className={s.imgHeart} src='/assets/header/heart.svg' alt='heart' />
            <img className={s.imgPerson} src='/assets/header/person.svg' alt='person' />
        </div>
    </header>)
}

export default Header;