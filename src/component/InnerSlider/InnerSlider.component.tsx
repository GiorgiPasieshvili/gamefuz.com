/* utilities import */
import { useState } from "react";
import Streamer from "util/Streamer";
/* assets & styles import */
import SliderButtons from "component/SliderButtons";
import SliderPagination from "component/SliderPagination";
import SliderShowcase from "component/SliderShowcase";

import "./InnerSlider.style.scss";

/** @namespace @component/InnerSlider/Component */
export default function InnerSlider({ data }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoActive, setVideoActive] = useState(true);

  // go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentSlide === data.attributes.images.data.length - 1;

    if (isVideoActive) {
      disableVideo();
    } else if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;

    if (!isVideoActive && isFirstSlide) {
      enableVideo();
    } else if (!isVideoActive) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // choose slide for your own
  const slideClick = (index: number) => {
    setCurrentSlide(index);
  };

  const disableVideo = () => {
    setVideoActive(false);
  };

  const enableVideo = () => {
    setCurrentSlide(0);
    setVideoActive(true);
  };

  return (
    <div className="inner-slider">
      <div className="container">
        <SliderButtons
          isVideoActive={isVideoActive}
          isLastSlide={currentSlide === data.attributes.images.data.length - 1}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
        {!isVideoActive && (
          <footer className="inner-slider__footer">
            <img
              className="inner-slider__icon"
              src="/images/youtube.png"
              alt="youtube"
              onClick={enableVideo}
            />
            <SliderPagination
              isInner
              data={data.attributes.images.data}
              current={currentSlide}
              slideClick={slideClick}
            />
          </footer>
        )}
      </div>

      <SliderShowcase
        isInner
        data={data.attributes.images.data}
        current={currentSlide}
      />

      <Streamer
        className={`inner-slider__video ${isVideoActive ? "active" : ""}`}
        videoId={data.attributes.video}
        isVideoActive={isVideoActive}
        disableVideo={disableVideo}
      />
    </div>
  );
}
