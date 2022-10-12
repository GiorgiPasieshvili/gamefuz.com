/* utilities import */
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
/* assets & styles import */
import Carousel from "component/Carousel";
import "./Products.style.scss";

import { useQuery } from "@apollo/client";
import { GET_RECENT_PRODUCTS } from "query/RecentProducts.query";

/** @namespace @component/Products/Component */
export default function Products({ title, type }: any) {
  const { loading, error, data } = useQuery(GET_RECENT_PRODUCTS);

  if (loading) return <div className="preloader"></div>;
  if (error) return <p>Error..</p>;

  return (
    <section className="products section">
      <Carousel title={title} height={298} slides={1} loop>
        {data.products.data.map((item: any) => (
          <SwiperSlide className="products__item" key={item.id}>
            <Link className="products__link" to={"/product/" + item.id}>
              <img
                className="products__image"
                src={item.attributes.thumbnail.data.attributes.url}
                alt={item.attributes.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
}
