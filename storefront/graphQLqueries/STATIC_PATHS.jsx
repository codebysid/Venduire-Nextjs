import { gql, useMutation } from "@apollo/client";

export const GET_SLUGS_TO_BUIL_PATHS = gql`
  query {
    products {
      totalItems
      items {
        id
        slug
      }
    }
  }
`

