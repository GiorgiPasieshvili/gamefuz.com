// import components
import Products from '@section/Products';
import Companies from '@section/Companies';
import Slider from '@component/Slider';

/** @namespace @route/Homepage/Component */
export default function Homepage() {
  return (
    <>
      <Slider />
      <div className="container">
        <Products type="top" />
        <Products type="recent" />
        <Companies />
        <Products type="trailers" />
      </div>
    </>
  )
}

// import { useQuery } from '@apollo/client';
// import { GET_PRODUCTS } from '@query/Products.query';

// const { loading, error, data } = useQuery(GET_PRODUCTS);

// if (loading) return <p>Loading..</p>;
// if (error) return <p>Error..</p>;

// const { products: { data: products } } = data;