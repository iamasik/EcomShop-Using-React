import { useEffect, useState } from "react"

function  useLocalStorage(key,initialValue){
    const CartData=localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)): initialValue
    const[LocalData,setLocalData]=useState([])
    useEffect(()=>{
        if(LocalData){
            localStorage.setItem(key,LocalData)
        }
    },[LocalData])
    return [CartData, setLocalData]
}
export default useLocalStorage