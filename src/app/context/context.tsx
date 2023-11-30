"use client"
import {useContext,createContext,useState,useEffect,useReducer} from "react"
export const GlobalContext = createContext(null)

import AppReducer from "./globalReducer"
// Describing the initialState
const initialState = {
    transactions:[]
}
const Context = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction(id){
        dispatch({type:'delete',id:id})
    }
    function addTransition(transaction){
        dispatch({type:'add',payload:transaction})
    }
    return(
        <GlobalContext.Provider value={
            {
                transaction:state.transactions,
                deleteTransaction,
                addTransition
            }
        }>
        {children}
        </GlobalContext.Provider>
    )
}


export default Context