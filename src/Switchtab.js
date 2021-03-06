import { useState } from "react";
import "./styles.css";
function Switchtab() {
  const tabs = ["Home", "Profile", "About"];
  const [tab, settab] = useState("Home");
  const Home = () => {
    return "This is Home Tab";
  };
  const Profile = () => {
    return "This is Profile Tab";
  };
  const About = () => {
    return "This is About Tab";
  };
  return (
    <div>
      {tabs.map((item) => {
        return (
          <button keys={item} id="showpassbtn" onClick={() => settab(item)}>
            {item}
          </button>
        );
      })}
      <div className="tab">{tab === "Home" && <Home />}</div>
      <div className="tab">{tab === "About" && <About />}</div>
      <div className="tab">{tab === "Profile" && <Profile />}</div>
      <hr></hr>
    </div>
  );
}

export default Switchtab;
