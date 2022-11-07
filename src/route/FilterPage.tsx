/* Import react utilities */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/* Graphql Stuff */
import { useQuery } from "@apollo/client";
import { GET_FILTERED_PRODUCTS } from "query/FilteredProducts.query";

import Preloader from "component/Preloader";

const SHOULD_SEARCH_LANGS = {
  0: ["eng", "rus-eng", "rus-eng-multi"],
  1: ["rus", "rus-eng", "rus-eng-multi"],
  2: ["rus-eng-multi"],
};

/** @namespace @route/FilterPage/Component */
export default function FilterPage() {
  const [filters, setFilters] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setFilters({
        ...(state.genre &&
          state.genre.length && {
            and: state.genre.map((item: any) => ({
              genres: {
                id: {
                  eq: item.value,
                },
              },
            })),
          }),

        ...(state.creator && {
          creators: {
            id: {
              eq: state.creator.value,
            },
          },
        }),

        ...(state.year && {
          interface_lang: {
            in: SHOULD_SEARCH_LANGS[state.interface_lang as keyof object],
          },
          dubbing_lang: {
            in: SHOULD_SEARCH_LANGS[state.dubbing_lang as keyof object],
          },
          release: {
            gt: Number(state.year),
          },
        }),

        ...(state.title && {
          title: {
            containsi: state.title,
          },
        }),
      });
    }
  }, [state]);

  const { loading, error, data } = useQuery(GET_FILTERED_PRODUCTS, {
    variables: { filters },
  });

  if (loading) return <Preloader />;
  if (error) return <p>Error..</p>;

  if (!data.products.data.length) {
    return (
      <>
        <div className="container">
          <div
            style={{
              fontSize: "2.5rem",
              marginTop: "6.5rem",
            }}
          >
            Games will be added soon!
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="filter-products-wrapper">
          <div className="filter-grid">
            {data.products.data.map((item: any) => (
              <div key={item.id} className="filter-grid__item">
                <Link className="filter-grid__link" to={"/product/" + item.id}>
                  <img
                    className="filter-grid__image"
                    src={item.attributes.thumbnail.data.attributes.url}
                    alt={item.attributes.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
