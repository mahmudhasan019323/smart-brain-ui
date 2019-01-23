import React from 'react';
import './img.css';
const Img = ({imgUrl})=>{
    return (
        <div className="img">
            <img src={imgUrl} alt="pic"/>
        </div>
    );
}

export default Img;