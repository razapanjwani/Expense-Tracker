export default (state:any,action:any) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                transactions:state.transactions.filter((item)=>item.id !== action.id)
            }
            break;
        case 'add':
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
            break;
        default:
            return state
    }
}
