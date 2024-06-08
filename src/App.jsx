import React from 'react'
import Home from './pages/Home'
import First from './pages/First'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<First />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path='/home' element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </AuthProvider>
        </div>
    )
}

export default App