/* utilities import */
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
/* assets & style import */
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
// import { BsChevronDown } from 'react-icons/bs';
import "./Filter.style.scss";
import options from "@data/Options.json";
import { selectStyles } from "./Filter.config";
const animatedComponents = makeAnimated();

/** @namespace @component/Filter/Component */
export default function Filter() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<any>(null);
  const [activeLangButton, setActiveLangButton] = useState(0);

  const toggleFilter = () => {
    setFilterOpen((isFilterOpen) => !isFilterOpen);
  };

  const onLangButtonClick = (e: any) => {
    const btnIndex = e.target.dataset.indexNumber;
    setActiveLangButton(Number(btnIndex));
  };

  return (
    <div className={isFilterOpen ? "filter filter-active" : "filter"}>
      {/* filter open/close button */}
      <button className="filter-toggle" onClick={toggleFilter}>
        <AiOutlineMenuUnfold />
      </button>

      {/* filter options - genre, year, lang */}
      <div className="filter-content">
        <div className="filter-content-top">
          <header className="filter-content-top-header">
            <img src="/assets/logo.svg" alt="gamefuz" />
            <button onClick={toggleFilter} className="icon">
              <AiOutlineClose />
            </button>
          </header>

          {/* select genres */}
          <section className="filter-content-section">
            <header>
              <h4>Genre:</h4>
            </header>
            <Select
              className="filter-content-select"
              styles={selectStyles}
              closeMenuOnSelect={false}
              components={animatedComponents}
              value={selectedGenre}
              onChange={setSelectedGenre}
              options={options}
              isMulti
            />
          </section>

          {/* year selection */}
          <section className="filter-content-section">
            <header>
              <h4>Year:</h4>
              <small>2020</small>
            </header>
            <input type="range" />
          </section>

          {/* choose language */}
          <section className="filter-content-section">
            <header>
              <h4>Language:</h4>
            </header>
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
          </section>
        </div>

        {/* filter search button */}
        <button className="filter-content-button primary-button">Filter</button>
      </div>
    </div>
  );
}
