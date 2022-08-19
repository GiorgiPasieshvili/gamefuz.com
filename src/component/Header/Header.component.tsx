// import styles
import './Header.style.scss';

// import components
import Logo from '@component/Logo';
import Search from '@component/Search';

import { BiSun, BiMoon } from 'react-icons/bi';

/** @namespace @component/Header/Component */
export default function Header({ darkTheme, toggleTheme }: any) {

  return (
      <header className="header">
        <div className="container">
          <Logo />
          <div className='header-menu'>
            <Search />
            <button className='icon' onClick={toggleTheme}>
              { darkTheme ? <BiSun /> : <BiMoon /> }
            </button>
          </div>
        </div>
      </header>
  )
}