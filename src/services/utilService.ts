import axios from "axios"
import { getAuthTokenAccess } from "./authService";

const baseUrl = "https://testeur-app.zkcl3814.odns.fr"
axios.defaults.baseURL = baseUrl;
const token = getAuthTokenAccess();
axios.defaults.baseURL = 'https://testeur-app.zkcl3814.odns.fr'
export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers :{ 
            'Authorization' : `Bearer ${token}`,
             "Accept": 'application/json',
            "Access-Control-Allow-Origin": '*',
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Methods": "GET, POST,HEAD,PUT, OPTIONS,DELETE",
        }
});