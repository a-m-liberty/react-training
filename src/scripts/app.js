import React from 'react';
import ReactDOM from 'react-dom';
import PollContainer from '../containers/PollContainer.js';

ReactDOM.render(
    <div><PollContainer /> <PollContainer/></div>
    ,
    document.getElementById('app')
);