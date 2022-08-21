/* utilities import */
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
/* assets & styles import */
import Carousel from '@component/Carousel';
import companies from '@data/Companies.json';
import './Companies.style.scss';

/** @namespace @component/Companies/Component */
export default function Companies() {
  return (
    <section className='companies section'>
      <Carousel
        title='companies'
        height={120}
        slides={6.5}
      >
        {companies.map(({id, title, image}) => (
          <SwiperSlide className='companies-item carousel-content-item' key={id} >
            <Link to={'/company/' + id} >
              <img src={image} alt={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  )
}