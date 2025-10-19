'use strict';

const inc = (num) => {
    num.n++;
};

const obj = {n: 3};
inc(obj);
console.dir(obj);
