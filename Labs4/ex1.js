
function sumFor(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


function sumForOf(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}


function sumWhile(...args) {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
}


function sumDoWhile(...args) {
  let total = 0;
  let i = 0;
  
  if (args.length === 0) return 0;
  
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  
  return total;
}


function sumArrReduce(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}


console.log(sumFor(1, 2, 3)); 
console.log(sumForOf(0)); 
console.log(sumWhile()); 
console.log(sumDoWhile(1, -1, 1)); 
console.log(sumArrReduce(10, -1, -1, -1)); 