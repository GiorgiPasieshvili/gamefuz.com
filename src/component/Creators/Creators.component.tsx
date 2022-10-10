/* utilities import */
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
/* assets & styles import */
import Carousel from "component/Carousel";
import "./Creators.style.scss";

import { useQuery } from "@apollo/client";
import { GET_CREATORS } from "query/Creators.query";

/** @namespace @component/Creators/Component */
export default function Creators() {
  const { loading, error, data } = useQuery(GET_CREATORS);

  if (loading) return <div className="preloader"></div>;
  if (error) return <p>Error..</p>;

  return (
    <section className="creators section">
      <Carousel title="creators" height={120} slides={6.5}>
        {data.creators.data.map((item: any) => (
          <SwiperSlide className="creators__item" key={item.id}>
            <Link className="creators__link" to={"/creator/" + item.id}>
              <img
                className="creators__image"
                src={item.attributes.logo.data.attributes.url}
                alt={item.attributes.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
}
