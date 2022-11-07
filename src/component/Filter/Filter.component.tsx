/* Import utilities */
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/* Import styles & assets */
import Preloader from "component/Preloader";
import "./Filter.style.scss";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { SELECT_STYLES, LANGUAGES } from "./Filter.config";

/* Import graphql stuff */
import { useQuery } from "@apollo/client";
import { GET_ALL_GENRES } from "query/AllGenres.query";
import { GET_ALL_CREATORS } from "query/AllCreators.query";

/** @namespace @component/Filter/Component */
export default function Filter() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<any>([]);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);
  const [selectedInterface, setSelectedInterface] = useState<any>(0);
  const [selectedDubbing, setSelectedDubbing] = useState<any>(0);
  const [selectedYear, setSelectedYear] = useState(2010);

  const toggleFilter = () => {
    setFilterOpen((isFilterOpen) => !isFilterOpen);
  };

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/filter", {
      state: {
        genre: selectedGenre,
        creator: selectedCreator,
        interface_lang: selectedInterface,
        dubbing_lang: selectedDubbing,
        year: selectedYear,
      },
    });
    toggleFilter();
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
    return <Preloader />
  if (genresError || creatorsError) return <p>Error..</p>;

  const genresOptions = genresData.genres.data.map((item: any) => ({
    value: item.id,
    label: item.attributes.title,
  }));

  const creatorsOptions = creatorsData.creators.data.map((item: any) => ({
    value: item.id,
    label: item.attributes.title,
  }));

  return (
    <div className="filter">
      {/* Filter toggle button */}
      <button className="filter__toggle" onClick={toggleFilter}>
        <AiOutlineMenuUnfold />
      </button>

      {/* Filter content */}
      <div className={`filter__content ${isFilterOpen ? "active" : ""}`}>
        {/* Filter header - logo & close button */}
        <header className="filter__header">
          <img className="filter__logo" src="/images/logo.svg" alt="gamefuz" />
          <button className="filter__close icon" onClick={toggleFilter}>
            <AiOutlineClose />
          </button>
        </header>

        {/* Filter authorization buttons */}
        <div className="filter__auth">
          <button className="filter__login">Log in</button>
          <button className="filter__signup primary-button">Sign up</button>
        </div>

        {/* Filter form - genres, year, languages */}
        <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
          {/* Choose genres */}
          <div>
            <label className="filter__label">Genre:</label>
            <Select
              className="filter__select"
              styles={SELECT_STYLES}
              options={genresOptions}
              value={selectedGenre}
              onChange={setSelectedGenre}
              closeMenuOnSelect={false}
              isMulti
            />
          </div>
          {/* Choose creator */}
          <div>
            <label className="filter__label">Creator:</label>
            <Select
              className="filter__select"
              styles={SELECT_STYLES}
              options={creatorsOptions}
              value={selectedCreator}
              onChange={setSelectedCreator}
              isClearable={true}
              isMulti={false}
            />
          </div>
          {/* Choose year */}
          <div>
            <label className="filter__label">
              Year: <span>{selectedYear}+</span>
            </label>
            <input
              type="range"
              value={selectedYear - 1922}
              onChange={(e) => setSelectedYear(Number(e.target.value) + 1922)}
              min={68}
            />
          </div>
          {/* Choose interface language */}
          <div>
            <label className="filter__label">Interface Language:</label>
            <div className="mini-buttons">
              {LANGUAGES.map((lang, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedInterface(index)}
                  className={selectedInterface === index ? "active" : ""}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          {/* Choose dubbing language */}
          <div>
            <label className="filter__label" htmlFor="">
              Dubbing Language:
            </label>
            <div className="mini-buttons">
              {LANGUAGES.map((lang, index) => (
                <button
                  key={index}
                  data-index-number={index}
                  onClick={() => setSelectedDubbing(index)}
                  className={selectedDubbing === index ? "active" : ""}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          {/* Submit filter */}
          <button
            className="filter__submit primary-button"
            type="submit"
            onClick={handleSubmit}
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
}
