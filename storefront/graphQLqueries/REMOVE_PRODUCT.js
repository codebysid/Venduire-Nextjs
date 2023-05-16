import { gql } from "@apollo/client";

export const REMOVE_PRODUCT_MUTATION=gql`mutation($orderLineId:ID!){
    removeOrderLine(orderLineId:$orderLineId){
     ...on Order{
      id
    } 
    ...on OrderModificationError{
      errorCode
      message
    }
    }
  }`
