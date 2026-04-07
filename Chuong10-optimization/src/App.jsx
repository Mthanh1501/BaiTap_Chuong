import React, { useState, useCallback } from "react";

const TodoItem = React.memo(function TodoItem({ todo, onRemove }) {
  console.log("RENDER LẠI:", todo.text);
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 6 }}
    >
      <div>{todo.text}</div>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
});

function TodoList({ todos, onRemove }) {
  return (
    <div className="card">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: "t1", text: "Todo 1" },
    { id: "t2", text: "Todo 2" },
    { id: "t3", text: "Todo 3" },
  ]);
  const removeTodo = useCallback(
    (id) => setTodos((t) => t.filter((x) => x.id !== id)),
    [],
  );
  return (
    <div style={{ padding: 16 }}>
      <h1>Performance Demo (Chương 10)</h1>
      <div style={{ marginBottom: 8 }}>
        Count: {count}{" "}
        <button onClick={() => setCount((c) => c + 1)}>Tăng Count</button>
      </div>
      <TodoList todos={todos} onRemove={removeTodo} />
    </div>
  );
}

