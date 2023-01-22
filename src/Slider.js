import React from 'react';

export default function Slider (props) {
    return(
        <div className='component-slider'>
           <div className='slider-padding'>
                <img src={props.img} alt="" />
                <p className='slider-title'>{props.title}</p>
                <p className='slider-text'>{props.text}</p>
            </div>
        </div>
    )
}
