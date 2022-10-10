import { gql } from "@apollo/client";

export const GET_CREATORS = gql`
  query GetCreators {
    creators {
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
