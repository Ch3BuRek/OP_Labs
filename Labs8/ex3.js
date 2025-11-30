function contract(fn, ...types) {
  return function(...args) {
    
    for (let i = 0; i < args.length; i++) {
      const expectedType = types[i];
      const actualType = typeof args[i];
      
      if (actualType !== expectedType.name.toLowerCase()) {
        throw new TypeError(`Argument ${i} has wrong type. Expected: ${expectedType.name}, got: ${actualType}`);
      }
    }
    
    
    const result = fn.apply(this, args);
    
    
    const expectedReturnType = types[types.length - 1];
    const actualReturnType = typeof result;
    
    if (actualReturnType !== expectedReturnType.name.toLowerCase()) {
      throw new TypeError(`Return value expected: ${expectedReturnType.name}, got: ${actualReturnType}`);
    }
    
    return result;
  };
}


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); 


try {
  const wrongCall = addNumbers(2, '3'); 
} catch (error) {
  console.log('Error:', error.message);
  
}

try {
  const badConcat = contract(concat, String, Number, String);
  const wrongResult = badConcat('Hello', 123); 
} catch (error) {
  console.log('Error:', error.message);
  
}