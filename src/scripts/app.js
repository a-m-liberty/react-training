const sayHello = require('./sayHello.js');


window.addEventListener('load', () => {
    document.getElementById('welcome-message').innerHTML = sayHello.greet('Andrew');
});



console.log('Hello, world!');