import { gql } from "@apollo/client";

export const GET_IDS=gql`
query($ids:[ID!]){
    search(input:{
      facetValueIds:$ids
    }){
    totalItems
      items{
        id:productId
      }
    }
  }`