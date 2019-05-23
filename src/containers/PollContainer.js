import React from 'react';
import PollHeader from '../components/PollHeader.js';
import Question from '../components/Question.js';
import PollQuestion from '../components/PollQuestion.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import CurrentChoice from '../components/CurrentChoice.js';
import CorrectChoice from '../components/CorrectChoice.js';
import axios from 'axios';



class PollContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            header: '',
            questions: []
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
            const questions = [];

            res.data.poll.questions.forEach((element) =>{
                questions.push({
                    question: element.question,
                    choices: element.choices,
                    checkedValue: ''
                })
            });

            this.setState({
                header:res.data.poll.header,
                questions
            });
            console.log('hey')
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
        const questions = this.state.questions.map((question, index) => {
            return (
                <Question
                    group={`answer${index}`}
                    question={question.question}
                    choices={question.choices}
                    setCheckedValue={this.setCheckedValue}
                />
            )
        });
        console.log(questions);
        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                {questions}
                <PollSubmitButton handleClick={this.state.submitGuess}/>
            </div>
        );
    }
}

export default PollContainer;