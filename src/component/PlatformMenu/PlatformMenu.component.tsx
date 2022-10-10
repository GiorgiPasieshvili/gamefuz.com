/* import assets & styles */
import { AiFillAndroid } from "react-icons/ai";
import "./PlatformMenu.style.scss";

/** @namespace @component/PlatformMenu/Component */
export default function PlatformMenu() {
  return (
    <div className="switcher">
      <button className="switcher__button icon">
        <AiFillAndroid />
      </button>
      <div className="switcher__options"></div>
    </div>
  );
}
