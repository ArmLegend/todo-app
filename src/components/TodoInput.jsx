import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={(e) => {
          if (!value) {
            return;
          }
          onAdd(value);
          setValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};
export default TodoInput;
