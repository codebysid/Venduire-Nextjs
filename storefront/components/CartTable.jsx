import React from 'react'
import { numberT0Currency } from '@/utils/utils'
import Image from 'next/image'

const CartTable = ({activeOrder,removeProduct}) => {
  return (
    <>
      {
            activeOrder.activeOrder?.lines && activeOrder.activeOrder.lines.map((ele)=>{
                let linePrice=Number(ele.linePrice)
                let linePriceWithTax=Number(ele.linePriceWithTax)
                return(
                    <tr key={ele.id}>
                        <td>
                            <Image 
                            alt='Preview'
                            src={ele.productVariant.product.featuredAsset.preview}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className='h-28 w-28 rounded-2xl'
                            />
                        
                        </td>
                        <td>
                            {ele.productVariant.name}
                        </td>
                        <td>{numberT0Currency(linePrice)}</td>
                        <td>{ele.quantity}</td>
                        <td 
                        className='flex flex-row flex-wrap gap-4 justify-start items-center h-28'>
                            {numberT0Currency(linePriceWithTax)}
                            <span 
                            className='text-red-500 cursor-pointer' 
                            onClick={()=>removeProduct(ele.id)
                            }>
                                Remove
                            </span>
                        </td>
                    </tr>
                )
            })
            }
    </>
  )
}

export default CartTable
