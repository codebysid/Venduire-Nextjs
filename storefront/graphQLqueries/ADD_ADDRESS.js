import { gql } from "@apollo/client";

export const ADD_ADDRESS_MUTATION=gql`
mutation($fullName:String!,
    $streetLine1:String!,
    $streetLine2:String!,
    $city:String!,
    $province:String!,
    $postalCode:String!
    $countryCode:String!,
    $phoneNumber:String!
  ){
    createCustomerAddress(input:{
      fullName:$fullName
      streetLine1:$streetLine1
      streetLine2:$streetLine2
      city:$city
      province:$province
      postalCode:$postalCode
      countryCode:$countryCode
      phoneNumber:$phoneNumber
    }){
      __typename
  }
  }`