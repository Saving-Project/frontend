import React from 'react'
import Home from './pages/Home'
import First from './pages/First'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute'
import { PlanProvider } from './context/PlanContext'

const App = () => {
    return (
        <div>
            <AuthProvider>
                <PlanProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<First />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path='/home' element={<Home />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </PlanProvider>
                <Footer />
            </AuthProvider>
        </div>
    )
}

export default App