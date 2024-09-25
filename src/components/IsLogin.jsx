import { createContext, useContext, useState } from "react"

const IsLoginContext=createContext()
const IsLoginValue=()=>{
    return useContext(IsLoginContext)
}

function IsLogin({children}){
    const [User, setUser]=useState(false)
    return(
        <IsLoginContext.Provider value={{User,setUser}}>
            {children}
        </IsLoginContext.Provider>
    )
}
export {IsLoginValue}
export default IsLogin