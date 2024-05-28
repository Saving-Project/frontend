import axios from './axios'

export const createSavingRequest = () => axios.post('/saving')
export const getSavingRequest = () => axios.get('/saving')
export const updateSavingRequest = day => axios.put('/saving', day)