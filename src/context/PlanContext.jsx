import React, { createContext } from 'react'

export const PlanContext = createContext()

export const PlanProvider = ({ children }) => {
    return (
        <PlanContext.Provider value={{

        }}>
            {children}
        </PlanContext.Provider>
    )
}