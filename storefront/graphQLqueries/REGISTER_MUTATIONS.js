import { gql } from "@apollo/client";

export const REGISTER_MUTATION_QUERY=gql`
mutation (
  $title:String!
  $firstName:String!
  $lastName:String!
  $password:String!
  $phoneNumber:String!
  $email:String!
){
  registerCustomerAccount(input:
    {
      emailAddress:$email
      title:$title
      firstName:$firstName
      lastName:$lastName
      phoneNumber:$phoneNumber
      password:$password
    
    }){
    ...on Success{
      success
    }
    ...on MissingPasswordError{
      errorCode
      message
    }
    ...on PasswordValidationError{
      errorCode
      message
    }
    ...on NativeAuthStrategyError{
      errorCode
      message 
    }
  }
}
`