/* utilities import */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
/* assets & styles import */
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Slider.style.scss";
import data from "@data/HomeSlider.json";
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
      {/* left and right buttons */}
      <div className="slider-buttons">
        <div className="container">
          <button className="left" onClick={prevSlide}>
            <BsChevronCompactLeft />
          </button>

          <button className="right" onClick={nextSlide}>
            <BsChevronCompactRight />
          </button>
        </div>
      </div>

      {/* long posters */}
      <div className="slider-posters">
        {data.map(({ poster, title }, index) => (
          <img
            key={index}
            className={index === current ? "active" : ""}
            src={poster}
            alt={title}
          />
        ))}
      </div>

      {/* bottom section of slider */}
      <div className="slider-bottom">
        <div className="container">
          {/* game title and year */}
          <div className="slider-title">
            {data.map(({ title, year, id }, index) => (
              <Link
                key={index}
                to={"/product/" + id}
                className={index === current ? "active" : ""}
              >
                <h3>{title}</h3>
                <h4>{year}</h4>
              </Link>
            ))}
          </div>

          {/* counter with mini posters */}
          <div className="slider-counter">
            {data.map(({ smallPoster, title }, index) => (
              <img
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => slideClick(index)}
                src={smallPoster}
                alt={title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
