import './Todo.css';

export default function Todo({ todo, todos, setTodos }) {
    return (
        <div>
            {todo.text}
        </div>
    )
}
