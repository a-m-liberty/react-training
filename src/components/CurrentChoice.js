import React from 'react';


const CurrentChoice = (props) => {
    const currentChoice = `Current Choice: ${props.choice}`;
    return <div>{props.choice? currentChoice : '' }</div>;
};


export default CurrentChoice;