import { gql } from "@apollo/client";

export const GET_ALL_CREATORS = gql`
  query GetAllCreators {
    creators(pagination: { limit: 50 }) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
