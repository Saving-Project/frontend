import React from 'react'

const InfoData = () => {
    return (
        <div className='w-full border border-gray-300 rounded-lg shadow-lg py-4 px-64 mb-4 text-center'>
            <h2 className='text-2xl font-bold mb-4'>Plan de Ahorro de Fulanito</h2>
            <div className='flex justify-between'>
                <div>
                    <div className='text-lg'>Meta</div>
                    <div className='text-3xl font-bold'>$1'000.000</div>
                </div>
                <div>
                    <div className='text-lg'>Monto Actual</div>
                    <div className='text-3xl font-bold'>$0</div>
                </div>
            </div>
        </div>
    )
}

export default SavingData
