import React from 'react'
import Swal from 'sweetalert2'

const DayCard = ({ number, price, saved, enabled, onSave }) => {
    const handleSave = async () => {
        if (!enabled) {
            Swal.fire({
                title: 'Día no disponible',
                text: 'No puedes guardar este día todavía',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
            return
        }

        const result = await onSave()
        
        if (result.success) {
            Swal.fire({
                title: 'Día guardado con éxito',
                text: `Has guardado el día ${number} y ahorraste $${price} con éxito`,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">{number}</div>
            <div className="text-lg text-gray-600 mb-2">${price}</div>
            <div className="mt-2">
                <input type='checkbox'
                    name={`selectCard-${number}`}
                    id={`selectCard-${number}`}
                    checked={saved}
                    disabled={saved}
                    onChange={handleSave}
                />
                <label htmlFor={`selectCard-${number}`} className='ml-2'>
                    {saved ? 'Ahorrado' : 'Ahorrar'}
                </label>
            </div>
        </div>
    )
}

export default DayCard