// import components
import Products from "@component/Products";
import Companies from "@component/Companies";
import Slider from "@component/Slider";
import Filter from "@component/Filter";

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

// import { useQuery } from '@apollo/client';
// import { GET_PRODUCTS } from '@query/Products.query';

// const { loading, error, data } = useQuery(GET_PRODUCTS);

// if (loading) return <p>Loading..</p>;
// if (error) return <p>Error..</p>;

// const { products: { data: products } } = data;
