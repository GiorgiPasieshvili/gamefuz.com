import { Link } from 'react-router-dom';
import LogoIcon from '@style/icons/logo2.svg';

/** @namespace @component/Logo/Component */
export default function Logo() {
  return (
      <div className="logo">
          <Link to="/">
            <img src={LogoIcon} alt="gamefuz" />
          </Link>
      </div>
  )
}