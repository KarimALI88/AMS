//local storage

export const setAuthUser = (data)=>{
    //save object to the local storage
    localStorage.setItem("user", JSON.stringify(data))
}

export const getAuthUser = (data)=>{
    if(localStorage.getItem("user")){
        return JSON.parse(localStorage.getItem("user"))
    }
}
 
export const removeAuthUser = (data)=>{
    if(localStorage.getItem("user")){
        localStorage.removeItem("user")
    }
}