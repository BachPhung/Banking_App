import axios from "axios";
const baseUrl='http://localhost:5000/api/users'
const BaseUrl= 'http://localhost:5000/api/login'
const signup = async (input) =>{
    const res = await axios.post(baseUrl,input)
    return res.data
}

const login = async (credential) =>{
    const res = await axios.post(BaseUrl,credential)
    return res.data
}

export default {signup,login}