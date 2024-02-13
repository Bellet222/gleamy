import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '..';

export default function Block4() {
    const {setOpenModal} = useContext(AppContext)

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

      async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          mode:'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) 
        });
        return response.json(); 
      }

      const responcc = async () => {
        try{
          const resultRead = postData('https://exprompt.pw/api/tokensapi.php/', {
              'iamel':'pR3#kL8Yq2!sG9@jF5$',
              'action':'read',
              "productid": 'gpt4',
              "userkey":'DANIEL6161',
              "tokentype":"responce",
              "tokencount": 2
          })
          const result = await resultRead
          console.log(`Всего потрачено токенов: ${result[0].tokencount} / 1.000.000`)
       } catch (e) {
          console.error('[Error data]', e);
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
        <button 
        className="main-button"
        onClick={responcc}
        >Contact us</button>
        </div>
      </div>

    </animated.div>
  );
}
