import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_PRODUCTS } from "query/FilteredProducts.query";

import Filter from "component/Filter";

const langs = {
  0: ["eng", "rus-eng", "rus-eng-multi"],
  1: ["rus", "rus-eng", "rus-eng-multi"],
  2: ["rus-eng-multi"],
};

/** @namespace @route/FilterPage/Component */
export default function FilterPage() {
  const [searchParams] = useSearchParams();
  const genresParam = searchParams.get("genres");
  const creatorParam = searchParams.get("creator");
  const intLangParam = searchParams.get("int-lang");
  const dubLangParam = searchParams.get("dub-lang");
  const releaseParam = searchParams.get("release");
  const titleParam = searchParams.get("title");

  let filters = {};

  if (genresParam) {
    const genresArray = JSON.parse(genresParam).map((param: any) => ({
      genres: {
        id: {
          eq: param,
        },
      },
    }));

    filters = {
      ...filters,
      and: genresArray,
    };
  }

  if (creatorParam) {
    filters = {
      ...filters,
      creators: {
        id: {
          eq: creatorParam,
        },
      },
    };
  }

  if (intLangParam) {
    filters = {
      ...filters,
      interface_lang: {
        in: langs[intLangParam as keyof object],
      },
    };
  }

  if (dubLangParam) {
    filters = {
      ...filters,
      dubbing_lang: {
        in: langs[dubLangParam as keyof object],
      },
    };
  }

  if (releaseParam) {
    filters = {
      ...filters,
      release: {
        gt: Number(releaseParam),
      },
    };
  }

  if (titleParam) {
    filters = {
      title: {
        containsi: titleParam,
      },
    };
  }

  const { loading, error, data } = useQuery(GET_FILTERED_PRODUCTS, {
    variables: { filters },
  });

  if (loading) return <div className="preloader"></div>;
  if (error) return <p>Error..</p>;

  if (!data.products.data.length) {
    return (
      <>
        <Filter />
        <div className="container">
          <div
            style={{
              fontSize: "2.5rem",
              marginTop: "6.5rem",
              height: "calc(100vh - 15rem)",
            }}
          >
            Games will add soon!
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Filter />
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
