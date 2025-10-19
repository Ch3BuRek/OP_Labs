'use strict';

const arr = [true, 'hello', 5, 12, -200, false, 'word', null, undefined, { a: 1 }, [1, 2], 3n, Symbol('x')];

const counter = {};

for (const item of arr) {
  const type = typeof item;
  if (!counter[type]) {
    counter[type] = 0;
  }
  counter[type]++;
}

console.log(counter);
