/* import assets & styles */
import { AiFillAndroid } from "react-icons/ai";
import "./Switcher.style.scss";

/** @namespace @component/Switcher/Component */
export default function Switcher() {
  return (
    <div className="switcher">
      <button className="switcher__button icon">
        <AiFillAndroid />
      </button>
      <div className="switcher__options"></div>
    </div>
  );
}
