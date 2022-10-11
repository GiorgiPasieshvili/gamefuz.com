// Import components
import Products from "component/Products";
import Companies from "component/Creators";
import Slider from "component/Slider";
import Filter from "component/Filter";

/** @namespace @route/Homepage/Component */
export default function Homepage() {
  return (
    <>
      <Slider />
      <Filter />
      <div className="container">
        <Products title="top games" type="top" />
        <Products title="recent games" type="recent" />
        <Companies />
        <Products title="trailers" type="trailers" />
      </div>
    </>
  );
}
