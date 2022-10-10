// import Slider from 'component/Slider';
import InnerSlider from "component/InnerSlider";
import Details from "component/Details";
import Products from "component/Products";
import Comments from "component/Comments";

/** @namespace @route/ProductPage/Component */
export default function ProductPage() {
  return (
    <>
      <InnerSlider />
      <div className="container">
        <Details />
        <Products type="similar" />
        <Comments />
      </div>
    </>
  );
}

// import { useParams } from 'react-router'

// const { id } = useParams()
// const { loading, error, data } = useQuery(GET_PRODUCT, {
//   variables: { id },
// });

