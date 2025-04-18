import axios from "axios"
import { API_URL } from "../config"
export const login = async ( data : {
    email: string , 
    password: string
}) => {
    const res = await axios.post(`${API_URL}/api/auth/login` , data)
    return res
}

export const signUp =  async( data : {
    email :string, 
    password: string , 
    isChef: boolean
}) => {
    const res =  await axios.post(`${API_URL}/api/auth/signup`, data)
    return res
}

export const getUsers =  async()  => {
    const res =  await axios.get(`${API_URL}/api/auth/users`)
    return res
}