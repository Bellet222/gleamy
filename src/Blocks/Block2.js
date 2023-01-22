import React, { useEffect, useState } from 'react';
import Blocks from "../Blocks";
import tag from "../img/Tag.png";
import { useSpring, animated } from '@react-spring/web'




export default function Block2 () {

    const [animationComplete, setAnimationComplete] = useState(false)
    // useEffect

    const [springs, api] = useSpring(() => ({
        from: { x: 1180 },
      }))

      const handleClick = () => {
        if (window.scrollY > 1100 && !animationComplete) {
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

      

    return(
        <animated.div 
            className="block-2"
            style={springs}
        >
        <div className="blockline"></div>
        <div className="block-2-title">
          <animated.h3>SERVICES</animated.h3>
          <div></div>
        </div>
        <div className="block-2-services">
          <img className="block-2-info" src={tag} alt="" />
          <div className="block-2-s"></div>
          <p className="bg-letter">S</p>
          <Blocks
            title="Brand Identity"
            text="Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape."
          />
          <Blocks
            title="Technology."
            text="Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape."
          />
          <Blocks
            title="UX/UI Design."
            text="Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape."
          />
        </div>
        <div className="block-2-bg-text">the<br/> cre8t<br/>ive</div>
        
      </animated.div>
    )
}