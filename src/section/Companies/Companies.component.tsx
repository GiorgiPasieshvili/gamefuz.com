import { Link } from 'react-router-dom';

// import assets and styles
import SectionHeader from '@component/SectionHeader';
import CompaniesData from './CompaniesData.json';
import './Companies.style.scss';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

/** @namespace @section/Companies/Component */
export default function Companies() {
  return (
    <div className='Companies section'>
      {/* section title and buttons */}
      <SectionHeader title="Companies" />

      {/* draggable companies carousel */}
      <Swiper
        className='Carousel'
        style={{ height: 116 }}
        spaceBetween={11}
        slidesPerView={6.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CompaniesData.map(({id, title, image}: any) => (
          <SwiperSlide className='Carousel-Item' key={id} >
            <Link to={'companies/' + id} >
              <img src={image} alt={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}