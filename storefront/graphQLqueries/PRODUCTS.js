import { gql } from "@apollo/client"

export const PRODUCTS_QUERY=gql`
query{
    products{
      totalItems
      items{
        id
        name 
        slug
        variants{
          price
        }
        assets{
          source
          preview
        }
      }
    }
  }`
