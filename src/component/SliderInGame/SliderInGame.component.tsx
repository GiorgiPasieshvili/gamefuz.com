/* utilities import */
import { useState } from "react";
/* assets & styles import */
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./SliderInGame.style.scss";
import data from "@data/DetailsSlider.json";

import Streamer from "@util/Streamer";

/** @namespace @component/SliderInGame/Component */
export default function SliderInGame() {
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
    <div className="sliderin">
      <Streamer
        className={
          current === 0
            ? "sliderin-video sliderin-video-active"
            : "sliderin-video"
        }
        videoId={video}
        setCurrent={setCurrent}
      />

      {/* left and right buttons */}
      <div className="sliderin-buttons">
        <div className="container">
          <button className="left" onClick={prevSlide}>
            <BsChevronCompactLeft />
          </button>

          <button className="right" onClick={nextSlide}>
            <BsChevronCompactRight />
          </button>
        </div>
      </div>

      {/* posters */}
      <div className="sliderin-posters">
        {images.map(({ poster, title }: any, index: any) => (
          <img
            key={index}
            className={index + 1 === current ? "active" : ""}
            src={poster}
            alt={title}
          />
        ))}
      </div>

      {/* counter with mini posters */}
      <div className="sliderin-counter">
        <div className="container">
          <img className="yplay" src="/assets/yplay.png" alt="youtube play" />
          {images.map(({ poster }: any, index: any) => (
            <img
              key={index}
              className={index + 1 === current ? "active" : ""}
              onClick={() => slideClick(index)}
              src={poster}
              alt="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
