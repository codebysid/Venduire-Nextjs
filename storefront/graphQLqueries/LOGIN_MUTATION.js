import { gql } from "@apollo/client";

export const LOGIN_MUTATION_QUERY=gql`
mutation($username:String!,$password:String!){
    login(username:$username,password:$password){
      ...on CurrentUser{
        identifier
        id
        channels{
          id
          token
        }
      }
      ... on InvalidCredentialsError{
        errorCode
        message
      }
      ... on NotVerifiedError{
        errorCode
        message
      }
      ... on NativeAuthStrategyError{
        errorCode
        message
      }
  
    }
  }` 