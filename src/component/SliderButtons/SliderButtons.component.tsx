/* import assets & styles */
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./SliderButtons.style.scss";

/** @namespace @component/SliderButtons/Component */
export default function SliderButtons({ isLastSlide, isVideoActive, prevSlide, nextSlide }: any) {
  return (
    <div className="slider-buttons">
      <button className={isVideoActive ? "hide" : ""} onClick={prevSlide}>
        <BsChevronCompactLeft />
      </button>

      <button className={isLastSlide ? "hide" : ""} onClick={nextSlide}>
        <BsChevronCompactRight />
      </button>
    </div>
  );
}
