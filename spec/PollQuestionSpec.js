import PollQuestion from '../src/components/PollQuestion.js';
import TestWrapper from '../src/components/TestWrapper.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('Poll Question', function() {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<TestWrapper><PollQuestion text='question' /></TestWrapper>);
    });

    it('renders without problems', function(){
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', () => {
        const actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h3').textContent;
        const expected = 'question';
        expect(actual).toEqual(expected);
    });
});