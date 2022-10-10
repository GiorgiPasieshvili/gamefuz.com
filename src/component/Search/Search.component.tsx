/* import assets & styles */
import { BiSearch } from "react-icons/bi";
import "./Search.style.scss";

/** @namespace @component/Search/Component */
export default function Search() {
  return (
    <div className="search">
      <div className="search__bar">
        <input className="search__input" type="text" placeholder="Search.." />
        <button className="search__icon icon">
          <BiSearch />
        </button>
      </div>
      <div className="search__result"></div>
    </div>
  );
}
