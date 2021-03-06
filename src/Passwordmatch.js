import { useState } from "react";
import "./styles.css";

export default function Passwordmatch() {
  const [password, setpassword] = useState();
  const [Rpassword, setRpassword] = useState();
  const [msg, setmsg] = useState();

  function match() {
    //setRpassword(event.target.value);
    setRpassword((state) => {
      if (state !== password) {
        alert("Passwords do not match");
        setmsg("Passwords do not match");
      } else {
        setmsg("");
      }
    });
  }

  return (
    <div className="App">
      <div>
        <h3>Password Match</h3>
        <input
          id="pass1"
          placeholder="Enter your password"
          onChange={(event) => setpassword(event.target.value)}
        ></input>
        <input
          id="pass2"
          placeholder="Re-enter your password"
          onChange={(event) => setRpassword(event.target.value)}
          onBlur={match}
        ></input>
      </div>
      <h3>{msg}</h3>
      <hr></hr>
    </div>
  );
}
