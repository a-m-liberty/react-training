import PollHeader from '../src/components/PollHeader.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('PollHeader', function() {
    it ('renders without problems', function(){
        const pollHeader = TestUtils.renderIntoDocument(<PollHeader />);
        expect(pollHeader).toEqual(jasmine.anything());
    });
});