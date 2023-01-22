import React from 'react';
import menulogo from "../img/menu-logo.png";
import langimg from "../img/lang-style.png";


export default function Header () {
    return(
        <div className="header">
        <ul className="header-langs">
          <li className="ru lang">RU</li>
          <img src={langimg} alt="" />
          <li className="en lang">EN</li>
          <img src={langimg} alt="" />
          <li className="de lang">DE</li>
        </ul>
        <h1>gleamy</h1>
        <div className="header-menu">
          <p>MENU</p>
          <img src={menulogo} alt="" />
        </div>
      </div>
    )
}