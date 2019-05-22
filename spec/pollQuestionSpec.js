import PollQuestion from '../src/components/PollQuestion.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('PollHeader', function() {
    it ('renders without problems', function(){
        const pollQuestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect(pollQuestion).toEqual(jasmine.anything());
    });
});