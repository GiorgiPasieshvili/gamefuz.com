/* utilities import */
import { useState } from "react";
/* import assets & styles */
import { AiFillWindows } from "react-icons/ai";
import "./Details.style.scss";
import details from "@data/Details.json";

/** @namespace @component/Details/Component */
export default function Details() {
  const [activeButton, setActiveButton] = useState(1);
  const {
    title,
    image,
    year,
    categories,
    company,
    interface_lang,
    dubbing_lang,
    crack,
    description,
    specs,
  } = details[0];

  const onButtonClick = (e: any) => {
    const buttonIndex = e.target.dataset.indexNumber;
    setActiveButton(Number(buttonIndex));
  };

  return (
    <section className="details section">
      {/* left side - image and download */}
      <div className="details__side details__side--left">
        <img className="details__image" src={image} alt={title} />
        <a className="details__link primary-button" href="/product/1">
          Download
        </a>
      </div>

      {/* right side - title, info, desc, specs */}
      <div className="details__side details__side--right">
        {/* top part of right side - title, indo, desc */}
        <div>
          {/* header of right side - game title */}
          <header className="details__header details__header--default">
            <h2 className="details__title">{title}</h2>
            <small className="details__year">{year}</small>
          </header>

          {/* section of right side - game information */}
          <section className="details__info details__section">
            <h3>information on game:</h3>
            {/* game genre */}
            <div className="details__info--genre">
              <small>genre: </small>
              {categories.map((category, index) => (
                <span key={index}>{category}</span>
              ))}
            </div>
            {/* game creator */}
            <div className="details__info--creator">
              <small>creator: </small>
              <span>{company}</span>
            </div>
            {/* game interface language */}
            <div className="details__info--lang">
              <small>interface language: </small>
              {interface_lang.map((lang, index) => (
                <span key={index}>{lang}</span>
              ))}
            </div>
            {/* game dubbing language */}
            <div className="details__info--lang">
              <small>dubbing language: </small>
              {dubbing_lang.map((lang, index) => (
                <span key={index}>{lang}</span>
              ))}
            </div>
            {/* game crack */}
            <div className="details__info--crack">
              <small>crack: </small>
              <span>{crack}</span>
            </div>
          </section>

          {/* section of right side - game description */}
          <section className="details__description details__section">
            <h3>description:</h3>
            <p>{description}</p>
          </section>
        </div>

        {/* bottom part of right side - system requirements */}
        <section className="details__requirements details__section">
          <header className="details__header details__header--secondary">
            <h3>system requirements:</h3>
            <div className="mini-buttons">
              <button
                onClick={onButtonClick}
                data-index-number={0}
                className={activeButton === 0 ? "active" : ""}
              >
                Low
              </button>
              <button
                onClick={onButtonClick}
                data-index-number={1}
                className={activeButton === 1 ? "active" : ""}
              >
                Best
              </button>
            </div>
          </header>
          {/* low system requirements */}
          <ul
            className={
              activeButton === 0
                ? "details__list details__list--active"
                : "details__list"
            }
          >
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
          {/* best system requirements */}
          <ul
            className={
              activeButton === 1
                ? "details__list details__list--active"
                : "details__list"
            }
          >
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

        <div className="details__icon">
          <AiFillWindows />
        </div>
      </div>
    </section>
  );
}
