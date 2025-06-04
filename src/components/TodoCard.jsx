const TodoCard = ({ todo, todoIndex, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          //   disabled={todo.completed}
          onClick={() => handleToggleTodo(todoIndex)}
        >
          <h6
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.completed ? "Undo" : "Done"}
          </h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};
export default TodoCard;
