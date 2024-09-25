
export const  saveDataInLocalStorage =   (key = "", value = {})  => {
    return   localStorage.setItem(key,  JSON.stringify(value));
}
export const getDataInLocalStorage =   (key = "", defaut = null)  => {
    const data =    localStorage.getItem(key);
     if (data) {
        return JSON.parse(data)  ; 
     }else{
        return defaut;
     }
}
export const getAuthUserInfo =   ()  => {
   try {
       return  getDataInLocalStorage("authUserInfo").authUserInfo;
   } catch (error) {
       return  null;
   }
}
export const getAuthTokenAccess =   ()  => {
    try {
        return  getDataInLocalStorage("authUserInfo").authUserToken;
    } catch (error) {
        return  null;
    }
}
export const isAuthenticated =  ()  => {
    try {
       const authInfo =  getDataInLocalStorage("authUserInfo");
       if(authInfo.authUserToken && authInfo.authUserInfo.id){
            return true;
        }else{
            return false;
        }
   } catch (error) {
        return false;
   } 
}
export const destroySession =  async ()  => {
    try {
        await saveDataInLocalStorage("authUserInfo", {});
        await localStorage.removeItem("authUserInfo");
   } catch (error) {
        return false;
   } 
}