/* import assets & styles */
import { BiSearch } from "react-icons/bi";
import "./Search.style.scss";

import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_SEARCHED_PRODUCTS } from "query/SearchedProducts.query";

import { Link } from "react-router-dom";

/** @namespace @component/Search/Component */
export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  let filters = {
    title: {
      containsi: inputValue,
    },
  };

  const { error, data } = useQuery(GET_SEARCHED_PRODUCTS, {
    variables: { filters },
  });

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

  if (error) return <p>Error..</p>;

  // if (loading) return <p>...</p>;

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
      {inputValue !== "" && (
        <div className="search__result">
          {data &&
            (data.products.data.length === 0 ? (
              <h2 className="search__no-product">No Product Found!</h2>
            ) : (
              data.products.data.slice(0, 4).map((item: any) => (
                <div key={item.id} className="search__item">
                  <Link to={`/product/${item.id}`}>
                    <div className="search__img">
                      <img
                        src={item.attributes.minithumb.data.attributes.url}
                        alt=""
                      />
                    </div>
                    <div className="search__info">
                      <span>
                        {item.attributes.title.slice(0, 30)}{" "}
                        <span>{item.attributes.release}</span>
                      </span>
                      <p>{item.attributes.description.slice(0, 130) + "..."}</p>
                    </div>
                  </Link>
                </div>
              ))
            ))}

          {data && data.products.data.length > 4 && (
            <Link to={`/filter?title=${inputValue}`} className="search__button">
              Find More...
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
