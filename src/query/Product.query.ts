import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          title
          release
          video
          download {
            data {
              attributes {
                url
              }
            }
          }
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          images {
            data {
              id
              attributes {
                url
              }
            }
          }
          creators {
            data {
              id
              attributes {
                title
              }
            }
          }
          genres {
            data {
              id
              attributes {
                title
              }
            }
          }
          interface_lang
          dubbing_lang
          crack
          description
          low_os
          low_cpu
          low_ram
          low_gpu
          low_sound
          low_space
          best_os
          best_cpu
          best_ram
          best_gpu
          best_sound
          best_space
        }
      }
    }
  }
`;
