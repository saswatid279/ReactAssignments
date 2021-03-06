import { useState } from "react";
import "./styles.css";

export default function Counter() {
  const [value, setvalue] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setvalue(value + 1)} style={{ margin: "0.5rem" }}>
        +
      </button>
      <button onClick={() => setvalue(value - 1)} style={{ margin: "0.5rem" }}>
        -
      </button>
      <div>{value}</div>
    </div>
  );
}
