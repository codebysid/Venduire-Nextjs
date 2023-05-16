import { ADDING_PAYMENT_METHOD } from '@/graphQLqueries/ADDING_PAYMENT_METHOD'
import { ELIGIBLE_PAYMENT_PAYMENT } from '@/graphQLqueries/ELIGIBLE_PAYMENT_METHOD'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const PaymentMethod = () => {
    const {data}=useQuery(ELIGIBLE_PAYMENT_PAYMENT)
    const [makingFinalPayment]=useMutation(ADDING_PAYMENT_METHOD)
    const router=useRouter()
    const finalPayment=async(code)=>{
        console.log(code)
        try{
            const response=await makingFinalPayment({
                variables: { method: code, metaData: {} },
            })
            if(response.data.addPaymentToOrder.id) router.push("/success")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      {
        data && data.eligiblePaymentMethods.map((ele)=>{
            return(
                <button key={ele.id} onClick={()=>finalPayment(ele.code)} type='button' className='btn'>{ele.name}</button>
            )
        })

      }
    </div>
  )
}

export default PaymentMethod
