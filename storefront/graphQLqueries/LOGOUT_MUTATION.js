import { gql } from "@apollo/client";

export const LOGOUT_MUTATION_QUERY=gql`
mutation{
    logout{
      ...on Success{
        success
      }
    }
  }`