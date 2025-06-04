import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  const filteredTodos =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        );
      })}
    </>
  );
};
export default TodoList;
