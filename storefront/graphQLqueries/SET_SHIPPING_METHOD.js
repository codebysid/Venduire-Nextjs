import { gql } from "@apollo/client";

export const SET_ORDER_SHIPPING_METHOD=gql`
mutation ($shippingMethodId:ID!){
    setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
      ...on Order{
      id
    }   
   ...on OrderModificationError{
    errorCode
    message
  }   
      ...on IneligibleShippingMethodError{
        errorCode
        message
      }
      ...on NoActiveOrderError{
        errorCode
        message
      }
    }
  }`