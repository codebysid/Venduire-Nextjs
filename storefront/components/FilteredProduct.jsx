import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FilteredProduct = ({response}) => {
    console.log(response)
  return (
    <div className='flex flex-row flex-wrap gap-6 justify-start items-center'>
        {
          response?.data.products.items.map((ele,key)=>{
            let {source}=ele.assets[0]
            return (
              <Link href={`/${ele.slug}`} key={key}>
                <div className=' overflow-hidden hover:cursor-pointer h-min rounded-2xl'>
                    <Image src={source} alt='Product' sizes='100vw' width="0" height="0" loading='lazy' className="imageZoom"/>
                </div>
                  <h1 className=' text-xl'>{ele.name}</h1>
              </Link>
            )
          })
        }
      </div>
  )
}

export default FilteredProduct
