import React, { createContext, useState, useEffect } from 'react'
import { loginRequest, registerRequest } from '../services/user-service'

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

    const signIn = async user => {
        try {
            setUserErrors([])
            const res = await loginRequest(user)
            localStorage.setItem('auth_token', res.data.token)
            setUser(res.data.user)
            setIsAuthenticated(true)
            return true
        } catch (error) {
            console.log(error.response.data)
            setUserErrors([error.response.data.message])
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
            signIn,
            user,
            isAuthenticated,
            userErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}