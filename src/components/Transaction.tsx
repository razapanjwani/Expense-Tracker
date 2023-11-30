const Transaction = ({transaction,onClick}) => { 
    const{id,description,transactionAmount} = transaction
    return(
        <>
            <li className="plus">
                {description}
                {<span>${transactionAmount}</span>}
                <button className="delete-btn" onClick={()=>onClick(id)}>X</button>
            </li>
        </>
    )
}
export default Transaction;