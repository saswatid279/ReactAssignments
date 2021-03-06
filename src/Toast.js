import { React, useState } from "react";
import "./Toast.css";

export default function Toast() {
  var [view, setview] = useState("none");
  return (
    <div>
      <button id="show" onClick={() => setview("block")}>
        Show Toast
      </button>
      <div
        className="notify-container"
        style={{ backgroundColor: "green", display: view }}
      >
        <button className="btn" onClick={() => setview("none")}>
          X
        </button>
        <div className="notify-text">
          <p className="title">Success</p>
          <p className="message">This is a Success component</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
