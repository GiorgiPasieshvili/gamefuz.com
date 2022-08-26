import { Link } from "react-router-dom";
/* import assets & styles */
import "./SliderTitle.style.scss";

/** @namespace @component/SliderTitle/Component */
export default function SliderTitle({ data, current }: any) {
  return (
    <div className="slider-title">
      {data.map(({ title, year, id }: any, index: number) => (
        <Link
          key={index}
          to={"/product/" + id}
          className={index === current ? "active" : ""}
        >
          <h3>
            {title} <span>{year}</span>
          </h3>
        </Link>
      ))}
    </div>
  );
}
