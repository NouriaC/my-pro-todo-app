import './Todo.css';
import { FiXCircle, FiCheckCircle } from "react-icons/fi";


export default function Todo({ todo, handleEdit, handleDelete, handleComplete }) {
      

    return (
        <div className='todo-container'>
            <div 
            className={ todo.completed ? 'todo-content complete' : 'todo-content'}
            onClick={() => handleComplete(todo.id)}>
                {todo.title}
            </div>
            <div className='todo-buttons'>
                
                <FiCheckCircle
                className='btn-check'
                onClick={() => handleEdit(todo.id)}/>  
                
                <FiXCircle
                className='btn-delete'
                onClick={() => handleDelete(todo.id)}/>
            </div>
        </div>
    )
}
