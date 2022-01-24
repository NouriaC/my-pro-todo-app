import Todo from './Todo';

export default function TodoList({ todos, todoEditing, setTodoEditing, editingText, setEditingText, handleEdit, handleDelete, handleComplete }) {
    return (
        <div>
           {todos.map(todo => (
               <Todo 
                key={todo.id}
                todo={todo}
                todoEditing={todoEditing}
                setTodoEditing={setTodoEditing}
                edidingText={editingText}
                setEditingText={setEditingText}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}/>
           ))}
        </div>
    )
}
