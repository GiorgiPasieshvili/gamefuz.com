// import { Link } from 'react-router-dom';
import SearchIcon from '@style/icons/search.svg';

import './Search.style.scss';

/** @namespace @component/Search/Component */
export default function Search() {

  return (
    <div className="Search">
      <div className='Search-Bar' >
        <input type='text' placeholder='Search..' />
        <img src={SearchIcon} alt="Search Icon" />
      </div>
      <div className='Search-Results'></div>
    </div>
  )
}