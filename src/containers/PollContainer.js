import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import CurrentChoice from '../components/CurrentChoice.js';
import CorrectChoice from '../components/CorrectChoice.js';
import axios from 'axios';

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
            header: '',
            question: '',
            checkedValue: '',
            choices: [],
            correctAnswer: 'To crush your enemies, see them driven before you, and to hear the lamentations of their women',
            correctAnswerChosen: false
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
    }

    UNSAFE_componentWillMount(){
        console.log('componentWillMount()');
    }

    componentDidMount(){
        console.log('componentDidMount()');
        axios.get('http://localhost:8080/data/data.json').then((res) => {
            this.setState({
                header:res.data.poll.header,
                question: res.data.poll.questions[0].question,
                choices: res.data.poll.questions[0].choices
            });
        });
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }

    shouldComponentUpdate() {
        console.log('shouldcomponentUpdate()');
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value,
        });
    }

    submitGuess() {
        const correctAnswerChosen = this.state.checkedValue === this.state.correctAnswer;
        this.setState({correctAnswerChosen});
    }

    render() {

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
                                choices={this.state.choices}
                                onChange={this.setCheckedValue}
                            />
                            <CurrentChoice choice={this.state.checkedValue}/>
                            <PollSubmitButton handleClick={this.submitGuess}/>
                            <CorrectChoice correct={this.state.correctAnswerChosen}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;