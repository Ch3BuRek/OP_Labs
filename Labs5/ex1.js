function seq(firstFn) {
  const functions = [firstFn];
  
  function chain(nextFn) {
    if (typeof nextFn === 'number') {
      
      return functions.reduce((result, fn) => fn(result), nextFn);
    } else {
      
      functions.push(nextFn);
      return chain;
    }
  }
  
  return chain;
}


console.log(seq(x => x + 7)(x => x * 2)(5)); 
console.log(seq(x => x * 2)(x => x + 7)(5)); 
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); 