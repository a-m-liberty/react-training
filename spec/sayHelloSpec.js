const sayHello = require('../src/scripts/sayHello.js');

describe('Greet', function() {
    it('concats Hello and a name', function(){
        sayHello.resetCount();
        const actual = sayHello.greet('World');
        const expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    it('sends Please log in if no name is provided', function(){
        sayHello.resetCount();
        const actual = sayHello.greet();
        const expected = 'Please log in';
        expect(actual).toEqual(expected);
    });

    it('speaks German to Germans', function(){
        sayHello.resetCount();
        const actual = sayHello.greet('Hans', 'DE');
        const expected = 'Guten tag, Hans';
        expect(actual).toEqual(expected);
    });

    it('says stop it if called beyond a fourth time', function(){
        sayHello.resetCount();
        const expected = 'Stop it';
        sayHello.greet('Hans', 'DE');
        sayHello.greet('Hans', 'DE');
        sayHello.greet('Hans', 'DE');
        sayHello.greet('Hans', 'DE');
        const actual = sayHello.greet('Hans', 'DE');
        expect(actual).toEqual(expected);
    });

    it('says good morning if called before noon but after midnight', function(){
        sayHello.resetCount();
        const actual = sayHello.greetTime('World', '05:20');
        const expected = 'Good morning, World';
        expect(actual).toEqual(expected);
    });

    it('says good afternoon if called before noon but after midnight', function(){
        sayHello.resetCount();
        const actual = sayHello.greetTime('World', '12:20');
        const expected = 'Good afternoon, World';
        expect(actual).toEqual(expected);
    });

    it('says good evening if called before noon but after midnight', function(){
        sayHello.resetCount();
        const actual = sayHello.greetTime('World', '19:20');
        const expected = 'Good evening, World';
        expect(actual).toEqual(expected);
    });

});