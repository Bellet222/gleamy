import Slider from "../Slider";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react';


export default function Block3 () {


  const [animationComplete, setAnimationComplete] = useState(false)
    // useEffect

    const [springs, api] = useSpring(() => ({
        from: { x: -1380 },
      }))

      const handleClick = () => {
        if (window.scrollY > 1990 && !animationComplete) {
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
        className="block-3"
        style={springs}
        >
        <div className="block-3-title">
          <h5>portfolio</h5>
          <div></div>
        </div>
        <div className="block-3-slider">
          <Slider img={image1} title="DeinSteinDesign" text="We have developed an online store
          with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany." 
            />
          <Slider img={image2} title="Bakuli" text="We have developed an online store
            with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany." 
          />
          <Slider img={image3} title="SaladMix" text="We have developed an online store
            with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany." 
          />
          <Slider img={image4} title="Green Taxi" text="We have developed an online store
            with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany." 
          />
        </div>
      </animated.div>
    )
}