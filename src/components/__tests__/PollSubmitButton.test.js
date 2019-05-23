import React from 'react';
import {shallow, mount, render} from 'enzyme';


describe('Poll Submit Button', function() {
   const PollSubmitButton = require('../PollSubmitButton').default;

   it('renders without a problem', function() {
       const wrapper = shallow(<PollSubmitButton/>);
       const buttonText = wrapper.find('button').text();

       expect(buttonText).toEqual('Go!');
   });

   it('calls handler function on click', function() {
       const handleClick = jest.fn();

       const wrapper = shallow(<PollSubmitButton handleClick={handleClick}/>);
       const buttonInstance = wrapper.find('button');
       buttonInstance.simulate('click');
       expect(handleClick).toHaveBeenCalled();

       const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
       expect(numberOfCallsMadeIntoMockFunction).toBe(1);
   })
});