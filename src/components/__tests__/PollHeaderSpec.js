import PollHeader from '../PollHeader.js';
import React from 'react';
import {shallow} from 'enzyme';

describe('Poll Header', function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PollHeader text="Conan!" />);
    });

    it('renders without problems', function(){
        expect(wrapper).toEqual(expect.anything());
    });

    it('prints a message', () => {
        const actual = wrapper.find('h1').text();
        const expected = 'Conan!';
        expect(actual).toEqual(expected);
    });
});