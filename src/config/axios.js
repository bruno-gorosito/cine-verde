
import axios from 'axios';


const ClienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})
export default ClienteAxios;