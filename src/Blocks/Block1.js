import logo from "../img/logo.png";
import logog from "../img/logo-g.png";
import Modal from './Modal';
import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react';

export default function Block1 () {

  // ANIM 

  const springs = useSpring({
    from: { x: -1220 },
    to: { x: 0 },
  })
  

    // MODAL 

  const [active, setActive] = useState(false)

    return(
        <animated.div 
        className="block-1"
        style={springs}
        >
        <div className="logo-g">
          <img src={logog} alt="" />
        </div>
        <div className="maintext">
          <h2>GLEAMY</h2>
          <img className="main-logo" src={logo} alt="" />
          <div className="diagents">
            <p className="diagent">Digital agency</p>
            <p className="diagent-subtitle">
              We create websites and applications that stand out among
              competitors
            </p>
          </div>
        </div>
        <div className="line"></div>
        <p className="contactwas" onClick={() => setActive(true)}>
          Let’s Start With Us
        </p>
        <div className="block-1-line"></div>
        <Modal active={active}/>
      </animated.div>
    )
}