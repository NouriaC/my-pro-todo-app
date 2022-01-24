import './App.css';
import TodoList from './components/TodoList';
import { generateId } from './Utilities';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

   const handleSubmit = (e) => {
        e.preventDefault();
        if(!text || /^\s*$/.test(text)) {
            return 
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
        const editedTodo = [...todos].map(todo => {
            if(todo.id === id) {
                todo.title = editingText
            }
            return todo;
        })
        setEditingText(editedTodo);
        setTodoEditing(null);
        setEditingText('');
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
            <button type="submit" className="todo-button">add todo</button>
        </form>
       <TodoList 
       todos={todos}
       handleDelete={handleDelete}
       handleEdit={handleEdit}
       handleComplete={handleComplete}
       todoEditing={todoEditing}
       setTodoEditing={setTodoEditing}
       setEditingText={setEditingText}
       editingText={editingText}/>
    </div>
  );
}

export default App;
