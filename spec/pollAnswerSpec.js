import PollAnswer from '../src/components/PollAnswer.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('PollAnswer', function() {
    it ('renders without problems', function(){
        const pollAnswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollAnswer).toEqual(jasmine.anything());
    });
});