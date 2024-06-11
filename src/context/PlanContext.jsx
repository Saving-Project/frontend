import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createSavingsPlanRequest, deletePlanRequest, getPlanRequest, getPlansRequest, markDayAsSavedRequest } from '../services/saving-service'

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
            await fetchPlanList()
            return true
        } catch (error) {
            setPlanErrors([error.response.data.message])
        }
    }

    const fetchPlanInfo = async id => {
        if (!isAuthenticated) return

        try {
            const res = await getPlanRequest(id)
            const planData = res.data

            planData.day_plans.sort((a, b) => a.saving_day.day - b.saving_day.day)
            setPlan(planData)
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
            }
        } catch (error) {
            setPlanErrors([error.response.data.message])
        }
    }

    const markDay = async (id, day) => {
        if (!isAuthenticated) return

        try {
            const res = await markDayAsSavedRequest(id, { day })
            await fetchPlanInfo(res.data.plan.id)
            setPlan(res.data)
            console.log(res.data.plan.id)
            return true
        } catch (error) {
            console.log(error.response)
            setPlanErrors(error)
        }
    }

    const deletePlan = async id => {
        if (!isAuthenticated) return

        try {
            const res = await deletePlanRequest(id)
            setPlan(null)
            console.log(res.data)
            return true
        } catch (error) {
            console.log(error)
            setPlanErrors(error)
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
            fetchPlanList,
            fetchPlanInfo,
            markDay,
            deletePlan,
            plan,
            plans,
            planErrors
        }}>
            {children}
        </PlanContext.Provider>
    )
}