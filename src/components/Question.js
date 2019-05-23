import React from 'react';
import PollQuestion from '../components/PollQuestion.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import CurrentChoice from '../components/CurrentChoice.js';
import CorrectChoice from '../components/CorrectChoice.js';

const rowStyle ={
    backgroundColor: '#dadada',
    border: '1px solid black',
    borderRadius: '6px',
    padding: '10px'
};

const Question = (props) => {
    return (
        <div className="row" style={rowStyle}>
            <div className="col-sm-8 col-sm-offset-2">
                <form>
                    <PollQuestion text={props.question} />
                    <RadioButtonGroup
                        name={props.group}
                        checkedValue={props.checkedValue}
                        choices={props.choices}
                        onChange={props.setCheckedValue}
                    />
                    <CurrentChoice choice={props.checkedValue}/>
                    <CorrectChoice correct={props.correctAnswerChosen}/>
                </form>
            </div>
        </div>
    );
};

export default Question;