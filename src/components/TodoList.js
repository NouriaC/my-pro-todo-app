import './TodoList.css';
import Todo from './Todo';

export default function TodoList({ todos, setTodos }) {
    return (
        <div>
           {todos.map(todo => (
               <Todo 
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}/>
           ))}
        </div>
    )
}
