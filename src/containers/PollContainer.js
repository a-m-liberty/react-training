import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollAnswer from '../components/PollAnswer.js';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            header: 'Conan!',
            question: 'What is best in life?',
            answer1: 'Pizza',
            answer2: 'Tacos',
            answer3: 'To crush your enemies, see them driven before you, and to hear the lamentations of their women',
            correctAnswer: 'To crush your enemies, see them driven before you, and to hear the lamentations of their women'
        };
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <PollHeader text={this.state.header} />
                    <form>
                        <PollQuestion text={this.state.question} />
                        <PollAnswer text={this.state.answer1} />
                        <PollAnswer text={this.state.answer2} />
                        <PollAnswer text={this.state.answer3} />
                        <PollSubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;