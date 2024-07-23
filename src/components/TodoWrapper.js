import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (item) => {
        setTodos([...todos, {id: crypto.randomUUID(), title: item, completed: false, isEditing: false, description: null}])
        console.log(todos);
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }

    const handleDelete = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handleEdit = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTodo = (title, id, description) =>{
        setTodos(todos.map(todo => todo.id===id ? {...todo, title, isEditing: !todo.isEditing, description}: todo))
        console.log(todos)
    }
  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      <h2>To Do List</h2>
      {todos.map((todo, index) =>(
        todo.isEditing ?  <EditTodoForm handleEdit={handleEdit} todo={todo} editTodo={editTodo}/> :  <Todo todo={todo} key={index} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ))}
      
    </div>
  )
}

export default TodoWrapper
