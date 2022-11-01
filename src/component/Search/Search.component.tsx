/* Import react stuff */
import { useState, useEffect, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
/* Import assets & styles */
import { BiSearch } from "react-icons/bi";
import "./Search.style.scss";
/* Import graphql stuff */
import { useQuery } from "@apollo/client";
import { GET_SEARCHED_PRODUCTS } from "query/SearchedProducts.query";

/** @namespace @component/Search/Component */
export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [filters, setFilters] = useState<object>({});
  const navigate = useNavigate();

  const toggleActive = () => {
    setSearchActive((active) => !active);
  };

  const handleSearchInput = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setSearchValue(value);
    setSearchActive(true);
  };

  const handleOutsideClick = (e: { target: any }) => {
    const { classList } = e.target;
    if (
      !classList.contains("search__result") &&
      !classList.contains("search__input") &&
      !classList.contains("search__icon")
    ) {
      setSearchActive(false);
    }
  };

  const handleFindMore = () => {
    navigate("/filter", {
      state: {
        title: searchValue,
      },
    });
  };

  const handlePressEnter = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === "Enter") {
      handleFindMore();
      setSearchActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setFilters({
      title: {
        containsi: searchValue,
      },
    });
  }, [searchValue]);

  const { data } = useQuery(GET_SEARCHED_PRODUCTS, {
    variables: { filters },
  });

  return (
    <div className={`search ${searchActive ? "active" : ""}`}>
      <div className="search__bar">
        <input
          className="search__input"
          type="text"
          value={searchValue}
          placeholder="Search.."
          onChange={handleSearchInput}
          onKeyDown={handlePressEnter}
        />
        <button onClick={toggleActive} className="search__icon icon">
          <BiSearch style={{ pointerEvents: "none" }} />
        </button>
      </div>
      {searchValue !== "" && (
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
            <button className="search__button" onClick={handleFindMore}>
              Find More...
            </button>
          )}
        </div>
      )}
    </div>
  );
}
