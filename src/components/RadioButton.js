import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
    const handleChange = () => props.onChange(props.value);

    return (
        <div className='radio'>
            <label>
                <input
                    type='radio'
                    name={props.name}
                    value={props.value}
                    checked={props.checked}
                    onChange={handleChange}
                />
                <span>{props.label}</span>
            </label>
        </div>
    );
};
//
// class RadioButton extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     handleChange(){
//         this.props.onChange(this.props.value);
//     }
//
//     render() {
//         return (
//             <div className='radio'>
//                 <label>
//                     <input
//                         type='radio'
//                         name={this.props.name}
//                         value={this.props.value}
//                         checked={this.props.checked}
//                         onChange={this.handleChange.bind(this)}
//                     />
//                     <span>{this.props.label}</span>
//                 </label>
//             </div>
//         );
//     }
// }

RadioButton.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default RadioButton;
