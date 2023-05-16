import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation ($currentPassword: String!, $newPassword: String!) {
    updateCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      ... on Success {
        success
      }
      ... on InvalidCredentialsError {
        message
      }
      ... on PasswordValidationError {
        message
      }
      ... on NativeAuthStrategyError {
        message
      }
    }
  }
`;
