import React, { createContext, useState, useEffect } from 'react'
import { registerRequest } from '../services/user-service'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userErrors, setUserErrors] = useState([])

    const signUp = async user => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            console.log(res.data)
            return true
        } catch (error) {
            console.log(error)
            setUserErrors(error.response.data.errors)
        }
    }

    useEffect(() => {
        if (userErrors.length > 0) {
            const timer = setTimeout(() => {
                setUserErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [userErrors])

    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            userErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}