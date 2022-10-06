/* utilities import */
import { useState } from "react";
import Select from "react-select";
/* assets & style import */
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import "./Filter.style.scss";

import genres from "data/Genres.json";
import { selectStyles } from "./Filter.config";

/** @namespace @component/Filter/Component */
export default function Filter() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<any>(null);
  const [activeLangButton, setActiveLangButton] = useState(0);

  const toggleFilter = () => {
    setFilterOpen((isFilterOpen) => !isFilterOpen);
  };

  const onLangButtonClick = (e: any) => {
    e.preventDefault();
    const btnIndex = e.target.dataset.indexNumber;
    setActiveLangButton(Number(btnIndex));
  };

  return (
    <div className="filter-parent">
      <button className="filter-toggle" onClick={toggleFilter}>
        <AiOutlineMenuUnfold />
      </button>

      {/* filter options - genre, year, lang */}
      <aside className={`filter ${isFilterOpen ? "filter--active" : ""}`}>
        <header className="filter__header">
          <img className="filter__logo" src="/images/logo.svg" alt="gamefuz" />
          <button className="filter__icon icon" onClick={toggleFilter}>
            <AiOutlineClose />
          </button>
        </header>
        <form className="filter__form">
          {/* select genres */}
          <label className="filter__label">Genre:</label>
          <Select
            className="filter__select"
            styles={selectStyles}
            closeMenuOnSelect={false}
            value={selectedGenre}
            onChange={setSelectedGenre}
            options={genres}
            isMulti
          />

          {/* choose year */}
          <label className="filter__label">
            Year: <span>2020</span>
          </label>
          <input type="range" />
          {/* choose language */}

          <label className="filter__label">Language:</label>
          <div className="mini-buttons">
            <button
              onClick={onLangButtonClick}
              data-index-number={0}
              className={activeLangButton === 0 ? "active" : ""}
            >
              Eng
            </button>
            <button
              onClick={onLangButtonClick}
              data-index-number={1}
              className={activeLangButton === 1 ? "active" : ""}
            >
              Rus
            </button>
            <button
              onClick={onLangButtonClick}
              data-index-number={2}
              className={activeLangButton === 2 ? "active" : ""}
            >
              Multi
            </button>
          </div>

          <button className="filter__button primary-button">Filter</button>
        </form>
      </aside>
    </div>
  );
}
