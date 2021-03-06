import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
toast.configure();
function Toast() {
  const view = () => {
    toast("success");
  };
  return (
    <div>
      <button id="show" onClick={view}>
        Show Toast
      </button>
      <hr></hr>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Toast />
    </div>
  );
}
