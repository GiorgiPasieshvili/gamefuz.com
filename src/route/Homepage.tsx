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
        <Products type="top" />
        <Products type="recent" />
        <Companies />
        <Products type="trailers" />
      </div>
    </>
  );
}
