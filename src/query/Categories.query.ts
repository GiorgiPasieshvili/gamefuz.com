import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories(pagination: { limit: 20 }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
