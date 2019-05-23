import React from 'react';

const CorrectChoice = (props) => {
    return props.correct ? <div>Correct!</div> : '';
}

export default CorrectChoice;