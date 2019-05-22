import React from 'react';

class PollAnswer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="radio">
                <label>
                    <input name="answer" type='radio' />{this.props.text}
                </label>
            </div>
        );
    }
}
export default PollAnswer;