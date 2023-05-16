import { gql } from "@apollo/client";

export const BILLING_ADDRESS_MUTATION=gql`
mutation(
    $fullName:String!,
    $streetLine1:String!,
    $streetLine2:String!,
    $city:String!,
    $postalCode:String!
    $countryCode:String!,
    $phoneNumber:String!
){
    setOrderBillingAddress(
        input:{
            fullName:$fullName,
            streetLine1:$streetLine1,
            streetLine2:$streetLine2,
            city:$city,
            postalCode:$postalCode,
            countryCode:$countryCode, 
            phoneNumber:$phoneNumber
        }
    ){
      ...on Order{
        id
      }
    }
  }`