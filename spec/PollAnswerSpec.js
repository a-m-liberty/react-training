import PollAnswer from '../src/components/PollAnswer.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('PollAnswer', function() {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<PollAnswer text='answer' />);
    });

    it ('renders without problems', function(){
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', () => {
        const actual = TestUtils.findRenderedDOMComponentWithTag(component, 'label').textContent;
        const expected = 'answer';
        expect(actual).toEqual(expected);
    });
});