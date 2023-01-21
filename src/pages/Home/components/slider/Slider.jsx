import s from './Slider.module.scss';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const PAGE_WIDTH = 900;

function Slider( { children } ) {

const [pages, setPages] = React.useState([]);
const [offset, setOffset] = React.useState(0);

React.useEffect(() => {
  setPages(
    React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        style: {
          minHeight: '100%',
          minWidth: `${PAGE_WIDTH}px`,
          maxWidth: `${PAGE_WIDTH}px`,
        },
      })
    })
  )
}, [])

const handlerLeftArrowClick = () => {
  setOffset((currentOffset) => {
    const newOffset = currentOffset + PAGE_WIDTH;

    return Math.min(newOffset, 0);
  })
}

const handlerRightArrowClick = () => {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - PAGE_WIDTH;
        const maxOffset = -(PAGE_WIDTH * (pages.length-1));

        return Math.max(newOffset, maxOffset);
      })
}

  return (

      <div className={s.sliders}>
        <FaChevronLeft className={s.arrow} onClick={handlerLeftArrowClick}/>
        <div className={s.slider_window}>
          <div
          className={s.allSlidersContainer}
          style={{
            transform: `translateX(${offset}px)`,
          }}
          >

                  {pages}

          </div>
        </div>
        <FaChevronRight className={s.arrow} onClick={handlerRightArrowClick}/>
    </div>
  );
}

export default Slider;
