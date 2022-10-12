import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_PRODUCTS } from "query/FilteredProducts.query";

import Filter from "component/Filter";

/** @namespace @route/FilterPage/Component */
export default function FilterPage() {
  const [searchParams] = useSearchParams();
  const genresParam = searchParams.get("genres");
  const creatorParam = searchParams.get("creator");
  console.log(genresParam);

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
    </>
  );
}
