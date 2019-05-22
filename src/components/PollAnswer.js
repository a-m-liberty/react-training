import React from 'react';

class PollAnswer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type='radio' /> {this.props.answer}
            </div>
        );
    }
}
export default PollAnswer;