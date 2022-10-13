/* utilities import */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [selectedGenre, setSelectedGenre] = useState<any>([]);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);
  const [activeIntLangButton, setActiveIntLangButton] = useState<any>(0);
  const [activeDubLangButton, setActiveDubLangButton] = useState<any>(0);

  const [yearValue, setYearValue] = useState(2010);

  const [url, setUrl] = useState("");
  const [genresQuery, setGenresQuery] = useState("");
  const [creatorQuery, setCreatorQuery] = useState("");
  const [intLangQuery, setIntLangQuery] = useState(`int-lang=0`);
  const [dubLangQuery, setDubLangQuery] = useState(`dub-lang=0`);
  const [releaseQuery, setReleaseQuery] = useState(`release=2010`);

  const onGenreChoose = (array: any) => {
    const valuesArray = array.map((item: any) => item.value);
    setSelectedGenre(array);

    if (valuesArray.length) {
      setGenresQuery(`genres=[${valuesArray}]`);
    } else {
      setGenresQuery("");
    }
  };

  const onCreatorChoose = (object: any) => {
    setSelectedCreator(object);

    if (object) {
      setCreatorQuery(`creator=${object.value}`);
    } else {
      setCreatorQuery("");
    }
  };

  const onIntLangButtonClick = (e: any) => {
    e.preventDefault();
    const btnIndex = e.target.dataset.indexNumber;
    setActiveIntLangButton(Number(btnIndex));

    setIntLangQuery(`int-lang=${btnIndex}`);
  };

  const onDubLangButtonClick = (e: any) => {
    e.preventDefault();
    const btnIndex = e.target.dataset.indexNumber;
    setActiveDubLangButton(Number(btnIndex));

    setDubLangQuery(`dub-lang=${btnIndex}`);
  };

  const onYearSelect = (e: any) => {
    setYearValue(Number(e.target.value) + 1922);
    setReleaseQuery(`release=${Number(e.target.value) + 1922}`);
  };

  const toggleFilter = () => {
    setFilterOpen((isFilterOpen) => !isFilterOpen);
  };

  useEffect(() => {
    setUrl(
      `/filter?${genresQuery}&${creatorQuery}&${releaseQuery}&${intLangQuery}&${dubLangQuery}`
    );
  }, [genresQuery, creatorQuery, releaseQuery, intLangQuery, dubLangQuery]);

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
    value: item.id,
    label: item.attributes.title,
  }));

  const creatorsList = creatorsData.creators.data.map((item: any) => ({
    value: item.id,
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

        <div className="filter__auth">
          <button className="filter__auth-button">Log in</button>
          <button className="filter__auth-button primary-button">
            Sign up
          </button>
        </div>

        <form className="filter__form">
          {/* select genres */}
          <label className="filter__label">Genre:</label>
          <Select
            className="filter__select"
            styles={selectStyles}
            closeMenuOnSelect={false}
            value={selectedGenre}
            onChange={onGenreChoose}
            options={genresList}
            isMulti
          />

          {/* select creators */}
          <label className="filter__label">Creator:</label>
          <Select
            className="filter__select"
            styles={selectStyles}
            value={selectedCreator}
            onChange={onCreatorChoose}
            options={creatorsList}
            isClearable={true}
            isMulti={false}
          />

          {/* choose year */}
          <label className="filter__label">
            Year: <span>{yearValue}+</span>
          </label>
          <input
            value={yearValue - 1922}
            min={68}
            onChange={(e) => onYearSelect(e)}
            type="range"
          />

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
              Multi
            </button>
          </div>

          <Link to={url} className="filter__button primary-button">
            Filter
          </Link>
        </form>
      </aside>
    </div>
  );
}
