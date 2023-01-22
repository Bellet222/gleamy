
// System

import "./css/reset.css";
import "./css/App.css";
import "./css/adaptive.css"
import React, { useState, useEffect, useContext } from "react";
// Files

import Header from "./Blocks/Header";
import Block1 from "./Blocks/Block1";
import Block2 from "./Blocks/Block2";
import Block3 from "./Blocks/Block3";
import Block4 from "./Blocks/Block4";
import Basement from "./Blocks/Basement";

import Modal from './Blocks/Modal';
import { AppContext } from ".";


function App() {

  // UpButton
  const [scroll, setScroll] = useState(0);

  const {openModal, setOpenModal} = useContext(AppContext)
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

        <Header />

        <Block1 />

        <Block4 />

        <Block2 />

        <div className="block-2-line"></div>

        <Block3 />

        <Basement />
        <p className="contactwas" onClick={() => setOpenModal(true)}>
            Let’s Start With Us
          </p>
          <Modal active={openModal} onClick={() => setOpenModal(false)}/>
      </div>
  );
}

export default App;
