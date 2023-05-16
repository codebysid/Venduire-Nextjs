import { FILTER_QUERY } from '@/graphQLqueries/FILTER_QUERY'
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

const useFacet = () => {
    const [filterFacet,setFilterFacet]=useState([])
    const {data,loading,error}=useQuery(FILTER_QUERY)

    
    useEffect(()=>{
      data?.facets?.items && setFilterFacet(data.facets.items)
    },[data])

    if(loading || error) return {filterFacet}

    return {filterFacet}
  }


export default useFacet

