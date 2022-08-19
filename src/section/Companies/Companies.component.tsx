// import assets and styles
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import Carousel from '@component/Carousel';
import companies from './CompaniesData.json';
import './Companies.style.scss';

/** @namespace @section/Companies/Component */
export default function Companies() {
  return (
    <div className='companies section'>
      <Carousel
        title='companies'
        height={116}
        slides={6.5}
      >
        {companies.map(({id, title, image}) => (
          <SwiperSlide className='carousel-content-item' key={id} >
            <Link to={'company/' + id} >
              <img src={image} alt={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  )
}