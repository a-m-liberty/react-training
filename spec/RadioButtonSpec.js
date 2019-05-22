import RadioButton from '../src/components/RadioButton.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('RadioButton', function() {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<RadioButton label='answer' />);
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