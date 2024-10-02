import { useState } from "react";

export default function TodoInput({ handleAddTodo, todoValue, setTodoValue }) {
  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Enter todo..."
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      </header>
    </div>
  );
}
