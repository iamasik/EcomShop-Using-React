import { useContext,createContext, useEffect, useState, useReducer } from "react"
import useGetData from "./CustomHooks/useGetData"
import useLocalStorage from "./CustomHooks/UseLocalStorage"

const ContextBox=createContext()
const ContextValues=()=>{
    return useContext(ContextBox)
}
function ReducerFunc(state,action){
    if(action.type==="ADD"){
        return [...state, action.value]
    }
    if(action.type==="Inc"){
        return state.map(item=> item.id===action.id? {...item,qty:item.qty+1}:item)
    }
    if(action.type==="Del"){
        return state.filter(item=> item.id!==action.id)
    }
    if(action.type==="Dec"){
        return state.map(item=> {
            if(item.id===action.id){
                if(item.qty>1){
                    return {...item,qty:item.qty-1}
                }
                else{
                    return item
                }
            }
            else{
                return item
            }
            }
        )
    }

}

const url="https://fakestoreapi.com/products?limit=20"
function ContextWrapper({children}){
    const [CartData, setLocalData]=useLocalStorage("Cart",[])
    const [isOpen,setisOpen]=useState(false)
    const [state,dispatch]=useReducer(ReducerFunc,CartData)
    const [Items, Error, isLoaded]=useGetData(url,[])
    useEffect(()=>{
        setLocalData(JSON.stringify(state))
    },[state])
    // const FetchData = async()=>{
    //     const response=await fetch(url)
    //     const Data=await response.json()
    //     setItems(Data)
    // }
    // useEffect(()=>{
    //     FetchData()
    // },[])

    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'scroll';
        }
      }
      ,[isOpen])

    function AddData(Data){
        dispatch({
            type:"ADD",
            value:Data
        })
    }
    function Inc(Data){
        dispatch({
            type:"Inc",
            id:Data
        })
    }
    function Dec(Data){
        dispatch({
            type:"Dec",
            id:Data
        })
    }
    function Del(Data){
        dispatch({
            type:"Del",
            id:Data
        })
    }
    return(
        <ContextBox.Provider value={{Items, state, Error, AddData, isLoaded, isOpen, setisOpen,Inc,Dec, Del}}>
            {children}
        </ContextBox.Provider>
    )
}

export default ContextWrapper
export {ContextValues}