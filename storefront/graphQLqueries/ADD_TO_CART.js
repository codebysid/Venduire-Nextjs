import { gql } from "@apollo/client";

export const ADD_TO_CART_MUTATION=gql`mutation($productVariantId:ID!,$quantity:Int!){
  addItemToOrder(productVariantId:$productVariantId,quantity:$quantity){
    
  	...on Order{
      id
      customer{
        firstName
        lastName
      }
    }
    ...on OrderModificationError{
      errorCode
      message
    }
    ...on OrderLimitError{
      errorCode
      message
      
    }
    ...on NegativeQuantityError{
      errorCode
      message
      
    }
    ...on InsufficientStockError{
      errorCode
      message
    }
  }
}`