import { useEffect, useState } from "react"

function useGetData(url){
    const [Items,setItems]=useState(null)
    const [Error,setError]=useState(false)
    const [isLoaded,setisLoaded]=useState(true)
    const Controller=new AbortController()
    const GetData=async()=>{
        try{
            const Response=await fetch(url,{signal:Controller.signal})
            if(!Response.ok){
                throw Error('Something is wrong!!!')
            }
            const info= await Response.json()
            setItems(info)
            setisLoaded(false)
        }catch(Error){
            setError(true)
        }finally{
            setisLoaded(false)
        }
    }
    useEffect(()=>{
        GetData()
        return()=>{
            Controller.abort()
        }
    },[url])
    return [Items, Error, isLoaded]
}
export default useGetData