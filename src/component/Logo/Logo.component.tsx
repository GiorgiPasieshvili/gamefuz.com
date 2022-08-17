import { Link } from 'react-router-dom';

// import assets
import LogoIcon from '@style/icons/logo2.svg';

/** @namespace @component/Logo/Component */
export default function Logo() {

  return (
      <div className="Logo">
          <Link to="/">
            <img src={LogoIcon} alt="Good Games" />
          </Link>
      </div>
  )
}