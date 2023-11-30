"use client"
import {useContext} from "react"
import { GlobalContext } from "@/app/context/context";
const TransitionSummary = () => {
    const {transaction} = useContext(GlobalContext)
    const amount = transaction.map((item)=>item.transactionAmount)
    const income = amount.filter((item)=>item > 0).reduce((acc,item) => (acc +=item) , 0).toFixed(2)
    const expense = amount.filter((item)=>item < 0).reduce((acc,item) => (acc +=item) , 0).toFixed(2)
    return(
        <div className="transition-history-container">
            <div>
                <h4>income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    )
}
export default TransitionSummary;