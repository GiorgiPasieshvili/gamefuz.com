// import assets and styles
import { AiFillWindows } from 'react-icons/ai';
import details from './Details.data.json';
import './Details.style.scss';

/** @namespace @component/GameDetails/Component */
export default function GameDetails() {
  const { title, image, year, categories, company, interface_lang, dubbing_lang, crack, description, specs } = details[0];

  return (
    <section className='gamedetails section'>

      <div className='gamedetails-leftside'>
        <img src={image} alt={title} />
        <a className='btn-primary' href="/product/1">download</a>
      </div>
      
      <div className='gamedetails-rightside'>
        <div className='gamedetails-rightside-top'>
          <header className='gamedetails-name'>
            <h2>{title}</h2>
            <small>{year}</small>
          </header>

          <section className='gamedetails-info gamedetails-section'>
            <h3>information on game:</h3>
            <div className='gamedetails-info-genre'>
              <small>genre: </small>
              {categories.map(category => (
                <span>{category}</span>
              ))}
            </div>
            <div className='gamedetails-info-creator'>
              <small>creator: </small>
              <span>{company}</span>
            </div>
            <div className='gamedetails-info-lang'>
              <small>interface language: </small>
              {interface_lang.map(lang => (
                <span>{lang}</span>
              ))}
            </div>
            <div className='gamedetails-info-lang'>
              <small>dubbing language: </small>
              {dubbing_lang.map(lang => (
                <span>{lang}</span>
              ))}
            </div>
            <div className='gamedetails-info-crack'>
              <small>crack: </small>
              <span>{crack}</span>
            </div>
          </section>

          <section className='gamedetails-desc gamedetails-section'>
            <h3>description:</h3>
            <p>{description}</p>
          </section>
        </div>

        <section className='gamedetails-specs gamedetails-section'>
          <header>
            <h3>system requirements:</h3>
            <ul>
              <li><button className='btn-mini'>low</button></li>
              <li><button className='btn-mini btn-mini-active'>best</button></li>
            </ul>
          </header>
          <ul className='gamedetails-specs-list'>
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
        </section>

        <div className='gamedetails-icon'>
            <AiFillWindows />
        </div>
      </div>
    </section>
  )
}