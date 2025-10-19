'use strict';

const average = (a, b) => {
    return (a + b) / 2;
};

const square = (x) => {
    return x*x;
};

const cube = (x) => {
    return x*x*x;
};

const calculate = () => {
    const results = [];
    for (let i = 0; i <= 9; i++) {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb);
        results.push(avg);
    }
    return results;
};

console.log(calculate())
