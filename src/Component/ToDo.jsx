import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToDo } from "../Action"
import { deleteTodo } from "../Action"


const ToDo = ()=>{
    
    const [task, addTask] =useState('')
    const dispatch = useDispatch();
   const list = useSelector((state)=>state.todoReducer.list)
    console.log(list);
    // const handleChange = (event)=>{
    //     addTask(event.target.value)
        
    //     console.log(`what is event ${event.target.value}`);
    // }
    
    
    console.log("task is",task);

    return(
        <div>
            <h1>TO DO Application</h1> 
            <div>
                <label>Add your Task: </label>
                <input type="text" name="" id="task" value={task} onChange={(e)=>addTask(e.target.value)}  />
                
                <button onClick={()=>dispatch(addToDo(task))&& addTask('')} >+</button>

                
            
                </div>
                <div>
                    {list.map((listItem)=>
                    {return(
                        <div>
                        <li style={{listStyleType:"none"}} key={listItem.id}>{listItem.data}
                        
                         <button onClick={()=>{dispatch(deleteTodo(listItem.id))}}>X</button></li>
                        
                        </div>
                    )}
                    )}
                </div>
                </div>
    
    

)
}
export default ToDo