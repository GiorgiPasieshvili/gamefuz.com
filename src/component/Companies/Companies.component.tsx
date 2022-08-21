// import assets and styles
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
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
          <SwiperSlide className='carousel-content-item' key={id} >
            <Link to={'/company/' + id} >
              <img src={image} alt={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  )
}