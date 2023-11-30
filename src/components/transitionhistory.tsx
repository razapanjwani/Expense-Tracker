"use client"
import Transaction from "./Transaction";
import { GlobalContext } from "@/app/context/context";
import { useContext } from "react";
export default function TransitionHistory ( ){
    let {transaction,deleteTransaction} = useContext(GlobalContext)

    return(
        <div>
            <h3>Transition History</h3>
            <ul className="list">
                {transaction && transaction.map((item,index)=>{
                    return(
                        <Transaction key={index} transaction={item} onClick={deleteTransaction}/>
                    )
                })}
            </ul>
        </div>
    )
 }
