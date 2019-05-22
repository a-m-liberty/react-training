import PollSubmitButton from '../src/components/PollSubmitButton.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('PollSubmitButton', function() {
    it ('renders without problems', function(){
        const pollSubmitButton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect(pollSubmitButton).toEqual(jasmine.anything());
    });
});