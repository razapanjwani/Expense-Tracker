"use client"
import { useState,useContext } from "react"
import { GlobalContext } from "@/app/context/context"
const AddTransition = () => {

    const {addTransition} = useContext(GlobalContext)
    const [description,setDescription] = useState("")
    const [amount,setAmount] = useState(0)

    const transactionDetail = {
        id:Math.floor(Math.random() * 100),
        description:description,
        transactionAmount:amount
    }
    function handleNumber(amount) {
        setAmount(amount)
        
    }
    
    return(
        <div>
            <h3>add transition</h3>
            <form action="" onSubmit={(e)=>{
                e.preventDefault()
                console.log(e);
                setAmount(0)
                setDescription("")
                addTransition(transactionDetail)
            }}>
                <label htmlFor="description">
                    Description
                </label>
                <input type="text" value={description} id="description" placeholder="Add The Description" onChange={(e)=>{setDescription(e.target.value)}}/>
                <label htmlFor="transition-amount">
                    Transition Amount
                </label>
                <input type="number" value={amount === 0 ? "" : amount} id="transition-amount" placeholder="Add The Amount" onChange={(e)=>{handleNumber(Number(e.target.value))}}/>
                <button className="btn">Add Transition</button>
            </form>
        </div>
    )
}
export default AddTransition