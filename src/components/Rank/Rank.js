import React from 'react';

const Rank = ({rank,name})=>{
    return (
        <div>
            <p className="tc white f2">{name}, your rank is... </p>
            <p className="tc white f1">#{rank}</p>
        </div>
    );
}

export default Rank;