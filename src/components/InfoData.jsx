import React, { useContext, useEffect, useState } from 'react'
import { PlanContext } from '../context/PlanContext'
import Swal from 'sweetalert2'

const InfoData = ({ plan, setSelectedPlan }) => {
    const [isCompleted, setIsCompleted] = useState(false)
    const {
        deletePlan,
        resetPlan,
        fetchPlanList,
        fetchPlanInfo
    } = useContext(PlanContext)

    const handleDelete = async () => {
        const deleted = await deletePlan(plan.id)

        if (deleted) {
            Swal.fire({
                title: 'Plan eliminado!',
                text: 'Has borrado el plan con éxito!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                setSelectedPlan(null)
                fetchPlanList()
            })
        } else {
            Swal.fire({
                title: 'ERROR!',
                text: 'Hubo un error al eliminar el plan de ahorro',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => {
                fetchPlanInfo(plan.id)
            })
        }
    }

    const handleReset = async () => {
        const reseted = await resetPlan(plan.id)

        if (reseted) {
            Swal.fire({
                title: 'Reinicio hecho!',
                text: 'Has reiniciado el plan con éxito!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                fetchPlanInfo(plan.id)
            })
        } else {
            Swal.fire({
                title: 'ERROR!',
                text: 'Hubo un error al eliminar el plan de ahorro',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => {
                fetchPlanInfo(plan.id)
            })
        }
    }

    useEffect(() => {
        if (plan && plan.completed) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }, [fetchPlanInfo])

    return (
        <div className='w-full border border-gray-300 rounded-lg shadow-lg py-4 px-64 mb-4 text-center'>
            <h2 className='text-2xl font-bold mb-4'>{plan.description}</h2>
            {isCompleted ?
                <div>
                    <h2 className='text-2xl font-bold mb-4'>FELICITACIONES, ALCANZASTE LA META</h2>
                </div>
                :
                <div>
                    <div className='flex justify-between mb-6'>
                        <div>
                            <div className='text-lg'>Meta</div>
                            <div className='text-3xl font-bold'>$1'000.000</div>
                        </div>
                        <div>
                            <div className='text-lg'>Monto Actual</div>
                            <div className='text-3xl font-bold'>${plan.total_saving}</div>
                        </div>
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={handleReset}>Reiniciar Ahorro</button>
                        
                    </div>   
                </div>
            }
            <button className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700' onClick={handleDelete}>Eliminar Plan</button>  
        </div>
    )
}

export default InfoData