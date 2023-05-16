import React, { createContext, useState } from 'react'

export const LikesContext=createContext()

const LikesProvider = ({children}) => {
    const [likes,setLikes]=useState([])

    const value={
        likes,setLikes
    }
  return (
    <LikesContext.Provider value={value}>
        {children}
    </LikesContext.Provider>
  )
}

export default LikesProvider
