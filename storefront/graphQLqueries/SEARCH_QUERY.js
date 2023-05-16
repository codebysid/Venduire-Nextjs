import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query ($slug: String) {
    product(slug: $slug) {
      id
      name
      slug
      assets {
        source
      }
    }
  }
`;
