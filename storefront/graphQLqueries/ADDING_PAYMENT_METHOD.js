import { gql } from "@apollo/client";

export const ADDING_PAYMENT_METHOD=gql`
mutation ($method: String!, $metaData: JSON!) {
    addPaymentToOrder(input: { method: $method, metadata: $metaData }) {
      ... on Order {
        id
        code
      }
      ... on OrderPaymentStateError {
        errorCode
        message
      }
    }
  }`