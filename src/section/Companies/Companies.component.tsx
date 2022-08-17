// import assets and styles
import SectionHeader from '@component/SectionHeader';
import Carousel from '@component/Carousel';
import CompaniesData from './CompaniesData.json';
import './Companies.style.scss';

/** @namespace @section/Companies/Component */
export default function Companies() {
  return (
    <div className='Companies section'>
      {/* section title and buttons */}
      <SectionHeader title="Companies" />

      {/* draggable companies carousel */}
      <Carousel data={CompaniesData} link='companies' />
    </div>
  )
}