import axios from './axios'

export const registerRequest = user => axios.post('/user', user)
export const loginRequest = user => axios.post('/login', user)
export const getInfoRequest = () => axios.get('/user')