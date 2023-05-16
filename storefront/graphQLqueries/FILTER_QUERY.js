import { gql } from "@apollo/client";

export const FILTER_QUERY=gql`
query{
  facets{
    totalItems
    items{
      id
      name
      code
      values{
        id
        name
      }
    }
  }
}`