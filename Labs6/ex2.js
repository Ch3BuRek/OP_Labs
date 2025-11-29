const pipe = (...fns) => {
  
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new Error(`Бро я ожидаю функцию. Аргумент ${i} имеет тип ${typeof fns[i]}`);
    }
  }
  
  
  const reversedFns = [...fns].reverse();
  
  const composed = (x) => {
    try {
      return reversedFns.reduce((acc, fn) => fn(acc), x);
    } catch (error) {
      composed.emit('error', error);
      return undefined;
    }
  };
  
  
  const events = {};
  composed.on = (event, callback) => {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push(callback);
  };
  
  composed.emit = (event, data) => {
    if (events[event]) {
      events[event].forEach(callback => callback(data));
    }
  };
  
  return composed;
};


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const dangerous = x => {
  if (x > 10) throw new Error('Слишком большое число!');
  return x;
};
const divideBy = y => x => {
  if (y === 0) throw new Error('Деление на ноль!');
  return x / y;
};


console.log('=== Композиция справа налево ===');
const f1 = pipe(cube, twice, inc);
console.log(f1(5)); 


const f2 = pipe(inc, inc);
console.log(f2(7)); 



console.log('\n=== Обработка ошибок ===');
const dangerousPipe = pipe(inc, dangerous, twice);


dangerousPipe.on('error', (e) => {
  console.log('Поймана ошибка:', e.message);
});

console.log(dangerousPipe(5)); 
console.log(dangerousPipe(15)); 


console.log('\n=== Деление на ноль ===');
const divisionPipe = pipe(inc, divideBy(0), twice);
divisionPipe.on('error', (e) => {
  console.log('Ошибка деления:', e.message);
});

console.log(divisionPipe(5)); 


console.log('\n=== Комплексный пример ===');
const complexPipe = pipe(
  x => x + 10,
  x => {
    if (x % 2 === 0) throw new Error('Четные числа не допускаются!');
    return x * 3;
  },
  x => x - 5
);

complexPipe.on('error', (e) => {
  console.log('Комплексная ошибка:', e.message);
});

console.log(complexPipe(3)); 
console.log(complexPipe(4)); 