/* utilities import */
import { Link } from "react-router-dom";

/** @namespace @component/Logo/Component */
export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/images/logo.svg" alt="gamefuz" />
      </Link>
    </div>
  );
}
