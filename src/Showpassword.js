import { useState } from "react";
import "./password.css";

export default function Showpassword() {
  var [btntext, setbtntext] = useState("Show Password");
  var [passtype, setpasstype] = useState("password");
  function set() {
    if (btntext === "Hide Password") {
      setbtntext("Show Password");
      setpasstype("password");
    } else {
      setbtntext("Hide Password");
      setpasstype("text");
    }
  }
  return (
    <div className="App">
      <h3>Show/Hide Password</h3>
      <input id="pass" type={passtype} placeholder="Enter the Password" />
      <button id="btn" onClick={set}>
        {btntext}
      </button>
      <hr></hr>
    </div>
  );
}
