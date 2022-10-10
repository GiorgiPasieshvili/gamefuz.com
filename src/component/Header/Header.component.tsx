/* import assets & styles */
import Logo from "component/Logo";
import Search from "component/Search";
import ThemeToggle from "component/ThemeToggle";
import "./Header.style.scss";

/** @namespace @component/Header/Component */
export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <div className="header__menu">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
