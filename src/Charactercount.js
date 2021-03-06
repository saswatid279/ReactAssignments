import { useState } from "react";
import "./styles.css";

export default function Count() {
  const [char, setchar] = useState(0);
  const [view, setview] = useState("none");
  const [disable, setdisable] = useState(false);

  function count(event) {
    if (event.target.value.length > 50) {
      setview("block");
      setdisable(true);
    } else {
      setview("none");
      setchar(event.target.value.length);
    }
  }
  return (
    <div className="App">
      <h3>Character Count</h3>
      <textarea disabled={disable} onChange={count} />
      <div>
        {char}
        {"/50"}
      </div>
      <div style={{ display: view }}>Character has exceeded limit</div>
      <hr />
    </div>
  );
}
