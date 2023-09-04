import { useRef, useState } from "react"
import React from "react"
const UserForm = ({press, task, onsubmit}) => {

    const tasks = useRef()

    const submit = (e) => {
        e.preventDefault()
        const todo = {
            task: tasks.current.value,
            id : Math.floor(Math.random() * 10000000000000)            
        }

        press(todo)
        tasks.current.value = ""
        onsubmit(tasks.current.value)

    }

    const entered = (e) =>{
            e.preventDefault()
            const todo = {
                task: tasks.current.value,
                id : Math.floor(Math.random() * 10000000000000)            
            }
    
            if(press) press(todo)
            
            
    
        
       if(onsubmit) onsubmit(tasks.current.value)
       tasks.current.value = ""
    }
    return(
        <form onSubmit={entered}>
            <input 
            type="text"
            placeholder="enter task"
            ref={tasks}
            defaultValue={task}
             />
        </form>
    )
}

export default UserForm