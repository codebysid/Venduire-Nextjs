import React, { useEffect, useState } from 'react'
import { GET_SHIPPING_METHODS } from '@/graphQLqueries/GET_SHIPPING_METHODS'
import { useMutation, useQuery } from '@apollo/client'
import { SET_ORDER_SHIPPING_METHOD } from '@/graphQLqueries/SET_SHIPPING_METHOD'
import SnackBar from './SnackBar'
import { UPDATE_STATE_MUTATION } from '@/graphQLqueries/UPDATE_STATE_MUTATION'
import { useRouter } from 'next/router'

const ShippingMethod = () => {
  const [shippingMethod,setShippingMethod]=useState("")
  const [msg,setMsg]=useState("")
  const router=useRouter()

  const [setShippingMethodMutation]=useMutation(SET_ORDER_SHIPPING_METHOD)
  const [updateOrderState]=useMutation(UPDATE_STATE_MUTATION)
  const {data}=useQuery(GET_SHIPPING_METHODS)

  const handle=async()=>{
    const response=await setShippingMethodMutation({
      variables:{
        shippingMethodId:shippingMethod
      }
    })
  }

  const makePayment=async()=>{
    if(!shippingMethod){  
      setMsg("Select any one Shipping Method")
      return null
    }
    try{
      const response=await updateOrderState({
        variables:{
          state:"ArrangingPayment"
        }
      })

      if(response.data.transitionOrderToState.id || response.data.transitionOrderToState.errorCode==="ORDER_STATE_TRANSITION_ERROR") router.push("/paymentMethod")
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    handle()
  },[shippingMethod])

  return (
    <div>
      {
        msg && <SnackBar msg={msg} setMsg={setMsg}/>
      }
      {
        data?.eligibleShippingMethods?.map((ele)=>{
          return (
            <div key={ele.id}>

              <input 
              type="radio" 
              name="shippingMethod" 
              id={ele.code} 
              value={ele.id} 
              onChange={(e)=>setShippingMethod(ele.id)}
              />

              <label htmlFor={ele.code}>{ele.name}</label>

            </div>
          )
        })
      }
      <button 
      type='button' 
      onClick={()=>makePayment()}
      className='btn'
      
      >Make Payment</button>
    </div>
  )
}

export default ShippingMethod
