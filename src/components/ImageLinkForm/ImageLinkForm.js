import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onChange, onClick})=>{
    return (
        <div className="tc">
            <p className="f3">This Magic Brain Will Detect Your Face</p>
            <div className="shadow-5 pa4 br4 link-box">
                <input type="text" placeholder="URL" className="pa3 w-70" onChange={onChange}/>
                <button type="submit" className="w-30 white link dib bg-light-purple grow" onClick={onClick}>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;