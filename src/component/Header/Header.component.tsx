/* import assets & styles */
import Logo from "component/Logo";
import Search from "component/Search";
import SwitherTheme from "component/SwitcherTheme";
import "./Header.style.scss";

/** @namespace @component/Header/Component */
export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <div className="header__menu">
          <Search />
          <SwitherTheme />
        </div>
      </div>
    </header>
  );
}
