import PollHeader from '../PollHeader.js';
import React from 'react';
import {shallow} from 'enzyme';

describe('Question Header', function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PollHeader text="Welcome!" />);
    });

    it('renders without problems', function(){
        expect(wrapper).toEqual(expect.anything());
    });

    it('prints a message', () => {
        const actual = wrapper.find('h1').text();
        const expected = 'Welcome!';
        expect(actual).toEqual(expected);
    });
});