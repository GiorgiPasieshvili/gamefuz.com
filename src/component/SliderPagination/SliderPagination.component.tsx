/* import assets & styles */

import "./SliderPagination.style.scss";

/** @namespace @component/SliderPagination/Component */
export default function SliderPagination({ data, current, slideClick }: any) {
  return (
    <div className="slider-pagination">
      {data.map(({ smallImage, title, image }: any, index: number) => (
        <img
          key={index}
          className={index === current ? "active" : ""}
          onClick={() => slideClick(index)}
          src={smallImage || image}
          alt={title || JSON.stringify(index) }
        />
      ))}
    </div>
  );
}
