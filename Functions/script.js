'use strict';

let poll = {
    question: `What is your favorite programming language?`,
    // answers: {
    //     JavaScript: 0,
    //     Python: 0,
    //     Rust: 0,
    //     C: 0
    // },

    answers: [
        `JavaScript`,
        `Python`,
        `Rust`,
        `C++`
    ],

    values: [
        0,
        0,
        0,
        0,
    ],

    registerNewAnswer() {
        // console.log(this);
        console.log(poll.question);
        for (const [i, answer] of Object.entries(poll.answers)) {
            console.log(`${i}: ${answer}`);
        }
        console.log(`Write option number`);
        let input = prompt('Input a number:');
        while (input < 0 || input > 3) {
            input = prompt('Input out of range: try again');
        }
        poll.values[input]++;
        poll.displayResults('string');
    },

    displayResults(type) {
        if (type === 'array') {
            console.log(poll.values);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.values.join(', ')}`)
        }
    },
};

document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer);