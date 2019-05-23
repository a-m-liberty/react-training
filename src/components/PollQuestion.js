import React from 'react';
import PropTypes from 'prop-types';

const PollQuestion = (props) => <h3>{props.text}</h3>;

PollQuestion.propTypes = {
    text: PropTypes.string
};

export default PollQuestion;