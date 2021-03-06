import { React, useState } from "react";
import "./Toast.css";

export default function Toasttypes() {
  const buttonlist = ["Success", "Warning", "Error"];
  var [toast, settoast] = useState({
    view: false,
    title: "success",
    message: "This is a success component"
  });
  function settoastvalue(btn) {
    settoast((prev) => {
      return {
        ...prev,
        view: true,
        title: btn,
        message: "This is a " + btn + " component"
      };
    });
  }
  function hide() {
    settoast((prev) => {
      return {
        ...prev,
        view: false
      };
    });
  }
  function Toast(props) {
    return (
      <div>
        <div
          className={`${props.title}`}
          style={{ display: props.view ? "block" : "none" }}
        >
          <button className="btn" onClick={() => hide()}>
            X
          </button>
          <div className="notify-text">
            <p className="title">{props.title}</p>
            <p className="message">{props.message}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {buttonlist.map((btn) => {
        return (
          <button id="show" onClick={() => settoastvalue(btn)}>
            {btn}
          </button>
        );
      })}
      <Toast view={toast.view} title={toast.title} message={toast.message} />
    </div>
  );
}
