/* utilities import */
import { useState } from "react";
import "./Preloader.style.scss";

/** @namespace @component/Preloader/Component */
export default function Preloader() {
  const [showMessage, setShowMessage] = useState(false);

  setTimeout(() => {
    setShowMessage(true);
  }, 2500);

  return (
    <div className="preloader">
      <span className={`preloader__message ${showMessage ? "show" : ""}`}>
        please wait...
      </span>
    </div>
  );
}
