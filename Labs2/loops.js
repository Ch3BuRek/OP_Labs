'use strict';

const range = (start, end) => {
    const len = end - start;
    if (len < 0) return [];
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};


const rangeOdd = (start, end) => {
    const len = end - start;
    if (len < 0) return [];
    const arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 == 1) arr.push(i); 
    }
    return arr;
};

console.log('range(15,30):', range(15, 30));
console.log('rangeOdd(15,30):', rangeOdd(15, 30));
