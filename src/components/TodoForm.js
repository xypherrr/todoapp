import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [item, setItem] = useState("");
   

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(item);
        setItem("");
        
    }

    
  return (
   <form onSubmit={handleSubmit}>
    <input type='text' placeholder='Enter your task' value={item} onChange={e => setItem(e.target.value)} />
    <button>Add Task</button>
   </form>
  )
}

export default TodoForm
