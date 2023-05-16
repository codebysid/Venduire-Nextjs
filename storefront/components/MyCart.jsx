import { GET_ACTIVE_ORDER_FOR_CART } from '@/graphQLqueries/ACTIVE_ORDER_FOR_CART'
import { REMOVE_PRODUCT_MUTATION } from '@/graphQLqueries/REMOVE_PRODUCT'
import { numberT0Currency } from '@/utils/utils'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CartTable from './CartTable'
import Address from './Address'

const MyCart = () => {
    const [activeOrder,setActvieOrder]=useState({})
    const {data,refetch}=useQuery(GET_ACTIVE_ORDER_FOR_CART)    
    const [remove]=useMutation(REMOVE_PRODUCT_MUTATION)
    const router=useRouter()

    const removeProduct=async(productId)=>{
        const response=await remove({
            variables:{
                orderLineId:productId
            }
        })
        refetch()
    }

    useEffect(()=>{
        data?.activeOrder?.lines && setActvieOrder(data)
    })

    useEffect(()=>{
        refetch()
    },[router.events])
return (
    <div className='flex justify-center items-center flex-wrap w-screen'>
    <table className='w-1/2'> 
        <thead>
            <tr>   
                <th className='text-left'>PRODUCT IMAGE</th>
                <th className='text-left'>PRODUCT NAME</th>
                <th className='text-left'>UNIT PRICE</th>
                <th className='text-left'>QTY</th>
                <th className='text-left'>TOTAL(WITH TAX)</th>
            </tr>
        </thead> 
        <tbody>
            <CartTable 
            activeOrder={activeOrder}
            removeProduct={removeProduct}
            />
        </tbody>
    </table>
    
    <div className='flex flex-col flex-wrap w-2/3 items-end'>
        <span>Total:{numberT0Currency(activeOrder?.activeOrder?.total)}</span>
        <span>Total With Tax:{numberT0Currency(activeOrder?.activeOrder?.totalWithTax)}</span>

    <Link href="/address" className='primaryBtn mt-10'>Proceed To Checkout</Link>
    </div>
    </div>
)
}

export default MyCart
