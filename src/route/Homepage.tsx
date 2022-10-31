// Import components
import Products from "component/Products";
import Creators from "component/Creators";
import Slider from "component/Slider";

/** @namespace @route/Homepage/Component */
export default function Homepage() {
  return (
    <>
      <Slider />
      <div className="container">
        <Products title="top games" type="top" />
        <Products title="recent games" type="recent" />
        <Creators />
        <Products title="coming soon" type="soon" />
      </div>
    </>
  );
}
