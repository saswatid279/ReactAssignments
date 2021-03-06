import { useState } from "react";
import "./styles.css";

export default function Toggle() {
  var [btn, setbtn] = useState("Switch to Dark Mode");
  var [bgcolor, setbgcolor] = useState("white");
  var [colour, setcolour] = useState("black");
  function setbgrnd() {
    if (btn === "Switch to Dark Mode") {
      setbtn("Switch to Light Mode");
      setbgcolor("black");
      setcolour("white");
    } else {
      setbtn("Switch to Dark Mode");
      setbgcolor("white");
      setcolour("black");
    }
  }
  return (
    <div className="Toggle">
      <div id="toggle" style={{ backgroundColor: bgcolor, color: colour }}>
        <h2>Toggle between Dark and Light mode </h2>
        <p>Click on the button to switch from one mode to another</p>
        <button id="togglebtn" onClick={setbgrnd}>
          {btn}
        </button>
      </div>
      <hr></hr>
    </div>
  );
}
