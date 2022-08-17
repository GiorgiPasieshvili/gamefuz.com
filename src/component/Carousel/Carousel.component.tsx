import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from "framer-motion";

// import assets and styles
import './Carousel.style.scss';

/** @namespace @component/Carousel/Component */
export default function Carousel({ data, link }: any) {

  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls()

  useEffect(() => {
    const scrollWidth = carousel.current?.scrollWidth;
    const offsetWidth = carousel.current?.offsetWidth;
    if(scrollWidth && offsetWidth) {
      setWidth(scrollWidth - offsetWidth);
    }
  }, [])

  const dragStart = (e: any) => {
    dragControls.start(e, { snapToCursor: true });
  }

  return (
    <motion.div
      className='Carousel'
      ref={carousel}
    >
      <motion.div
        className='Carousel-Inner'
        drag="x"
        dragControls={dragControls}
        dragConstraints={{right: 0, left: -width}}
      >

        {data.map(({id, title, image}: any) => (
          <motion.div
            className='Carousel-Item'
            key={id}
          >
            <Link to={link + '/' + id} >
              <img src={image} alt={title} 
              onPointerDownCapture={dragStart}
               />
            </Link>
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
  )
}