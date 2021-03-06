import "./styles.css";
import Toggle from "./Toggle";
import Todo from "./Todolist";
import Counter from "./Counter";
import Toasttypes from "./Toasttypes";
import Switchtab from "./Switchtab";
import Showpassword from "./Showpassword";
import Passwordmatch from "./Passwordmatch";
import Disable from "./Disablesubmit";
import Count from "./Charactercount";
import Size from "./figma";
import Cart from "./Cart";
import Like from "./Like";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Count />
      <Disable />
      <Passwordmatch />
      <Showpassword />
      <Size />
      <Switchtab />
      <Todo />
      <hr />
      <Cart />
      <hr />
      {/* <Toast /> */}
      <Toasttypes />
      <hr />
      <Toggle />
      <Like />
    </div>
  );
}
