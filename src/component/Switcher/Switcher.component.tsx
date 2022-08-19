// import assets and styles
import { AiFillAndroid } from 'react-icons/ai';
import './Switcher.style.scss';

/** @namespace @component/Switcher/Component */
export default function Switcher() {
  return (
    <div className="switcher" >
      <button className='icon'>
        <AiFillAndroid />
      </button>
      <div className='switcher-options'>

      </div>
    </div>
  )
}