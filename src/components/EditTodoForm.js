import React, { useState } from 'react'

const EditTodoForm = ({editTodo, todo}) => {

    const [item, setItem] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
   

    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(item, todo.id, description);
        
        
    }

    
  return (
   <form onSubmit={handleSubmit}>
    <input type='text' placeholder='Update task' value={item} onChange={e => setItem(e.target.value)} />
    <input type='text' placeholder='Add description' value={description} onChange={e => setDescription(e.target.value)} />
    <button>Update Task</button>
   </form>
  )
}

export default EditTodoForm
