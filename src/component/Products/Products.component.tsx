/* utilities import */
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
/* assets & styles import */
import Carousel from '@component/Carousel';
import products from '@data/Products.json';
import './Products.style.scss';

/** @namespace @component/Products/Component */
export default function Products({ type }: { type: string }) {
  const { title, content } = products.filter((item) => item.type === type)[0];
  
  return (
    <section className='products section'>
      <Carousel
        title={title}
        height={280}
        slides={7}
      >
        {content.map(({id, title, image}) => (
          <SwiperSlide className='products-item carousel-content-item' key={id} >
            <Link to={'/product/' + id} >
              <img src={image} alt={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  )
}