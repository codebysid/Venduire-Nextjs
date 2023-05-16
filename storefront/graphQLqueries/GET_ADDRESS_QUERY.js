import { gql } from "@apollo/client";

export const GET_ADDRESS_QUERY=gql`
query{
    activeCustomer{
      addresses{
        id
        fullName
        company
        streetLine1
        streetLine2
        city
        country{
          code
          name
          
        }
        postalCode
        phoneNumber
        defaultShippingAddress
      }
    }
  }`