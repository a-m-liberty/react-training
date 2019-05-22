import React from 'react';


// const PollQuestion = (props) => {
//     return <h3>{props.text}</h3>;
// }
class PollQuestion extends React.Component {
    render() {
        return <h3>{this.props.text}</h3>;
    }
}

export default PollQuestion;