import { gql } from "@apollo/client";

export const GET_SHIPPING_METHODS=gql`
query {
    eligibleShippingMethods {
      id
      name
      code
      description
      priceWithTax
    }
  }`