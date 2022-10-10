/* import assets & styles */
import "./SliderShowcase.style.scss";

/** @namespace @component/SliderShowcase/Component */
export default function SliderShowcase({ data, current }: any) {
  return (
    <div className="slider-showcase">
      {data.map(({ image, title }: any, index: number) => (
        <img
          key={index}
          className={index === current ? "active" : ""}
          src={image}
          alt={title || JSON.stringify(index)}
        />
      ))}
    </div>
  );
}
