import { getClient } from "@/pages";
import { gql } from "@apollo/client";

export const PRODUCT_DETAIL_QUERY=gql`
query($slug:String!){
    product(slug:$slug){
      id
      name
      createdAt
      updatedAt
      description
      featuredAsset{
        height
        width
        preview
      }
      facetValues{
        name
        code
      }
      variantList{
        totalItems
      }
      variants{
        id
        sku
        name
        price
      }
    }
    
  }`

export const getDetailsBySlug=async(slug)=>{
    const response=await getClient.query({
      query:gql`
      query($slug:String!){
          product(slug:$slug)
          {
            id
            name
            createdAt
            updatedAt
            description
            featuredAsset{
              height
              width
              preview
            }
            facetValues{
              name
              code
            }
            variantList{
              totalItems
            }
            variants{
              id
              sku
              name
              productId
              price
            }
          }
          
        }`,variables:{slug}
    })

    return response
  }