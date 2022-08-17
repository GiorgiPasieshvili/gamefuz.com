// import assets and styles
import LeftIcon from '@style/icons/left.svg';
import RightIcon from '@style/icons/right.svg';
import './SectionHeader.style.scss';

/** @namespace @component/SectionHeader/Component */
export default function SectionHeader({ title }: { title: string }) {

  return (
    <div className='SectionHeader'>
      <h2 className='SectionHeader-Title'>{title}</h2>

      {/* left and right buttons */}
      <div className='SectionHeader-Buttons'>
        <button>
          <img src={LeftIcon} alt="Left Icon" />
        </button>

        <button>
          <img src={RightIcon} alt="Right Icon" />
        </button>
      </div>
    </div>
  )
}