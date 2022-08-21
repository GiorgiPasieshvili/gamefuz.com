import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { AiOutlineMenuUnfold , AiOutlineClose} from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import './Filter.style.scss';

const animatedComponents = makeAnimated();

const options = [
  { value: 'Arcade', label: 'arcade' },
  { value: 'Action', label: 'action' },
  { value: 'Adventure', label: 'adventure' },
];

/** @namespace @component/Filter/Component */
export default function Filter() {
  const [isFilterActive, setFilterActive] = useState(false);
  const [activeLangButton, setActiveLangButton] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleActive = () => {
    setFilterActive(isFilterActive => !isFilterActive);
  }

  const onSelect = (selectedOption: any) => {
    setSelectedOption(selectedOption)
  }

  const onBtnClick = (e: any) => {
    const btnIndex = e.target.dataset.indexNumber;
    setActiveLangButton(Number(btnIndex));
  }

  return (
    <div className={`filter ${isFilterActive ? 'filter-active' : ''}`}>
      <button
        className='filter-toggle'
        onClick={toggleActive}
        >
        <AiOutlineMenuUnfold />
      </button>
      <div className='filter-content'>
        <header className='filter-content-header'>
          <img src="/assets/logo.svg" alt="gamefuz" />
          <button onClick={toggleActive} className='icon'>
            <AiOutlineClose />
          </button>
        </header>

        <section className='filter-content-section'>
          <h4>Genre:</h4>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            value={selectedOption}
            onChange={onSelect}
            options={options}
            isMulti
          />
        </section>
    
        <section className='filter-content-section'>
          <h4>Year:</h4>
          <input className='filter-content-section-range' type="range" />
        </section>

        <section className='filter-content-section'>
          <h4>Language:</h4>
          <div className='mini-buttons'>
            <button
              onClick={onBtnClick}
              data-index-number={0}
              className={activeLangButton === 0 ? 'active' : ''}
            >
              Eng
            </button>
            <button
              onClick={onBtnClick}
              data-index-number={1}
              className={activeLangButton === 1 ? 'active' : ''}
            >
              Rus
            </button>
            <button
              onClick={onBtnClick}
              data-index-number={2}
              className={activeLangButton === 2 ? 'active' : ''}
            >
              Multi
            </button>
          </div>
        </section>

        <button className='filter-content-submit'>Filter</button>
      </div>
    </div>
  )
}