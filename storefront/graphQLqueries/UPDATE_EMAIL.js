import { gql } from "@apollo/client";

export const UPDATE_EMAIL = gql`
  mutation ($password: String!, $email: String!) {
    requestUpdateCustomerEmailAddress(
      password: $password
      newEmailAddress: $email
    ) {
      ... on Success {
        success
      }
      ... on InvalidCredentialsError {
        message
      }
      ... on EmailAddressConflictError {
        message
      }
      ... on NativeAuthStrategyError {
        message
      }
    }
  }
`;
