import React from 'react'

const PlanCard = ({ description, value, startDate, endDate, onOpen }) => {
    return (
        <div className='bg-white p-4 rounded-lg shadow-lg w-full flex flex-col justify-between'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-bold'>{description}</h2>
                <span className='text-lg'>${value}</span>
            </div>
            <div className='flex justify-between text-lg text-gray-600 mb-4'>
                <div>Inicia: {startDate}</div>
                <div>Termina: {endDate}</div>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 self-center'
            onClick={onOpen}>
                ABRIR
            </button>
        </div>
    )
}

export default PlanCard
