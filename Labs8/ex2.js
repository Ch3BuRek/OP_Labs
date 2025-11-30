function store(value) {
  return function() {
    return value;
  };
}


const read = store(5);
const value = read();
console.log(value); 


const msg = store('Hello World');
console.log(msg()); 

const num = store(42);
console.log(num());     

const power = store({ level: 80, element: 'fire' });
console.log(power()); 