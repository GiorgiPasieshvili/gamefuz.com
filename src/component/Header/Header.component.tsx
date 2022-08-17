// import styles
import './Header.style.scss';

// import components
import Logo from '@component/Logo';
import Search from '@component/Search';

import DayIcon from '@style/icons/daymode.svg';
import NightIcon from '@style/icons/nightmode.svg';

/** @namespace @component/Header/Component */
export default function Header({ isNightMode, setNightMode }: any) {

  return (
      <header className="Header">
        <div className="container">
          <Logo />
          <div className='Header-Right'>
            <Search />
            <img
              onClick={() => setNightMode(!isNightMode)}
              src={isNightMode ? DayIcon : NightIcon}
              alt="Switcher Icon"
            />
          </div>
        </div>
      </header>
  )
}