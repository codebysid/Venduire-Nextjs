import { gql } from "@apollo/client";

export const GET_PROD_BY_IDS = gql`
  query ($ids: [String!]) {
    products(options: { filter: { id: { in: $ids } } }) {
      totalItems
      items {
        id
        name
        slug
        assets {
          source
          preview
        }
        variants {
          price
        }
      }
    }
  }
`;
