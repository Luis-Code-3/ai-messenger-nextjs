"use client"

import { useState, createContext } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children, initialUser}) => {

    const [user, setUser] = useState(initialUser);




    const value = {
        user, setUser
    }

  return (
    <AuthContext.Provider value={value}>
            {children}
    </AuthContext.Provider>
  )
}
