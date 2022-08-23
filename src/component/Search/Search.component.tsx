/* import assets & styles */
import { BiSearch } from "react-icons/bi";
import "./Search.style.scss";

/** @namespace @component/Search/Component */
export default function Search() {
  return (
    <div className="search">
      <div className="search-bar">
        <input type="text" placeholder="Search.." />
        <button className="icon">
          <BiSearch />
        </button>
      </div>
      <div className="search-results"></div>
    </div>
  );
}
