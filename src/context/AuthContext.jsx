import React, { createContext, useState, useEffect } from 'react'
import { registerRequest } from '../services/user-service'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userErrors, setUserErrors] = useState([])
    const [systemErrors, setSystemErrors] = useState([])
    const [serverErrors, setServerErrors] = useState([])

    const signUp = async user => {
        setUserErrors([])
        const res = await registerRequest(user)

        try {
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{
            signUp
        }}>
            {children}
        </AuthContext.Provider>
    )
}