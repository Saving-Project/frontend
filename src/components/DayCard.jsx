import React from 'react'

const DayCard = ({ number, price }) => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">{number}</div>
            <div className="text-lg text-gray-600 mb-2">${price}</div>
            <div className="mt-2">
                <input type='checkbox' name={`selectCard-${number}`} id={`selectCard-${number}`} />
                <label htmlFor={`selectCard-${number}`} className='ml-2'>Ahorrar</label>
            </div>
        </div>
    )
}

export default DayCard