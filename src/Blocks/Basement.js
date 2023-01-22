import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react';
import ig from "../img/ig.png"
import wa from '../img/wa.png'
import tg from '../img/tg.png'


export default function  Basement () {
    return(
        <div className='Basement'>
            <div className='basement-line'></div>
            <div className='basement-bg-letter'>
            <p className=''>let’s<br/> talk</p>
            <div className='bg-line'></div>
            </div>

            <div className="basement-main">
                <p className='basement-title'>Have a project in mind? Get in touch, and let’s work together!</p>
                <p className='basement-text'>Come say hello at hello@gleamy.com, or tell us more about your project and organization by getting started below.</p>
                <button className='basement-button'>Start Designing for Good</button>
            </div>

            <div className='basement-info'>
                <div className='basement-contacts basement-blocks'>
                    <p className='info-title'>CONTACT</p> 
                    <p className='info-text'>
                hello@gleamy.com
                130 Spadina Ave, Suite 702
                Toronto, Canada
                M5V 2L4 </p>
                </div>

                <div className='basement-social basement-blocks'>
                    <p className='info-title'>FOLLOW US</p>
                    <p className='info-text'>Connect using<br/> #gleamy.agency</p>
                    <div className='info-imgs'>
                    <img src={tg} alt="" />
                    <img src={wa} alt="" />
                    <img src={ig} alt="" />
                    </div>
                </div>

                <div className='basement-email basement-blocks'>
                <p className='info-title'>CONTACT</p> 
                    <p className='info-text'>
                    For all other matters, please send a polite email to the address below. </p>
                    <p className='info-btn'>- Напишите нам в Telegram</p>
                </div>
            </div>
        </div>
    )
}