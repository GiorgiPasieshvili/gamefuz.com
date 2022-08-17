import { Link } from 'react-router-dom';

// import assets and styles
import SectionHeader from '@component/SectionHeader';
import ProductsData from './ProductsData.json';
import './Products.style.scss';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


/** @namespace @section/Products/Component */
export default function Products({ type }: { type: string }) {
  const data = ProductsData.filter((products) => products.type === type);
  const { title, children } = data[0];

  return (
    <div className='Products section'>
      {/* section title and buttons */}
      <SectionHeader title={title} />

      {/* draggable products carousel */}
      <Swiper
        className='Carousel'
        style={{ height: 275 }}
        spaceBetween={11}
        slidesPerView={7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {children.map(({id, title, image}: any) => (
          <SwiperSlide className='Carousel-Item' key={id} >
            <Link to={'products/' + id} >
              <img src={image} alt={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}