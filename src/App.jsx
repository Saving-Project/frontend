import React from 'react'
import Home from './pages/Home'
import First from './pages/First'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<First />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App