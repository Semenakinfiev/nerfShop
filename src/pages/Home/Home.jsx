import s from './Home.module.scss';
import Header from '../../shared/Header/Header.jsx';
import Slider from './components/slider/Slider';

function Home() {
  return (
    <div className={s.home}>
      <Header />
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
              PLAY FORTNITE IN REAL LIFE WITH THE PUMP-ACTION MEGA BLASTING!
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
    </div>
  );
}

export default Home;
