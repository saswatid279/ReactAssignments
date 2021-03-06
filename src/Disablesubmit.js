import { useState } from "react";
import "./disable.css";

export default function Disable() {
  const [disablebtn, setdisablebtn] = useState(true);
  const [password, setpassword] = useState();
  const [Rpassword, setRpassword] = useState();
  const [msg, setmsg] = useState("");

  function Match(event) {
    setRpassword(event.target.value);
    setRpassword((state) => {
      if (state === password) {
        setdisablebtn(false);
      } else {
        setdisablebtn(true);
      }
    });
  }

  return (
    <div className="App">
      <div>
        <h3>Disable Submit and Alphanumeric</h3>
        <input
          id="pass1"
          placeholder="Enter your password"
          onChange={(event) => {
            setpassword(event.target.value);
            if (event.target.value.match(/\d+/g)) {
              setmsg("");
            } else setmsg("password should contain a number");
          }}
        ></input>
        <input
          id="pass2"
          placeholder="Re-enter your password"
          onChange={Match}
        ></input>
        <div>{msg}</div>
        <button id="btndisable" disabled={disablebtn}>
          Submit
        </button>
        <hr />
      </div>
    </div>
  );
}
