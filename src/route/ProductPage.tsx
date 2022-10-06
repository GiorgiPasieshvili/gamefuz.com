// import Slider from 'component/Slider';
import InnerSlider from "component/InnerSlider";
import Details from "component/Details";
import Products from "component/Products";
import Comments from "component/Comments";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

/** @namespace @route/ProductPage/Component */
export default function ProductPage() {
  const id = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
// import { useQuery } from '@apollo/client';
// import { GET_PRODUCT } from '@query/Product.query';
// import Categories from '@component/Categories';

// const { id } = useParams()
// const { loading, error, data } = useQuery(GET_PRODUCT, {
//   variables: { id },
// });

// if (loading) return <p>Loading...</p>
// if (error) return <p>Error...</p>

// const { product: { data: { attributes } } } = data;
// const { title, description, release, categories: { data: categories } } = attributes;
