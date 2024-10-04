import axios from "axios"
import { getAuthTokenAccess } from "./authService";

const baseUrl = "https://testeur-app.zkcl3814.odns.fr"
const token = getAuthTokenAccess();
export const axiosInstance = axios.create({
    baseURL: baseUrl,
    // headers :{ 
    //         'Authorization' : `Bearer ${token}`,
    //          "Accept": 'application/json',
    //         "Access-Control-Allow-Origin": '*',
    //         "Access-Control-Allow-Methods": "GET, POST,HEAD,PUT, OPTIONS,DELETE",
    //         'Content-Type': 'application/json;charset=UTF-8',
    //     }
});