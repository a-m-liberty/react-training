import React from 'react';
import PropTypes from 'prop-types';


const CurrentChoice = (props) => {
    const currentChoice = `Current Choice: ${props.choice}`;
    return <div>{props.choice? currentChoice : '' }</div>;
};

CurrentChoice.propTypes = {
    choice: PropTypes.string
};
export default CurrentChoice;