import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app">
      <h1>What is your plan for today?</h1>
      <TodoForm 
       text={text}
       setText={setText}
       todos={todos}
       setTodos={setTodos}/>
       <TodoList 
       todos={todos}
       setTodos={setTodos}/>
    </div>
  );
}

export default App;
