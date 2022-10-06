/* utilities import */
import { useState } from "react";
/* import assets & styles */
import { AiFillWindows } from "react-icons/ai";
import "./Details.style.scss";
import details from "data/Details.json";

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
    <article className="details section">
      <aside>
        <img className="details__picture" src={image} alt={title} />
        <a className="details__download primary-button" href="/product/1">
          Download
        </a>
      </aside>

      <header>
        <h2 className="details__heading details__heading--big">
          {title}
          <span>{year}</span>
        </h2>
        <div className="details__icon">
          <AiFillWindows />
        </div>
      </header>

      <main>
        <section>
          <h3 className="details__heading details__heading--small">
            information on game:
          </h3>
          <ul className="details__list">
            <li>
              Genre:
              {categories.map((category, index) => (
                <span className="details__comma" key={index}>
                  {category}
                </span>
              ))}
            </li>
            <li>
              Creator:
              <span>{company}</span>
            </li>
            <li>
              Interface Language:
              {interface_lang.map((lang, index) => (
                <span className="details__bar" key={index}>
                  {lang}
                </span>
              ))}
            </li>
            <li>
              Dubbing Language:
              {dubbing_lang.map((lang, index) => (
                <span className="details__bar" key={index}>
                  {lang}
                </span>
              ))}
            </li>
            <li>
              Crack:
              <span>{crack}</span>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="details__heading details__heading--small">
            description:
          </h3>
          <p className="details__paragraph">{description}</p>
        </section>
      </main>

      <footer>
        <div className="details__flex">
          <h3 className="details__heading details__heading--small">
            system requirements:
          </h3>
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
        </div>

        {/* low system requirements */}
        <ul
          className={`details__list details__list--secondary ${
            activeButton === 0 ? "details__list--active" : ""
          }`}
        >
          <li>
            OS:
            <span>{specs.low.os}</span>
          </li>
          <li>
            CPU:
            <span>{specs.low.cpu}</span>
          </li>
          <li>
            RAM:
            <span>{specs.low.ram}</span>
          </li>
          <li>
            GPU:
            <span>{specs.low.gpu}</span>
          </li>
          <li>
            Sound Card:
            <span>{specs.low.sound}</span>
          </li>
          <li>
            Free Space:
            <span>{specs.low.space}</span>
          </li>
        </ul>
        {/* best system requirements */}
        <ul
          className={`details__list details__list--secondary ${
            activeButton === 1 ? "details__list--active" : ""
          }`}
        >
          <li>
            OS:
            <span>{specs.best.os}</span>
          </li>
          <li>
            CPU:
            <span>{specs.best.cpu}</span>
          </li>
          <li>
            RAM:
            <span>{specs.best.ram}</span>
          </li>
          <li>
            GPU:
            <span>{specs.best.gpu}</span>
          </li>
          <li>
            Sound Card:
            <span>{specs.best.sound}</span>
          </li>
          <li>
            Free Space:
            <span>{specs.best.space}</span>
          </li>
        </ul>
      </footer>
    </article>
  );
}
