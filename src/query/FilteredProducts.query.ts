import { gql } from "@apollo/client";

export const GET_FILTERED_PRODUCTS = gql`
  query GetFilteredProducts($filters: ProductFiltersInput) {
    products(filters: $filters) {
      data {
        id
        attributes {
          title
          thumbnail {
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
