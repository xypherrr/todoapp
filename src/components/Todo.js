

const Todo = ({todo, toggleComplete, handleDelete, handleEdit}) => {
  return (
    <div className="flex">
        <input type="checkbox" checked={todo.completed} onChange={e => toggleComplete(todo.id, e.target.checked)}/>
        <div>
        <p>{todo.title}</p>
        {todo.description !== null ? <p>{todo.description}</p> : null}
        </div>
        
        <button onClick={() => handleDelete(todo.id)}>Remove</button>
        <button onClick={() => handleEdit(todo.id)}>Edit</button>
      </div>
    
  )
}

export default Todo
