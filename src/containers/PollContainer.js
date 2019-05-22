import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollAnswer from '../components/PollAnswer.js';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-4 col-sm-offset-4">
                    <PollHeader />
                    <form>
                        <PollQuestion />
                        <PollAnswer answer="Answer 1" />
                        <PollAnswer answer="Answer 2" />
                        <PollAnswer answer="Answer 3" />
                        <PollSubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;