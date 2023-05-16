import { gql } from "@apollo/client";

export const VERIFY_TOKEN_QUERY=gql`
mutation($token:String!){
    verifyCustomerAccount(token:$token){
      ...on CurrentUser{
        id
      }
      ...on VerificationTokenInvalidError{
        errorCode
        message
      }
      ...on MissingPasswordError{
        errorCode
        message
      }
      ...on PasswordValidationError{
        errorCode
        message
      }
      ...on PasswordAlreadySetError{
        errorCode
        message
      }
      ...on NativeAuthStrategyError{
        errorCode
        message
      }
    }
  }`