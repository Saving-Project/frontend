import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const RegisterForm = ({ enableLogin }) => {
    const {
        signUp,
        userErrors
    } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors
    } = useForm()

    const onSubmit = handleSubmit(async user => {
        clearErrors()
        if (user.password !== user.confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Las contraseñas no coinciden'
            })
        } else { 
            const signUpRes = await signUp(user)
            if (signUpRes) {
                Swal.fire({
                    title: 'Registro exitoso!',
                    text: 'Tu cuenta ha sido creada. Serás redirigido al inicio de sesión',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    enableLogin()
                })
            }
        }
    })

    return (
        <div className='flex justify-center items-center'>
            {userErrors.map((err, i) => (
                <p className='text-red-500 text-xs italic' key={i}>
                    {err}
                </p>
            ))

            }
            <form className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md' onSubmit={onSubmit}>
                <h2 className='text-2xl font-bold mb-6 text-center'>CREAR CUENTA</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Nombre Completo
                    </label>
                    <input type='text'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='name'
                        placeholder='Nombre Completo'
                        {...register('name')}
                    />
                    {errors.name && <p className='text-red-500 text-xs italic'>{errors.name.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Correo Electrónico
                    </label>
                    <input type='email'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        placeholder='Correo Electrónico'
                        {...register('email')}
                    />
                    {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Contraseña
                    </label>
                    <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            placeholder='Contraseña'
                            {...register('password')}
                        />
                        <button type='button'
                            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Ocultar' : 'Mostrar'}
                        </button>
                    </div>
                    {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
                        Contraseña
                    </label>
                    <div className='relative'>
                        <input type={showConfirm ? 'text' : 'password'}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='confirmPassword'
                            placeholder='Confirmar Contraseña'
                            {...register('confirmPassword')}
                        />
                        <button type='button'
                            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? 'Ocultar' : 'Mostrar'}
                        </button>
                    </div>
                    {errors.confirmPassword && <p className='text-red-500 text-xs italic'>{errors.confirmPassword.message}</p>}
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Crear Cuenta</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm