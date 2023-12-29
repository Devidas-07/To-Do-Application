export const addToDo=(data)=>{
    console.log(`data is${data}`);
    return{
        type:"addtodo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=(id)=>{
    return{
        type:"deletetodo",
        id

    }
}
