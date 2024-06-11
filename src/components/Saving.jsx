import React, { useContext, useEffect } from 'react'
import DayCard from '../components/DayCard'
import InfoData from '../components/InfoData'
import { PlanContext } from '../context/PlanContext'
import { AuthContext } from '../context/AuthContext'

const Saving = ({ idPlan }) => {
    const { plan, planErrors, fetchPlanInfo, markDay } = useContext(PlanContext)
    const { isAuthenticated } = useContext(AuthContext)

    const handleSaveDay = async dayId => {
        try {
            await markDay(idPlan, dayId)
            return { success: true }
        } catch (error) {
            console.error('Error saving day: ', error)
            return { success: false }
        }
    }

    useEffect(() => {
        fetchPlanInfo(idPlan)
    }, [isAuthenticated, idPlan])

    if (!plan) {
        return <div>Loading...</div>
    }

    return (
        <div className="container mx-auto py-4 px-32">
            <InfoData description={plan.description} value={plan.total_saving} />
            <div className='h-[70vh] flex-1 overflow-y-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {plan.day_plans.map(day => (
                        <DayCard key={day.id}
                            number={day.saving_day.day}
                            price={day.saving_day.amount}
                            saved={day.saved}
                            enabled={day.enabled}
                            onSave={() => handleSaveDay(day.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Saving
