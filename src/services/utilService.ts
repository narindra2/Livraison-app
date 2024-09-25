import axios from "axios"
import { getAuthTokenAccess } from "./authService";

const baseUrl = "http://localhost:3333"
const token = getAuthTokenAccess();

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers :{ Authorization: `Bearer ${token}` }
});