// import Slider from 'component/Slider';
import InnerSlider from "component/InnerSlider";
import Details from "component/Details";
import Products from "component/Products";
import Comments from "component/Comments";

import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "query/Product.query";

/** @namespace @route/ProductPage/Component */
export default function ProductPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <div className="preloader"></div>;
  if (error) return <p>Error..</p>;

  return (
    <>
      <InnerSlider data={data.product.data} />
      <div className="container">
        <Details data={data.product.data} />
        <Products title="similar games" type="similar" />
        <Comments />
      </div>
    </>
  );
}
