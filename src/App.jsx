import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (title) => {
    const newTask = { input: title, completed: false };
    setTodos([newTask, ...todos]);
  };

  const toggleTask = (index) => {
    const updatedTodo = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodo);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={deleteTask}
        handleToggleTodo={toggleTask}
      />
      <TodoInput onAdd={addTask} />
    </>
  );
}

export default App;
