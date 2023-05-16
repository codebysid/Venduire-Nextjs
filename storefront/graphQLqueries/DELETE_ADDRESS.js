import { gql } from "@apollo/client";

export const DELETE_ADDRESS_MUTATION=gql`
mutation($id:ID!){
    deleteCustomerAddress(id:$id){
      success
    }
  }`