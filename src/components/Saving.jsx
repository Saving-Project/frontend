import React, { useContext, useEffect } from 'react'
import DayCard from '../components/DayCard'
import InfoData from '../components/InfoData'
import { PlanContext } from '../context/PlanContext'
import { AuthContext } from '../context/AuthContext'

const Saving = ({ idPlan, setSelectedPlan }) => {
    const { plan, planErrors, fetchPlanInfo } = useContext(PlanContext)
    const { isAuthenticated } = useContext(AuthContext) 

    useEffect(() => {
        fetchPlanInfo(idPlan)
    }, [isAuthenticated, idPlan])

    if (!plan) {
        return <div>Loading...</div>
    }

    return (
        <div className="container mx-auto py-4 px-32">
            <InfoData plan={plan}
                setSelectedPlan={setSelectedPlan}
            />
            <div className='h-[70vh] flex-1 overflow-y-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {plan.day_plans && plan.day_plans.map(day => (
                        <DayCard key={day.id}
                            number={day.saving_day.day}
                            price={day.saving_day.amount}
                            saved={day.saved}
                            enabled={day.enabled}
                            idPlan={idPlan}
                            idDay={day.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Saving
