import "./styles.css";
import { useState } from "react";

export default function Todo() {
  const [item, setitem] = useState("");
  const [todolist, settodolist] = useState([]);

  function Add(item) {
    settodolist((previous) => [
      ...previous,
      {
        id: Math.random(),
        item: item,
        completed: false
      }
    ]);
    setitem("");
  }

  function Check(id) {
    settodolist((previous) =>
      previous.map((iteminTodo) => {
        if (iteminTodo.id === id) {
          return { ...iteminTodo, completed: !iteminTodo.completed };
        }
        return iteminTodo;
      })
    );
  }

  return (
    <div id="todo">
      <h3>Todo List</h3>
      <input
        id="pass"
        onChange={(event) => setitem(event.target.value)}
        value={item}
      ></input>
      <button
        id="todobtn"
        onClick={() => {
          Add(item);
        }}
      >
        Add
      </button>
      <ul type="none">
        {todolist.map((currenttask) => {
          return (
            <li key={currenttask.id}>
              <span
                id="todotext"
                style={{
                  textDecoration: currenttask.completed
                    ? "line-through"
                    : "none"
                }}
                onClick={() => {
                  Check(currenttask.id);
                }}
              >
                {currenttask.item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
