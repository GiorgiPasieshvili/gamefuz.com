import { gql } from "@apollo/client";

export const GET_CREATORS = gql`
  query GetCreators {
    creators(sort: "updatedAt:desc") {
      data {
        id
        attributes {
          title
          logo {
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
