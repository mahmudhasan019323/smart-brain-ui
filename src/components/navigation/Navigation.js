import React from 'react';
// import './navigation.css';

const Navigation = ({onRouteChange, isSignedIn})=>{
    if(isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '5px 25px'}}>
                <p className="f3 link white dim p5 pointer" onClick={() => onRouteChange('signout')}>Sign out</p>
            </nav>
        );
    }else{
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '5px 25px'}}>
                <p className="f3 link white dim p5 pointer mr4" onClick={() => onRouteChange('signup')}>Sign Up</p>
                <p className="f3 link white dim p5 pointer" onClick={() => onRouteChange('signin')}>Sign In</p>
            </nav>
        );
    }
};

export default Navigation;