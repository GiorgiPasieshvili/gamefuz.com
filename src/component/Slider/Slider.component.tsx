/* utilities import */
import { useState, useEffect } from "react";
/* assets & styles import */
import SliderButtons from "component/SliderButtons";
import SliderTitle from "component/SliderTitle";
import SliderPagination from "component/SliderPagination";
import SliderShowcase from "component/SliderShowcase";

import "./Slider.style.scss";
import data from "data/HomeSlider.json";

/* import constant values */
import { SLIDER_INTERVAL } from "./Slider.config";

/** @namespace @component/Slider/Component */
export default function Slider() {
  const [current, setCurrent] = useState<number>(0);

  // make slide transitions automatic
  useEffect(() => {
    const isLastSlide = current === data.length - 1;
    const interval = setInterval(
      () => setCurrent((current) => (isLastSlide ? 0 : current + 1)),
      SLIDER_INTERVAL
    );
    return () => clearInterval(interval);
  }, [current]);

  // go to the next slide
  const nextSlide = () => {
    const isLastSlide = current === data.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  // go to the previous slide
  const prevSlide = () => {
    const newIndex = current === 0 ? 4 : current - 1;
    setCurrent(newIndex);
  };

  // choose slide for your own
  const slideClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="slider">
      {/* long images */}
      <SliderShowcase data={data} current={current} />

      <div className="container">
        <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />

        {/* footer of slider */}
        <footer className="slider__footer">
          <SliderTitle data={data} current={current} />
          <SliderPagination
            data={data}
            current={current}
            slideClick={slideClick}
          />
        </footer>
      </div>
    </div>
  );
}
