// import { Link } from 'react-router-dom';

// import assets and styles
import SwitcherIcon from '@style/icons/switcher.svg';
import './Switcher.style.scss';

/** @namespace @component/Switcher/Component */
export default function Switcher({ changeMode }: any) {
  return (
    <div className="Switcher" onClick={changeMode}>
      <img src={SwitcherIcon} alt="Switcher Icon" />
    </div>
  )
}