import { gql } from "@apollo/client";

export const GET_ACTIVE_ORDER_FOR_CART = gql`
  query {
    activeOrder {
      id
      code
      state
      lines {
        id
        unitPrice
        linePrice
        linePriceWithTax
        quantity
        productVariant {
          id
          sku
          name
          price
          product {
            name
            slug
            featuredAsset {
              width
              height
              preview
            }
          }
        }
      }
      billingAddress {
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
      }
      shippingAddress {
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
      }
      discounts {
        type
        description
        amount
        amountWithTax
      }
      total
      totalWithTax
    }
  }
`;
