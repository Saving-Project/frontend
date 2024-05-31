import React from 'react'

const LoginForm = () => {
    return (
        <div className='flex justify-center items-center'>
            <form className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center'>INICIAR SESIÓN</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='user-email'>
                        Correo electrónico
                    </label>
                    <input type='email'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='user-email'
                        placeholder='Correo Electrónico'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='user-password'>
                        Contraseña
                    </label>
                    <input type='password'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='user-password'
                        placeholder='Contraseña'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm