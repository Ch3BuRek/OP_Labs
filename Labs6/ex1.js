const pipe = (...fns) => {
  
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new Error(`Все аргументы pipe должны быть функциями. Аргумент ${i} имеет тип ${typeof fns[i]}`);
    }
  }
  
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); 

const f2 = pipe(inc, inc);
console.log(f2(7)); 


try {
  const f3 = pipe(inc, 7, cube); 
} catch (e) {
  console.log(e.message); 
}