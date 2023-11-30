"use client"
import { useState,useContext } from "react"
import { GlobalContext } from "@/app/context/context"
const AddTransition = () => {

    const {addTransition} = useContext(GlobalContext)
    const [description,setDescription] = useState("")
    const [amount,setAmount] = useState(0)
    const [error,setError] = useState({
        descriptionError:"",
        amountError:""
    })
    
    function handleNumber(amount) {
        setAmount(amount)
        
    }
    function handleSubmit(){
        if(description === ""){
            setError({...error,descriptionError:"block"})
            return false
        }
        if(amount === 0){
            setError({...error,amountError:"block"})
            return false
        } else {
            const transactionDetail = {
                id:Math.floor(Math.random() * 100),
                description:description,
                transactionAmount:+amount
            }
            addTransition(transactionDetail)
            setAmount(0)
            setDescription("")
            
        }

    }
    
    return(
        <div>
            <h3>add transition</h3>
            <form action="" onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit()
            }}>
                <label htmlFor="description">
                    Description
                </label>
                <input type="text" value={description} id="description" placeholder="Add The Description" onChange={(e)=>{
                    setDescription(e.target.value)
                    setError(
                        {
                            ...error,
                            descriptionError:"",
                    })
                    }}/>
                <h1 className={error.descriptionError === "" ? "hidden" : "block"}>this is required!</h1>
                <label htmlFor="transition-amount">
                    Transition Amount
                </label>
                <input type="number" value={amount === 0 ? "" : amount} id="transition-amount" placeholder="Add The Amount" onChange={(e)=>{
                    handleNumber(Number(e.target.value))
                    setError(
                        {
                            ...error,
                            amountError:"",
                    })
                    }}/>
                <h1 className={error.amountError === "" ? "hidden" : "block"}>this is required!</h1>
                <button className="btn">Add Transition</button>
            </form>
        </div>
    )
}
export default AddTransition