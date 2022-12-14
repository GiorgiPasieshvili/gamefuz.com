import { gql } from "@apollo/client";

export const GET_ALL_GENRES = gql`
  query GetAllGenres {
    genres(pagination: { limit: 50 }) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
