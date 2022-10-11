import { gql } from "@apollo/client";

export const GET_RECENT_PRODUCTS = gql`
  query GetRecentProducts {
    products(sort: "id:desc", pagination: { limit: 15 }) {
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
