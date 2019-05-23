import React from 'react';

const PollSubmitButton = (props) => {
    return (
        <button className="btn btn-success" type="button" onClick={props.handleClick}>Go!</button>
    );
};

export default PollSubmitButton;