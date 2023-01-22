import React from 'react';

export default function Blocks (props) {
  return(
    <div className="brand-identity">
            <p className="brand-title">{props.title}</p>
            <p className="brand-text">{props.text}</p>
            <button className="brand-btn">Know more</button>
          </div>
  )
}
