import React, { createContext, useState, useEffect } from 'react'
import { getInfoRequest, loginRequest, registerRequest } from '../services/user-service'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userErrors, setUserErrors] = useState([])

    const signUp = async user => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            return true
        } catch (error) {
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
            setUserErrors([error.response.data.message])
        }
    }

    const logout = () => {
        localStorage.removeItem('auth_token')
        setIsAuthenticated(false)
        setUser(null)
    }

    const checkToken = async () => {
        const token = localStorage.getItem('auth_token')

        if (token) {
            try {
                const res = await getInfoRequest()
                if (res.status === 200) {
                    setUser(res.data)
                    setIsAuthenticated(true)
                    return
                }
            } catch (error) {
                console.error('Error getting user information: ', error)
                setIsAuthenticated(false)
            }
        } else {
            setIsAuthenticated(false)
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

    useEffect(() => {
        checkToken()
    }, [])

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            logout,
            checkToken,
            user,
            isAuthenticated,
            userErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}