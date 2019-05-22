import React from 'react';


class CurrentChoice extends React.Component {
    render() {
        const currentChoice = `Current Choice: ${this.props.choice}`;
        return <div>{this.props.choice? currentChoice : '' }</div>;
    }
}

export default CurrentChoice;