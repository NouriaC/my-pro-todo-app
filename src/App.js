import './App.css';
import TodoList from './components/TodoList';
import { generateId } from './Utilities';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

   const handleSubmit = (e) => {
        e.preventDefault();
        if(!text || /^\s*$/.test(text)) {
            return 
        } else if (text & isEditing) {
             setTodos(todos.map(todo => {
                 if(todo.id === editID) {
                     return {...todo, title: text}
                 }
                 return todo
             }))
             setText('');
             setEditID(null);
             setIsEditing(false);
         } else {
        const newTodo = { title: text, completed: false, id: generateId() }
        setTodos([...todos, newTodo])
        setText('');
         } 
       }
   
  const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos)
    }

   const handleEdit = (id) => {
        const editedTodo = todos.find(todo => todo.id === id);
        setIsEditing(true);
        setEditID(id);
        setText(editedTodo.title);
    }

    const handleComplete = (id) => {
         let updatedTodos = todos.map(todo => {
             if(todo.id === id) {
                 return {...todo, completed: !todo.completed}
             }
             return todo;
         })
         setTodos(updatedTodos);
     }

  return (
    <div className="todo-app">
      <h1>What is your plan for today?</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
            <input 
             type="text"
             className="todo-input"
             placeholder="add a todo"
             onChange={(e)=> setText(e.target.value)}
             value={text}
            />
            <button type="submit" className="todo-button">
                {isEditing ? 'Edit' : 'Add Todo'}</button>
        </form>
       <TodoList 
       todos={todos}
       handleDelete={handleDelete}
       handleEdit={handleEdit}
       handleComplete={handleComplete}/>
    </div>
  );
}

export default App;
