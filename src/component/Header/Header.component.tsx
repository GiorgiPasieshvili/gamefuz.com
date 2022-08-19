// import assets & styles
import Logo from '@component/Logo';
import Search from '@component/Search';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme, useThemeUpdate } from "@util/ThemeContext";
import './Header.style.scss';

/** @namespace @component/Header/Component */
export default function Header() {
  return (
      <header className="header">
        <div className="container">
          <Logo />
          <div className='header-menu'>
            <Search />
            <button className='icon' onClick={useThemeUpdate()}>
              { useTheme() === 'dark' ? <BiSun /> : <BiMoon /> }
            </button>
          </div>
        </div>
      </header>
  )
}