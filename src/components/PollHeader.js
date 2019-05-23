import React from 'react';
import PropTypes from 'prop-types';

const PollHeader = (props) => <h1 className="text-center">{props.text}</h1>;

PollHeader.propTypes = {
    text: PropTypes.string
};

export default PollHeader;
