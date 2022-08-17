import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query GetProduct($id: ID) {
    product (id: $id) {
      data {
        attributes {
          title,
          description,
          release,
          categories {
            data {
              id,
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;