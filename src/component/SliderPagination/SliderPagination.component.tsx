/* import assets & styles */

import "./SliderPagination.style.scss";

/** @namespace @component/SliderPagination/Component */
export default function SliderPagination({
  data,
  current,
  slideClick,
  isInner,
}: any) {
  return (
    <div className="slider-pagination">
      {data.map((item: any, index: number) => (
        <img
          key={index}
          className={index === current ? "active" : ""}
          onClick={() => slideClick(index)}
          src={
            isInner
              ? item.attributes.url
              : item.attributes.thumbnail_square.data.attributes.url
          }
          alt={isInner ? item.id : item.attributes.title}
        />
      ))}
    </div>
  );
}
