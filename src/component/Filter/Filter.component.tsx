/* utilities import */
import { useState } from "react";
import Select from "react-select";
/* assets & style import */
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import "./Filter.style.scss";

import { selectStyles } from "./Filter.config";

import { useQuery } from "@apollo/client";
import { GET_ALL_GENRES } from "query/AllGenres.query";
import { GET_ALL_CREATORS } from "query/AllCreators.query";

/** @namespace @component/Filter/Component */
export default function Filter() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<any>(null);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);
  const [activeIntLangButton, setActiveIntLangButton] = useState(0);
  const [activeDubLangButton, setActiveDubLangButton] = useState(0);

  const toggleFilter = () => {
    setFilterOpen((isFilterOpen) => !isFilterOpen);
  };

  const onIntLangButtonClick = (e: any) => {
    e.preventDefault();
    const btnIndex = e.target.dataset.indexNumber;
    setActiveIntLangButton(Number(btnIndex));
  };

  const onDubLangButtonClick = (e: any) => {
    e.preventDefault();
    const btnIndex = e.target.dataset.indexNumber;
    setActiveDubLangButton(Number(btnIndex));
  };

  const handleFilterButtonClick = (e: any) => {
    e.preventDefault();
  };

  const {
    loading: genresLoading,
    error: genresError,
    data: genresData,
  } = useQuery(GET_ALL_GENRES);
  const {
    loading: creatorsLoading,
    error: creatorsError,
    data: creatorsData,
  } = useQuery(GET_ALL_CREATORS);

  if (genresLoading || creatorsLoading)
    return <div className="preloader"></div>;
  if (genresError || creatorsError) return <p>Error..</p>;

  const genresList = genresData.genres.data.map((item: any) => ({
    value: item.attributes.title,
    label: item.attributes.title,
  }));

  const creatorsList = creatorsData.creators.data.map((item: any) => ({
    value: item.attributes.title,
    label: item.attributes.title,
  }));

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
            options={genresList}
            isMulti
          />

          {/* select creators */}
          <label className="filter__label">Creator:</label>
          <Select
            className="filter__select"
            styles={selectStyles}
            value={selectedCreator}
            onChange={setSelectedCreator}
            options={creatorsList}
            isMulti={false}
          />

          {/* choose year */}
          <label className="filter__label">
            Year: <span>2020</span>
          </label>
          <input type="range" />

          {/* choose interface language */}
          <label className="filter__label">Interface Language:</label>
          <div className="mini-buttons">
            <button
              onClick={onIntLangButtonClick}
              data-index-number={0}
              className={activeIntLangButton === 0 ? "active" : ""}
            >
              Eng
            </button>
            <button
              onClick={onIntLangButtonClick}
              data-index-number={1}
              className={activeIntLangButton === 1 ? "active" : ""}
            >
              Rus
            </button>
            <button
              onClick={onIntLangButtonClick}
              data-index-number={2}
              className={activeIntLangButton === 2 ? "active" : ""}
            >
              Both
            </button>
            <button
              onClick={onIntLangButtonClick}
              data-index-number={3}
              className={activeIntLangButton === 3 ? "active" : ""}
            >
              Multi
            </button>
          </div>

          {/* choose dubbing language */}
          <label className="filter__label">Dubbing Language:</label>
          <div className="mini-buttons">
            <button
              onClick={onDubLangButtonClick}
              data-index-number={0}
              className={activeDubLangButton === 0 ? "active" : ""}
            >
              Eng
            </button>
            <button
              onClick={onDubLangButtonClick}
              data-index-number={1}
              className={activeDubLangButton === 1 ? "active" : ""}
            >
              Rus
            </button>
            <button
              onClick={onDubLangButtonClick}
              data-index-number={2}
              className={activeDubLangButton === 2 ? "active" : ""}
            >
              Both
            </button>
            <button
              onClick={onDubLangButtonClick}
              data-index-number={3}
              className={activeDubLangButton === 3 ? "active" : ""}
            >
              Multi
            </button>
          </div>

          <button
            onClick={handleFilterButtonClick}
            className="filter__button primary-button"
          >
            Filter
          </button>
        </form>
      </aside>
    </div>
  );
}
