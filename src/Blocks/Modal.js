import React, { useState } from "react";
import telega from "../img/telega.png";
import inst from "../img/inst.png";
import post from "../img/post.png";

export default function Modal({active}) {


  return (
    <div className={`modal ${active ? 'activeclass' : ''}`}>
      <div className="modal-window">
        <p className="exit">X</p>
        <p className="modal-title">Связаться с нами</p>
        <div className="modal-line"></div>
        <div className="social">
          <div className="telega bg-styles">
            <img src={telega} alt="" />
            <p>Telegram - Быстрый контакт и быстрый ответ</p>
          </div>

          <div className="inst bg-styles">
            <img src={inst} alt="" />
            <p className="other-text">Instagram - возможность следить за нашей командой и узнать новую информацию</p>
          </div>

          <div className="post bg-styles">
            <img src={post} alt="" />
            <p className="other-text">Почта - Для деловых дядек</p>
          </div>
        </div>
      </div>
    </div>
  );
}
