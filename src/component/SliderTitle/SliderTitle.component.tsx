import { Link } from "react-router-dom";
/* import assets & styles */
import "./SliderTitle.style.scss";

/** @namespace @component/SliderTitle/Component */
export default function SliderTitle({ data, current }: any) {
  return (
    <div className="slider-title">
      {data.map((item: any, index: number) => (
        <Link
          key={index}
          to={"/product/" + item.id}
          className={index === current ? "active" : ""}
        >
          <h3>
            {item.attributes.title} <span>{item.attributes.release}</span>
          </h3>
        </Link>
      ))}
    </div>
  );
}
