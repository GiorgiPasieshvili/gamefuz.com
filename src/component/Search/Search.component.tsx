/* import assets & styles */
import { BiSearch } from "react-icons/bi";
import "./Search.style.scss";

import { useState, useEffect } from "react";

/** @namespace @component/Search/Component */
export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const onChange = (e: any) => {
    setInputValue(e.target.value);
    setSearchActive(true);
  };

  const onDocClick = (e: any) => {
    if (
      !e.target.classList.contains("search__result") &&
      !e.target.classList.contains("search__input") &&
      !e.target.classList.contains("search__icon")
    ) {
      setSearchActive(false);
    }
  };

  const toggleActive = () => {
    setSearchActive((active) => !active);
  };

  useEffect(() => {
    document.addEventListener("click", onDocClick);

    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  return (
    <div className={`search ${searchActive ? "active" : ""}`}>
      <div className="search__bar">
        <input
          onChange={onChange}
          value={inputValue}
          className="search__input"
          type="text"
          placeholder="Search.."
        />
        <button onClick={toggleActive} className="search__icon icon">
          <BiSearch style={{ pointerEvents: "none" }} />
        </button>
      </div>
      <div className="search__result">
        <div className="search__item">
          <a href="/#">
            <img src="/images/mini/alanwake.jpg" alt="" />
            <div className="search__info">
              <span>
                Alan Wake - Remastered <span>2021</span>
              </span>
              <p>
                Alan Wake is a bestselling crime fiction author suffering from a
                two-year stretch of writer's block.
              </p>
            </div>
          </a>
        </div>
        <div className="search__item">
          <a href="/#">
            <img src="/images/mini/dolmen.png" alt="" />
            <div className="search__info">
              <span>
                Dolmen <span>2020</span>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex
                exercitationem veritatis. Beatae, ipsa.
              </p>
            </div>
          </a>
        </div>
        <div className="search__item">
          <a href="/#">
            <img src="/images/mini/eternals.png" alt="" />
            <div className="search__info">
              <span>
                Eternals <span>2019</span>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                minus mollitia inventore ad.
              </p>
            </div>
          </a>
        </div>
        <div className="search__item">
          <a href="/#">
            <img src="/images/mini/jedi.png" alt="" />
            <div className="search__info">
              <span>
                Jedi: Fallen Orden <span>2020</span>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                exercitationem provident magnam rem ab dolorum?
              </p>
            </div>
          </a>
        </div>
        <button className="search__button">Find More...</button>
      </div>
    </div>
  );
}
