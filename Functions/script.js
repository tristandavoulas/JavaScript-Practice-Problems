'use strict';

const poll = {
    registerNewAnswer() {
        console.log(`What is your favorite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)`);
    }
};

document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer);