import Todo from './Todo';

export default function TodoList({ todos, handleEdit, handleDelete, handleComplete }) {
    return (
        <div>
           {todos.map(todo => (
               <Todo 
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}/>
           ))}
        </div>
    )
}
