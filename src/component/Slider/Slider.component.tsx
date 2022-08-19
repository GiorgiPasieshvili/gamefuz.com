// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SliderData from './SliderData.json';

// import assets and styles
import LeftIcon from '@style/icons/sli-left.svg';
import RightIcon from '@style/icons/sli-right.svg';
import './Slider.style.scss';

const SLIDER_INTERVAL = 3000;

/** @namespace @component/Slider/Component */
export default function Slider() {
  const [current, setCurrent] = useState<number>(0);

  // make slide transitions automatic
  useEffect(() => {
    const isLastSlide = current === SliderData.length - 1;
    const interval = setInterval(() => setCurrent(current => isLastSlide ? 0 : current + 1), SLIDER_INTERVAL);
    return () => clearInterval(interval);
  }, [current]);

  // go to the next slide
  const nextSlide = () => {
    const isLastSlide = current === SliderData.length - 1;
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
    <div className='slider'>

      {/* left and right buttons */}
      <div className='slider-buttons'>
        <div className="container">
          <button onClick={prevSlide}>
            <img src={LeftIcon} alt="Left Icon" />
          </button>

          <button onClick={nextSlide}>
            <img src={RightIcon} alt="Right Icon" />
          </button>
        </div>
      </div>

      {/* long posters */}
      <div className='slider-posters'>
        {SliderData.map((slide, index) => (
          <img
            key={index}
            className={index === current ? 'active' : undefined}
            src={slide['poster-url']}
            alt={slide.title}
          />
        ))}
      </div>

      {/* bottom section of slider */}
      <div className="slider-bottom">
        <div className="container">

          {/* game title and year */}
          <div className='slider-title'>
            {SliderData.map((slide, index) => (
              <div
                key={index}
                className={index === current ? 'active' : undefined} 
              >
                <h3>{slide.title}</h3>
                <h4>{slide.year}</h4>
              </div>
            ))}
          </div>

          {/* counter with mini posters */}
          <div className='slider-counter'>
            {SliderData.map((slide, index) => (
              <img
                onClick={() => slideClick(index)}
                key={index}
                className={index === current ? 'active' : undefined}
                src={slide['mini-poster-url']}
                alt={slide.title}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}