"use client"
import { GlobalContext } from "@/app/context/context"
import {useContext} from "react"
const Balance = () => {
    let {transaction} = useContext(GlobalContext)
    
      const amounts = transaction.map(item => item.transactionAmount);

      const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    console.log(total);
    
    return(
        <>
            <div className="balance">
                <h4>Current Balance</h4>
                <h1>${total}</h1>
            </div>
        </>
    )
}
export default Balance