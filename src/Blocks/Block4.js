import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react';

export default function Block4() {

    const [animationComplete, setAnimationComplete] = useState(false)
    // useEffect

    const [springs, api] = useSpring(() => ({
        from: { x: -1380 },
      }))

      const handleClick = () => {
        if (window.scrollY > 680 && !animationComplete) {
            setAnimationComplete(true)
            api.start({
                to: {
                    x: 0,
                },
                })
        }
      }
      

      useEffect(() => {
        window.addEventListener("scroll" , handleClick);
        return () => window.removeEventListener("scroll", handleClick);
      },[animationComplete])


  return (
    <animated.div 
    className="block-4"
    style={springs}>
      <div className="block-4-title">
        <p className="title-text">О НАС</p>
        <div className="title-line"></div>
      </div>


      <div className="block-4-main">
        <div className="block-4-bg-letter">g</div>
        <div className="main-info">
        <p className="main-title">we are a digital production team.</p>
        <p className="main-text">Gleamy is a leading design & software development agency 
        based in berlin. We help startups & Fortune 500 companies 
        delight humans on the other side of the screen.</p>
        <button className="main-button">Contact us</button>
        </div>
      </div>

    </animated.div>
  );
}
