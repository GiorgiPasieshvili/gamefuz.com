import SearchIcon from '@style/icons/search.svg';
import './Search.style.scss';

/** @namespace @component/Search/Component */
export default function Search() {
  return (
    <div className="search">
      <div className='search-bar' >
        <input type='text' placeholder='Search..' />
        <img src={SearchIcon} alt="Search Icon" />
      </div>
      <div className='search-results'></div>
    </div>
  )
}