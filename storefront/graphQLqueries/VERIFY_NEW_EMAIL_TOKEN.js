import { gql } from "@apollo/client";

export const VERIFY_NEW_EMAIL_TOKEN = gql`
  mutation ($token: String!) {
    updateCustomerEmailAddress(token: $token) {
      ... on Success {
        success
      }
      ... on IdentifierChangeTokenInvalidError {
        message
      }
      ... on IdentifierChangeTokenExpiredError {
        message
      }
      ... on NativeAuthStrategyError {
        message
      }
    }
  }
`;
