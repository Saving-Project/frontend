import React from 'react'
import Swal from 'sweetalert2'

const Modal = ({ open, onClose }) => {
    const handleCreate = () => {
        Swal.fire({
            title: 'Plan Creado!',
            text: 'El plan ha sido creado con éxito!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        onClose()
    }

    if (!open) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4'>Crear nuevo Plan</h2>
                <input type='text'
                    placeholder='Descripción'
                    className='w-full p-2 border border-gray-300 rounded mb-4'
                />
                <div className='flex justify-between mb-4'>
                    <p>Inicia: </p>
                    <p>Termina: </p>
                </div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
                    onClick={handleCreate}
                >
                    Crear
                </button>
            </div>
        </div>
    )
}

export default Modal