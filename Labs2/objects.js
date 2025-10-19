'use strict';

const fn = () => {
  const obj1 = { name: 'Varg'};
  let obj2 = { name: 'Varg'};

  obj1.name = 'Vikernes';
  obj2.name = 'Vikernes';

  obj2 = { name: 'Varg Vikernes'};
};

const createUser = (name, city) => {
    return { name: name, city: city };
};

console.log(createUser('Varg Vikernes', 'Bergen'))
