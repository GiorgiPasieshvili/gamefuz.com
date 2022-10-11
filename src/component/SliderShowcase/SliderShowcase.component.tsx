/* import assets & styles */
import "./SliderShowcase.style.scss";

/** @namespace @component/SliderShowcase/Component */
export default function SliderShowcase({ data, current, isInner }: any) {
  return (
    <div className="slider-showcase">
      {data.map((item: any, index: number) => (
        <img
          key={index}
          className={index === current ? "active" : ""}
          src={
            isInner
              ? item.attributes.url
              : item.attributes.poster.data.attributes.url
          }
          alt={isInner ? item.id : item.attributes.title}
        />
      ))}
    </div>
  );
}
