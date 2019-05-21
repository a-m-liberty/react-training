
const langToGreetingMap = {
    'EN': 'Hello',
    'DE': 'Guten tag'
};

const timeOfDayGreetingMap = {
    'morning': 'Good morning',
    'afternoon': 'Good afternoon',
    'evening': 'Good evening'
};

let calls = 0;

exports.greet = (name, lang='EN') => {
    calls += 1;

    if (calls >= 4) return 'Stop it';

    const greeting = langToGreetingMap[lang];

    if (name)  return `${greeting}, ${name}`;

    return 'Please log in';
};

// exports.greet = function* (name, lang='EN', time = null) {
//     for (let i = 0; i < 4; i+= 1) {
//         yield "hey"
//     }
// };


exports.greetTime =(name, time) => {
    if (time) {
        const hour = parseInt(time.split(':')[0]);
        let greeting = 'Hey';

        if (hour < 12){
            greeting = timeOfDayGreetingMap['morning'];
        } else if (hour >= 12 && hour <= 18) {
            greeting = timeOfDayGreetingMap['afternoon'];
        } else if (hour > 18 && hour <= 24) {
            greeting = timeOfDayGreetingMap['evening'];
        }
        return `${greeting}, ${name}`;
    }
};

exports.resetCount = () => calls = 0;