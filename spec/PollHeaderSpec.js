import PollHeader from '../src/components/PollHeader.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('Poll Header', function() {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<PollHeader text="Conan!" />);
    });

    it('renders without problems', function(){
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', () => {
        const actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h1').textContent;
        const expected = 'Conan!';
        expect(actual).toEqual(expected);
    });
});