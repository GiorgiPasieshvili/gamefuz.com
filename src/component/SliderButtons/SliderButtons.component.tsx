/* import assets & styles */
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./SliderButtons.style.scss";

/** @namespace @component/SliderButtons/Component */
export default function SliderButtons({ prevSlide, nextSlide }: any) {
  return (
    <div className="slider-buttons">
      <button onClick={prevSlide}>
        <BsChevronCompactLeft />
      </button>

      <button onClick={nextSlide}>
        <BsChevronCompactRight />
      </button>
    </div>
  );
}
