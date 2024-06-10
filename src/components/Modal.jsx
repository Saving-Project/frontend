import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { PlanContext } from '../context/PlanContext'

const Modal = ({ open, onClose, startDate, endDate }) => {
    const { plan, createPlan } = useContext(PlanContext)
    const [ description, setDescription ] = useState('')

    const handleCreate = async () => {
        const plan = { description }
        const create_plan = await createPlan(plan)

        if (create_plan) {
            Swal.fire({
                title: 'Plan Creado!',
                text: 'El plan ha sido creado con éxito!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                onClose()
            })
        }
    }

    if (!open) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4'>Crear nuevo Plan</h2>
                <input type='text'
                    id='description'
                    placeholder='Descripción'
                    className='w-full p-2 border border-gray-300 rounded mb-4'
                    onChange={e => setDescription(e.target.value)}
                />
                <div className='flex justify-between mb-4'>
                    <p>Inicia: <span className='text-red-900'>{startDate}</span></p>
                    <p>Termina: <span className='text-red-900'>{endDate}</span></p>
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