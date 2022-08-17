// import assets and styles
import SectionHeader from '@component/SectionHeader';
import Carousel from '@component/Carousel';
import ProductsData from './ProductsData.json';
import './Products.style.scss';

/** @namespace @section/Products/Component */
export default function Products({ type }: { type: string }) {
  const data = ProductsData.filter((products) => products.type === type);
  const { title, children } = data[0];

  return (
    <div className='Products section'>
      {/* section title and buttons */}
      <SectionHeader title={title} />

      {/* draggable products carousel */}
      <Carousel data={children} link='product' />
    </div>
  )
}