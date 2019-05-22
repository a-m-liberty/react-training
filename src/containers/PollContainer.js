import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import CurrentChoice from '../components/CurrentChoice.js';

const rowStyle ={
    backgroundColor: '#dadada',
    border: '1px solid black',
    borderRadius: '6px',
    padding: '10px'
};

class PollContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            header: 'Conan!',
            question: 'What is best in life?',
            checkedValue: '',
            correctAnswer: 'To crush your enemies, see them driven before you, and to hear the lamentations of their women'
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        console.log(`current choice: ${value}`);
    }

    render() {
        const choices = [
            {value: 'Tacos', label: 'Tacos'},
            {value: 'Pizza', label: 'Pizza'},
            {
                value: 'To crush your enemies, see them driven before you, and to hear the lamentations of their women',
                label: 'To crush your enemies, see them driven before you, and to hear the lamentations of their women'
            }
        ];

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-8 col-sm-offset-2">
                        <form>
                            <PollQuestion text={this.state.question} />
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={choices}
                                onChange={this.setCheckedValue}
                            />
                            <CurrentChoice choice={this.state.checkedValue}/>
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;