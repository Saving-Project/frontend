import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useContext(AuthContext)

    if (loading) return <h1>
        Loading...
    </h1>
    if (!loading && !isAuthenticated) return <Navigate to='/' replace />

    return <Outlet />
}

export default ProtectedRoute