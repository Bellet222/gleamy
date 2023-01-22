
// System

import "./css/reset.css";
import "./css/App.css";
import "./css/adaptive.css"
import { useState, useRef, useEffect } from "react";
// Files

import Header from "./Blocks/Header";
import Block1 from "./Blocks/Block1";
import Block2 from "./Blocks/Block2";
import Block3 from "./Blocks/Block3";
import Modal from "./Blocks/Modal";
import Block4 from "./Blocks/Block4";
import Basement from "./Blocks/Basement";



function App() {
  // UpButton
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    // 
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  // MainCode
  return (
    <div className="App">
      <div className="up-btn">
        <button className={scroll < 300 ? "" : "show"} onClick={handleUpButton}>
        ↑
        </button>
      </div>

      <Modal/>

      <Header/>
      
      <Block1/>

      <Block4/>

      <Block2/>

      <div className="block-2-line"></div>

      <Block3/>

      <Basement/>

    </div>
  );
}

export default App;
