// import styles
import './Header.style.scss';

// import components
import Logo from '@component/Logo';
import Search from '@component/Search';
import Switcher from '@component/Switcher';

/** @namespace @component/Header/Component */
export default function Header() {

  return (
      <header className="Header">
        <div className="container">
          <Logo />
          <div className='Header-Right'>
            <Search />
            <Switcher />
          </div>
        </div>
      </header>
  )
}