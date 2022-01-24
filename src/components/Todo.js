import './Todo.css';
import { FiXCircle, FiCheckCircle } from "react-icons/fi";


export default function Todo({ todo, todoEditing, setTodoEditing, handleEdit, handleDelete, handleComplete, editingText, setEditingText}) {
      

    return (
        <div className='todo-container'>
            {todoEditing === todo.id ? (
              <input 
                type="text"
                className='todo-input'
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}/>
            ) : (
            <div 
              className={ todo.completed ? 'todo-content complete' : 'todo-content'}
              onClick={() => handleComplete(todo.id)}>
                {todo.title}
            </div>
            )}
            <div className='todo-buttons'>
                {todoEditing === todo.id ? (
                    <button 
                    className= "submit-button" 
                    onClick={() => handleEdit(todo.id)}>Edit</button>
                ) : (
                    <>
                   <FiCheckCircle
                   className='btn-check'
                   onClick={() => setTodoEditing(todo.id)}/>  
                  <FiXCircle
                   className='btn-delete'
                   onClick={() => handleDelete(todo.id)}/> 
                   </>
                )}      
            </div>
        </div>
    )
}
