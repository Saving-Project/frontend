import axios from './axios'

export const createSavingsPlanRequest = saving => axios.post('/saving', saving)
export const getPlanRequest = id => axios.get(`/saving/${id}`)
export const getPlansRequest = () => axios.get('/savings')
export const markDayAsSavedRequest = (id, saving) => axios.put(`/saving/${id}`, saving)
export const resetPlanRequest = id => axios.put(`/saving/${id}/reset`)
export const completePlanRequest = id => axios.put(`/saving/${id}`)
export const deletePlanRequest = id => axios.delete(`/saving/${id}`)