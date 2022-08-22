/* utilities import */
import { useState } from 'react';
/* assets & styles import */
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './SliderInGame.style.scss';
import data from '@data/DetailsSlider.json';

/** @namespace @component/SliderInGame/Component */
export default function SliderInGame() {
  const { images } = data[0];
  const [current, setCurrent] = useState<number>(0);

  // go to the next slide
  const nextSlide = () => {
    const isLastSlide = current === images.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  }

  // go to the previous slide
  const prevSlide = () => {
    const newIndex = current === 0 ? 4 : current - 1;
    setCurrent(newIndex);
  }

  // choose slide for your own
  const slideClick = (index:number) => {
    setCurrent(index);
  }

  return (
    <div className='slideringame'>

      {/* left and right buttons */}
      <div className='slideringame-buttons'>
        <div className='container'>
          <button className='left' onClick={prevSlide}>
            <BsChevronCompactLeft />
          </button>

          <button className='right' onClick={nextSlide}>
            <BsChevronCompactRight />
          </button>
        </div>
      </div>

      {/* posters */}
      <div className='slideringame-posters'>
        {images.map(({poster, title}: any, index: any) => (
          <img
            key={index}
            className={index === current ? 'active' : ''}
            src={poster}
            alt={title}
          />
        ))}
      </div>


      {/* counter with mini posters */}
      <div className='slideringame-counter'>
        <div className="container">
          {images.map(({poster}: any, index: any) => (
            <img
              key={index}
              className={index === current ? 'active' : ''}
              onClick={() => slideClick(index)}
              src={poster}
              alt="small"
            />
          ))}
        </div>
      </div>
      
    </div>
  )
}