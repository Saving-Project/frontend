import React from 'react'

const PlanCard = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow-lg w-full flex flex-col justify-between'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-bold'>Descripción</h2>
                <span className='text-lg'>$0</span>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 self-center'>
                ABRIR
            </button>
        </div>
    )
}

export default PlanCard
