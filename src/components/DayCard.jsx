import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { PlanContext } from '../context/PlanContext'

const DayCard = ({ number, price, saved, enabled, idDay, idPlan }) => {
    const { markDay, fetchPlanInfo } = useContext(PlanContext)

    const handleSave = async () => {
        const marked = await markDay(idPlan, idDay)

        if (marked) {
            Swal.fire({
                title: 'Día guardado!',
                text: 'El día fue guardado con éxito!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                fetchPlanInfo(idPlan)
            })
        } else {
            Swal.fire({
                title: 'Día no disponible!',
                text: 'El día no se pudo guardar!',
                icon: 'warning',
                confirmButtonText: 'Ok'
            }).then(() => {
                fetchPlanInfo(idPlan)
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