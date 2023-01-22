import SliderComponent from "../Slider";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Block3() {

  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const portfolioItems = [
    {
      img: image1,
      title: `DeinSteinDesign`,
      text: `We have developed an online store
        with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany.`
    },
    {
      img: image2,
      title: `DeinSteinDesign`,
      text: `We have developed an online store
        with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany.`
    },
    {
      img: image3,
      title: `DeinSteinDesign`,
      text: `We have developed an online store
        with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany.`
    },
    {
      img: image4,
      title: `DeinSteinDesign`,
      text: `We have developed an online store
        with the ability to edit cutouts in granite stones for a store of slabs and stones in Germany.`
    },
  ]

  const [animationComplete, setAnimationComplete] = useState(false)


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
    window.addEventListener("scroll", handleClick);
    return () => window.removeEventListener("scroll", handleClick);
  }, [animationComplete])

  const sliderRef = useRef()

  return(
      <animated.div 
      className="block-3"
      style={springs}
      >
      <div className="block-3-title">
        <h5>portfolio</h5>
        <div></div>
      </div>
      <div className="block-sliderWrapper">
        <div 
          className="arrow-prev"
          onClick={() => sliderRef.current.scrollTo({ left: 0, behavior: 'smooth'})}
        >
          {"<"}
        </div>
        <div 
          className="arrow-next"
          onClick={() => sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: 'smooth'})}
        >
          {">"}
        </div>
        <div className="block-3-slider" ref={sliderRef}>
          {portfolioItems.map((item) => <SliderComponent {...item} />)}
        </div>
      </div>
      
    </animated.div>
  )
}