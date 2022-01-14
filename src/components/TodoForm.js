import './TodoForm.css';
import { generateId } from '../Utilities';

export default function TodoForm({ text, setText, todos, setTodos }) {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { text, completed: false, id: generateId() }
        setTodos([...todos, newTodo])
        setText('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
             type="text"
             className="todo-input"
             placeholder="add a todo"
             onChange={(e)=> setText(e.target.value)}
             value={text}
            />
            <button className="todo-button">Add Todo</button>
        </form>

    )
}
