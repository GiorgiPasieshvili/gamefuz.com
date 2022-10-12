/* utilities import */
import { useState } from "react";
/* import assets & styles */
import { AiFillWindows } from "react-icons/ai";
import "./Details.style.scss";

/** @namespace @component/Details/Component */
export default function Details({ data }: any) {
  const [activeButton, setActiveButton] = useState(1);

  const onButtonClick = (e: any) => {
    const buttonIndex = e.target.dataset.indexNumber;
    setActiveButton(Number(buttonIndex));
  };

  return (
    <article className="details section">
      <aside>
        <img
          className="details__picture"
          src={data.attributes.thumbnail.data.attributes.url}
          alt={data.attributes.title}
        />
        <a
          className="details__download primary-button"
          download
          target="_blank"
          rel="noreferrer"
          href={data.attributes.download.data.attributes.url}
        >
          Download
        </a>
      </aside>

      <header>
        <h2 className="details__heading details__heading--big">
          {data.attributes.title}
          <span>{data.attributes.release}</span>
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
              {data.attributes.genres.data.map((item: any, index: number) => (
                <span className="details__comma" key={index}>
                  {item.attributes.title}
                </span>
              ))}
            </li>
            <li>
              Creator:
              {data.attributes.creators.data.map((item: any, index: number) => (
                <span className="details__comma" key={index}>
                  {item.attributes.title}
                </span>
              ))}
            </li>
            <li>
              Interface Language:
              <span>
                {data.attributes.interface_lang.replaceAll("_", " | ")}
              </span>
            </li>
            <li>
              Dubbing Language:
              <span>{data.attributes.dubbing_lang.replaceAll("_", " | ")}</span>
            </li>
            <li>
              Crack:
              <span>{data.attributes.crack}</span>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="details__heading details__heading--small">
            description:
          </h3>
          <p className="details__paragraph">{data.attributes.description}</p>
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
            <span>{data.attributes.low_os}</span>
          </li>
          <li>
            CPU:
            <span>{data.attributes.low_cpu}</span>
          </li>
          <li>
            RAM:
            <span>{data.attributes.low_ram}</span>
          </li>
          <li>
            GPU:
            <span>{data.attributes.low_gpu}</span>
          </li>
          <li>
            Sound Card:
            <span>{data.attributes.low_sound}</span>
          </li>
          <li>
            Free Space:
            <span>{data.attributes.low_space}</span>
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
            <span>{data.attributes.best_os}</span>
          </li>
          <li>
            CPU:
            <span>{data.attributes.best_cpu}</span>
          </li>
          <li>
            RAM:
            <span>{data.attributes.best_ram}</span>
          </li>
          <li>
            GPU:
            <span>{data.attributes.best_gpu}</span>
          </li>
          <li>
            Sound Card:
            <span>{data.attributes.best_sound}</span>
          </li>
          <li>
            Free Space:
            <span>{data.attributes.best_space}</span>
          </li>
        </ul>
      </footer>
    </article>
  );
}
