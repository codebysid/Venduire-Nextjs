import React from 'react'

const Categories = () => {
    const tmpData=["Electronics","Home and Garden","Footwear","Photo","Soprts and Outdoors","Equipments","Plants","Furniture","Computers","Indoor","Outdoor"]
  return (
    <div className='flex flex-row flex-wrap gap-4 justify-center items-center mb-4'>
        {
            tmpData.map(ele=>{
                return (
                    <div className='bg-slate-500 text-white rounded-2xl text-4xl p-10 hover:cursor-pointer'>
                        {ele}
                    </div>
                )
            })

        }
    </div>
  )
}

export default Categories
