import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        signIn,
        userErrors
    } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors
    } = useForm()

    const onSubmit = handleSubmit(async user => {
        clearErrors()
        const signInRes = await signIn(user)
        if (signInRes) {
            Swal.fire({
                title: 'Bienvenido/a!',
                text: 'Has ingresado con éxito a la aplicación',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                navigate('/home')
            })
        }
    })

    return (
        <div className='flex justify-center items-center'>
            <div className='fixed top-4 right-4 flex flex-col space-y-2 z-50'>
                {userErrors.map((error, index) => (
                    <div key={index} 
                    className='bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-out'
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className='flex justify-between items-center'>
                            <span>{error}</span>
                        </div>
                    </div>
                ))}
            </div>
            <form className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'
                onSubmit={onSubmit}
            >
                <h2 className='text-2xl font-bold mb-6 text-center'>INICIAR SESIÓN</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Correo electrónico
                    </label>
                    <input type='email'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        placeholder='Correo Electrónico'
                        {...register('email')}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Contraseña
                    </label>
                    <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='assword'
                            placeholder='Contraseña'
                            {...register('password')}
                        />
                    </div>
                    <button type='button'
                        className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm