/* utilities import */
import { useState } from "react";
import Streamer from "@util/Streamer";
/* assets & styles import */
import SliderButtons from "@component/SliderButtons";
import SliderPagination from "@component/SliderPagination";
import SliderShowcase from "@component/SliderShowcase";

import "./InnerSlider.style.scss";
import data from "@data/InnerSlider.json";

/** @namespace @component/InnerSlider/Component */
export default function InnerSlider() {
  const { images, video } = data[0];
  const [current, setCurrent] = useState<number>(0);

  // go to the next slide
  const nextSlide = () => {
    const isLastSlide = current === images.length;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  // go to the previous slide
  const prevSlide = () => {
    const newIndex = current === 0 ? 5 : current - 1;
    setCurrent(newIndex);
  };

  // choose slide for your own
  const slideClick = (index: number) => {
    setCurrent(index + 1);
  };

  return (
    <div className="inner-slider">
      <div className="container">
        {/* <Streamer
          className={current === 0 ? "active" : ""}
          videoId={video}
          setCurrent={setCurrent}
        /> */}

        <SliderShowcase data={images} current={current} />
        <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />

        <footer className="inner-slider__footer">
          <img
            className="inner-slider__video"
            src="/images/youtube.png"
            alt="youtube"
          />
          <SliderPagination
            data={images}
            current={current}
            slideClick={slideClick}
          />
        </footer>
      </div>
    </div>
  );
}

// className={`inner-slider__pagination ${
//   current !== 0 ? "inner-slider__pagination--active" : ""
// }`}
