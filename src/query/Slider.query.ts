import { gql } from "@apollo/client";

export const GET_SLIDER = gql`
  query GetSlider {
    products(sort: "id:desc", pagination: { limit: 5 }) {
      data {
        id
        attributes {
          title
          release
          poster {
            data {
              attributes {
                url
              }
            }
          }
          thumbnail_square {
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
