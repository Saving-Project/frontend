import React, { createContext, useContext, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createSavingsPlanRequest } from '../services/saving-service'

export const PlanContext = createContext()

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState(null)
    const [planErrors, setPlanErrors] = useState([])

    const { isAuthenticated } = useContext(AuthContext)

    const createPlan = async plan => {
        if (!isAuthenticated) return

        try {
            const res = await createSavingsPlanRequest(plan)
            setPlan(res.data)
            return true
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PlanContext.Provider value={{
            createPlan,
            plan,
            planErrors
        }}>
            {children}
        </PlanContext.Provider>
    )
}