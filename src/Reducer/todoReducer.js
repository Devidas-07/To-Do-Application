const initialState={
    list:[]
}
export const todoReducer=(state=initialState,action)=>{
    console.log("list is",state.list);
    switch (action.type) {
        case "addtodo":
            const {id,data}=action.payload;
            return{
                ...state,
                list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }

            
            
            case "deletetodo":
                const newList=state.list.filter((e)=>e.id!==action.id)
                return{
                    ...state,
                    list:newList
                }
            
    
        default: return state
            
    }

}