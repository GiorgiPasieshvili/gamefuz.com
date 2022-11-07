/* utilities import */
import { SwiperSlide } from "swiper/react";
/* assets & styles import */
import Preloader from "component/Preloader";
import Carousel from "component/Carousel";
import "./Creators.style.scss";

import { useQuery } from "@apollo/client";
import { GET_CREATORS } from "query/Creators.query";

import { useNavigate } from "react-router-dom";

/** @namespace @component/Creators/Component */
export default function Creators() {
  const { loading, error, data } = useQuery(GET_CREATORS);

  const navigate = useNavigate();

  const handleNavigate = (creatorId: any) => {
    navigate("/filter", {
      state: {
        creator: {
          value: creatorId,
        },
      },
    });
  };

  if (loading) return <Preloader />;
  if (error) return <p>Error..</p>;

  return (
    <section className="creators section">
      <Carousel title="creators" height={120} slides={0.92}>
        {data.creators.data.map((item: any) => (
          <SwiperSlide className="creators__item" key={item.id}>
            <button
              className="creators__button"
              onClick={() => handleNavigate(item.id)}
            >
              <img
                className="creators__image"
                src={item.attributes.logo.data.attributes.url}
                alt={item.attributes.title}
              />
            </button>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
}
