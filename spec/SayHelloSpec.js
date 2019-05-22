import SayHello from '../src/scripts/SayHello.js';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('Greet', function() {
    // it('concats Hello and a name', function(){
    //     SayHello.resetCount();
    //     const actual = SayHello.greet('World');
    //     const expected = 'Hello, World';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('sends Please log in if no name is provided', function(){
    //     SayHello.resetCount();
    //     const actual = SayHello.greet();
    //     const expected = 'Please log in';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('speaks German to Germans', function(){
    //     SayHello.resetCount();
    //     const actual = SayHello.greet('Hans', 'DE');
    //     const expected = 'Guten tag, Hans';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('says stop it if called beyond a fourth time', function(){
    //     SayHello.resetCount();
    //     const expected = 'Stop it';
    //     SayHello.greet('Hans', 'DE');
    //     SayHello.greet('Hans', 'DE');
    //     SayHello.greet('Hans', 'DE');
    //     SayHello.greet('Hans', 'DE');
    //     const actual = SayHello.greet('Hans', 'DE');
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('says good morning if called before noon but after midnight', function(){
    //     SayHello.resetCount();
    //     const actual = SayHello.greetTime('World', '05:20');
    //     const expected = 'Good morning, World';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('says good afternoon if called before noon but after midnight', function(){
    //     SayHello.resetCount();
    //     const actual = SayHello.greetTime('World', '12:20');
    //     const expected = 'Good afternoon, World';
    //     expect(actual).toEqual(expected);
    // });
    //
    // it('says good evening if called before noon but after midnight', function(){
    //     SayHello.resetCount();
    //     const actual = SayHello.greetTime('World', '19:20');
    //     const expected = 'Good evening, World';
    //     expect(actual).toEqual(expected);
    // });

    it ('renders without problems', function(){
        const sayHello = TestUtils.renderIntoDocument(<SayHello />);
        expect(sayHello).toEqual(jasmine.anything());
    });

});