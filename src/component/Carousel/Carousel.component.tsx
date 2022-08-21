/* utilities import */
import { useState } from 'react';
/* swiper module import */
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
/* import assets & styles */
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import './Carousel.style.scss';

/** @namespace @section/Products/Component */
export default function Carousel({ title, height, slides, children }: any) {
  const [prevRef, setPrevRef] = useState<any>(null);
  const [nextRef, setNextRef] = useState<any>(null);
  
  return (
    <div className='carousel'>

      {/* section title and buttons */}
      <header className='carousel-header section-header'>
        <h2 className='section-header-title'>{title}</h2>

        {/* left and right buttons */}
        <div className='carousel-header-buttons'>
          <button ref={(node) => setPrevRef(node)} >
            <BiChevronLeft />
          </button>
          <button ref={(node) => setNextRef(node)} >
            <BiChevronRight />
          </button>
        </div>
      </header>

      {/* draggable products carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef,
          nextEl: nextRef,
        }}
        speed={800}

        className='carousel-content'
        style={{ height: height }}
        spaceBetween={6}
        slidesPerView={slides}
        slidesPerGroup={slides}
      >
        {children}
      </Swiper>
    </div>
  )
}