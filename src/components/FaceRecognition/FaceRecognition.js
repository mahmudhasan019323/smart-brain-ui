import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({imgUrl, box})=>{
    return (
        <div style={{maxWidth: '900px', margin: '20px auto', position: 'relative'}}>
            <img src={imgUrl} alt="" className="w-100" id="inputImg"/>
            <div className="box" style={{top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
            <div className="box" style={{top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
        </div>
    );
}

export default FaceRecognition;