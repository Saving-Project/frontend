import React, { useContext, useState } from 'react'
import Saving from '../components/Saving'
import { LuLogOut } from 'react-icons/lu'
import PlanCard from '../components/PlanCard'
import Modal from '../components/Modal'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const { logout, user } = useContext(AuthContext)

    const plans = [
        { id: 1, description: 'Plan A', value: 500, startDate: '2024-06-05', endDate: '2024-12-21' },
        { id: 2, description: 'Plan B', value: 1000, startDate: '2024-06-05', endDate: '2024-12-21' }
    ]

    const handleLogout = () => {
        logout()
        navigate('/')
    }
    
    const handleOpenPlan = id => {
        setSelectedPlan(id)
    }
    const handleBack = () => {
        setSelectedPlan(null)
    }
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <div className='flex flex-col min-h-screen relative'>
            <button className='absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300'
                onClick={handleLogout}
            >
                <LuLogOut className='text-xl'/>
            </button>

            {selectedPlan === null ? (
                <div className='container mx-auto py-4 px-32 flex flex-col items-center'>
                    <h1 className='text-3xl font-bold mb-6'>Bienvenido, {user.name}</h1>
                    <h3 className='text-2xl mb-6'>Tus planes de ahorro activos</h3>
                    <button onClick={handleOpenModal}
                        className='mb-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'
                    >
                        Crear Nuevo Plan</button>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                        {plans.map(plan => (
                            <PlanCard key={plan.id}
                                description={plan.description}
                                value={plan.value}
                                startDate={plan.startDate}
                                endDate={plan.endDate}
                                onOpen={() => handleOpenPlan(plan.id)}
                            />
                        ))}
                    </div>
                    <Modal open={isOpen} onClose={handleCloseModal}/>
                </div>
            ) : (
                <div>
                    <button className='absolute top-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300'
                        onClick={handleBack}
                    >
                        Volver
                    </button>
                    <Saving />    
                </div>
            )}
        </div>
    )
}

export default Home