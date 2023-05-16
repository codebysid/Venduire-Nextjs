import React, { createContext, useState } from 'react'

export const ThemeContext=createContext()

const ThemeProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState("")

    const value={
        currentUser,setCurrentUser
    }
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
