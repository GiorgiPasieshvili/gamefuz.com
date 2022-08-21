/* utilities import */
import { useState } from 'react';
/* import assets & styles */
import { AiFillWindows } from 'react-icons/ai';
import './Details.style.scss';
import details from '@data/Details.json';

/** @namespace @component/Details/Component */
export default function Details() {
  const [activeButton, setActiveButton] = useState(1);
  const { title, image, year, categories, company, interface_lang, dubbing_lang, crack, description, specs } = details[0];

  const onButtonClick = (e: any) => {
    const buttonIndex = e.target.dataset.indexNumber;
    setActiveButton(Number(buttonIndex));
  }

  return (
    <section className='details section'>

      {/* left side - image and download */}
      <div className='details-left'>
        <img src={image} alt={title} />
        <a className='primary-button' href="/product/1">Download</a>
      </div>
      
      {/* right side - title, info, desc, specs */}
      <div className='details-right'>

        {/* top part of right side - title, indo, desc */}
        <div>
          {/* header of right side - game title */}
          <header className='details-title'>
            <h2>{title}</h2>
            <small>{year}</small>
          </header>
          
          {/* section of right side - game information */}
          <section className='details-info details-section'>
            <h3>information on game:</h3>
            <ul>
              {/* game genre */}
              <li>
                <small>genre: </small>
                {categories.map((category, index) => (
                  <span key={index}>{category}</span>
                ))}
              </li>
              {/* game creator */}
              <li>
                <small>creator: </small>
                <span>{company}</span>
              </li>
              {/* game interface language */}
              <li>
                <small>interface language: </small>
                {interface_lang.map((lang, index) => (
                  <span key={index}>{lang}</span>
                ))}
              </li>
              {/* game dubbing language */}
              <li>
                <small>dubbing language: </small>
                {dubbing_lang.map((lang, index) => (
                  <span key={index}>{lang}</span>
                ))}
              </li>
              {/* game crack */}
              <li>
                <small>crack: </small>
                <span>{crack}</span>
              </li>
            </ul>
          </section>

          {/* section of right side - game description */}
          <section className='details-section'>
            <h3>description:</h3>
            <p>{description}</p>
          </section>
        </div>

        {/* bottom part of right side - system specs */}
        <section className='details-specs details-section'>

          <header>
            <h3>system requirements:</h3>
            <div className='mini-buttons'>
              <button
                onClick={onButtonClick}
                data-index-number={0}
                className={activeButton === 0 ? 'active' : ''}
              >
                Low
              </button>
              <button
                onClick={onButtonClick}
                data-index-number={1}
                className={activeButton === 1 ? 'active' : ''}
              >
                Best
              </button>
            </div>
          </header>
          {/* low system specs */}
          <ul className={activeButton === 0 ? 'active' : ''} >
            <li>
              <small>OS: </small>
              <span>{specs.low.os}</span>
            </li>
            <li>
              <small>CPU: </small>
              <span>{specs.low.cpu}</span>
            </li>
            <li>
              <small>RAM: </small>
              <span>{specs.low.ram}</span>
            </li>
            <li>
              <small>GPU: </small>
              <span>{specs.low.gpu}</span>
            </li>
            <li>
              <small>Sound Card: </small>
              <span>{specs.low.sound}</span>
            </li>
            <li>
              <small>Free Space: </small>
              <span>{specs.low.space}</span>
            </li>
          </ul>
          {/* best system specs */}
          <ul className={activeButton === 1 ? 'active' : ''} >
            <li>
              <small>OS: </small>
              <span>{specs.best.os}</span>
            </li>
            <li>
              <small>CPU: </small>
              <span>{specs.best.cpu}</span>
            </li>
            <li>
              <small>RAM: </small>
              <span>{specs.best.ram}</span>
            </li>
            <li>
              <small>GPU: </small>
              <span>{specs.best.gpu}</span>
            </li>
            <li>
              <small>Sound Card: </small>
              <span>{specs.best.sound}</span>
            </li>
            <li>
              <small>Free Space: </small>
              <span>{specs.best.space}</span>
            </li>
          </ul>
        </section>

        <div className='details-icon'> <AiFillWindows /> </div>
      </div>
    </section>
  )
}