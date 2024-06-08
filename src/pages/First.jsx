import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'

const First = () => {
    const [showButtons, setShowButtons] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)

    const enableLogin = () => {
        setIsLogin(true)
        setShowButtons(false)
    }
    const enableRegister = () => {
        setIsLogin(false)
        setShowButtons(false)
    }
    const disableForms = () => {
        setShowButtons(true)
        setIsLogin(false)
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            {showButtons ? 
                <div className='space-x-4'>
                    
                    <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={enableLogin}>INICIAR SESIÓN</button>
                    <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700'onClick={enableRegister}>REGISTRARSE</button>
                </div> :
                <div className='space-x-4'>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4'
                        onClick={disableForms}
                    >
                        Volver
                    </button>
                    {isLogin ? <LoginForm /> : <RegisterForm enableLogin={enableLogin}/>}
                </div>
            }
        </div>
    )
}

export default First