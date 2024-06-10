import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createSavingsPlanRequest, getPlansRequest } from '../services/saving-service'

export const PlanContext = createContext()

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState(null)
    const [plans, setPlans] = useState([])
    const [planErrors, setPlanErrors] = useState([])

    const { isAuthenticated } = useContext(AuthContext)

    const createPlan = async plan => {
        if (!isAuthenticated) return

        try {
            const res = await createSavingsPlanRequest(plan)
            setPlan(res.data)
            return true
        } catch (error) {
            setPlanErrors([error.response.data.message])
        }
    }

    const fetchPlanList = async () => {
        if (!isAuthenticated) return

        try {
            const res = await getPlansRequest()
            const allPlans = res.data

            if (res.status === 200) {
                const uncompletedPlans = allPlans.filter(plan => !plan.completed)
                const completedPlans = allPlans.filter(plan => plan.completed)
    
                const sortedPlans = uncompletedPlans.concat(completedPlans)

                setPlans(sortedPlans)
                console.log(sortedPlans)
            }
                
            console.log(`Resultado de la consulta: ${allPlans}`)
        } catch (error) {
            console.error(error)
            setPlanErrors([error.response.data.message])
        }
    }

    useEffect(() => {
        fetchPlanList()
    }, [isAuthenticated])

    useEffect(() => {
        if (planErrors.length > 0) {
            const timer = setTimeout(() => {
                setPlanErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [planErrors])

    return (
        <PlanContext.Provider value={{
            createPlan,
            plan,
            plans,
            planErrors
        }}>
            {children}
        </PlanContext.Provider>
    )
}