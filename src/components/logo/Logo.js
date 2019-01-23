import React from 'react';
import './logo.css';
import Tilt from 'react-tilt';
import logo from './logo.png';


const Logo = ()=>{
    return (
            <div className="ma5 mt0">
                <Tilt className="Tilt shadow-5 logo" option={{max: 30}} style={{height : '150px', width: '150px' }}>
                    <div className="Tilt-inner f1 tc pt4 white">
                        <img src={logo} alt="logo"/>
                    </div>
                </Tilt>
            </div>
    );
}

export default Logo;