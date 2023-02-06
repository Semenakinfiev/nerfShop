import s from './Home.module.scss';
import Slider from './components/slider/Slider';
import React from 'react';
import Card from './components/card/Card.jsx';
import { MyContext } from '../../App';

function Home() {

  const items = React.useContext(MyContext);
  const [valueInput, setValueInput] = React.useState('');

  return (
    <div className={s.home}>
      <Slider>
        <div className={s.slide_1}>
          <div className={s.left_part_slide1}>
            <img src="/assets/sliders/slide1/boy.png" alt="boy" />
          </div>
          <div className={s.right_part_slide1}>
            <h2 className={s.big_text}>Nerf Elite 2.0 Motoblitz CS-10 Blaster</h2>
            <p className={s.small_text}>
              Blast with the power of airblitz action or motorized mayhem!
            </p>
            <button className={s.button1}>BUY NOW</button>
          </div>
        </div>

        <div className={s.slide_2}>
          <div className={s.left_part_slide2}>
            <img src="/assets/sliders/slide2/two_hero.png" alt="hero" />
          </div>
          <div className={s.right_part_slide2}>
            <div className={s.title}>
              <img src="/assets/sliders/slide2/title.png" alt="title" />
            </div>
            <h2 className={s.discription}>
              PLAY FORTNITE IN REAL LIFE WITH THE PUMP-ACTION!
            </h2>
            <button className={s.button2}>BUY NOW</button>
          </div>
        </div>

        <div className={s.slide_3}>
          <div className={s.left_part_slide3}>
            <img src="/assets/sliders/slide3/gun.png" alt="gun" />
          </div>
          <div className={s.right_part_slide3}>
            <div className={s.title3}>
              <img src="/assets/sliders/slide3/title_gun.png" alt="title" />
            </div>
            <h2 className={s.discription1}>
              Harness the extraordinary force of the greatest dinosaurs of all and blast into
              amazing adventures.
            </h2>
            <button className={s.button3}>BUY NOW</button>
          </div>
        </div>
      </Slider>

      <div className={s.products}>
            <div className={s.hightBlock}>
                <h2 className={s.text}>ALL GUNS</h2>
                <div className={s.search}>
                    <img src='/assets/products/search.svg' alt='поиск'/>
                    <input className={s.searchInput} value={valueInput}  onChange={(event) => setValueInput(event.target.value)} type='text'/>
                </div>
            </div>
            <div className={s.cardsBlock}>
                {
               items.guns.filter((elem) => {
                    return elem.title.toLowerCase().includes(valueInput.toLowerCase())
                  }).map((item, id) => (
                   <Card
                    key={id}
                    title={item.title}
                    price={item.price}
                    imgUrl={item.ImgUrl}
                    />
                ))}
               </div>
        </div>
    </div>
  );
}

export default Home;
