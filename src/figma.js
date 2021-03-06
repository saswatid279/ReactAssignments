import { useState } from "react";
import "./styles.css";

export default function Size() {
  const font = [
    "Arial",
    "Algerian",
    "Corbel",
    "Constantia",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Candara",
    "Geneva"
  ];
  const [fonttype, setfonttype] = useState();
  var [size, setsize] = useState(18);
  return (
    <div
      className="App"
      style={{ fontSize: `${size}px`, fontFamily: fonttype }}
    >
      <select onChange={(event) => setfonttype(event.target.value)}>
        {font.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <p>Check how the size and font changes</p>
      <button class="sizebtn" onClick={() => setsize(size + 8)}>
        +
      </button>
      <button class="sizebtn" onClick={() => setsize(size - 8)}>
        -
      </button>
      <div>Current size of text is {size}px</div>
      <input
        id="inp"
        type="text"
        value={`h3{ font-family:Arial;font-size:16px;}`}
      />
      <button
        id="btn"
        onClick={() => {
          document.getElementById("inp").select();
          document.execCommand("copy");
        }}
      >
        Copy Css
      </button>
      <hr />
    </div>
  );
}
