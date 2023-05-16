import { GET_SLUGS_TO_BUIL_PATHS } from '@/graphQLqueries/STATIC_PATHS'
import { useRouter } from 'next/router'
import React from 'react'
import { getClient } from '.'
import { gql } from '@apollo/client'
import { getDetailsBySlug } from '@/graphQLqueries/PRODUCT_DETAIL_QUERY'
import ProductDetails from '@/components/ProductDetails'

const ProductDetail = ({response}) => {
  return <ProductDetails response={response}/>
}

export default ProductDetail

export async function getStaticPaths(){
    const response=await getClient.query({
        query:GET_SLUGS_TO_BUIL_PATHS
    })
    
    const paths=response.data.products.items.map((ele)=>{
      return {
        params:{
          id:ele.id,
          slug:ele.slug
        }
      }
    })
    return {
        paths,
        fallback: false,
      }  
}

export async function getStaticProps(context){

  const response=await getDetailsBySlug(context.params.slug)
  return {
    props:{
      response
    }
  }
}