import { gql } from "@apollo/client";

export const GET_SEARCHED_PRODUCTS = gql`
  query GetSearchedProducts($filters: ProductFiltersInput) {
    products(filters: $filters, pagination: { limit: 5 }) {
      data {
        id
        attributes {
          title
          release
          description
          minithumb {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
