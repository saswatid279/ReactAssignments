import { useState } from "react";
import "./styles.css";

export default function Like() {
  const [list, setlist] = useState([
    { id: Math.random(), name: "Burger", like: false },
    { id: Math.random(), name: "Pizza", like: false },
    { id: Math.random(), name: "Frenchfries", like: false },
    { id: Math.random(), name: "Momo", like: false }
  ]);
  function changelike(id) {
    setlist((previous) =>
      previous.map((iteminlist) => {
        if (iteminlist.id === id) {
          return { ...iteminlist, like: !iteminlist.like };
        }
        return iteminlist;
      })
    );
  }
  return (
    <div>
      <h2>Like in a list</h2>
      <ul type="none">
        {list.map((item) => {
          return (
            <div>
              <li id="list" key={item.id}>
                <span id="listtext">{item.name}</span>
                <span>
                  <button
                    id="listbutton"
                    style={{ backgroundColor: item.like ? "green" : "grey" }}
                    onClick={() => changelike(item.id)}
                  >
                    Like
                  </button>
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
