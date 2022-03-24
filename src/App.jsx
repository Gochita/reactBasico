import React, { useState, Fragment, useRef } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);
const todoTaskRef= useRef();

const handleTodoAdd= () =>{

}

  return (
    <Fragment>
      <TodoList todos={todos} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>
      <button onClick={handleTodoAdd}>➕</button>
      <button>🗑</button>
    </Fragment>
  );
}
