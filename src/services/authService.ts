import axios from "axios"

const baseUrl = "http://localhost:3333"
export const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const  saveDataInLocalStorage =  async (key = "", value = {})  => {
    return  await localStorage.setItem(key,  JSON.stringify(value));
}
export const getDataInLocalStorage =   (key = "", defaut = null)  => {
    const data =    localStorage.getItem(key);
     if (data) {
        return JSON.parse(data)  ; 
     }else{
        return defaut;
     }
}
export const isAuthenticated = async ()  => {
    try {
       const authInfo = await getDataInLocalStorage("authUserInfo");
       if(authInfo.authUserToken && authInfo.authUserInfo.id){
            return true;
        }else{
            return false;
        }
   } catch (error) {
        return false;
   } 
   return false;
}