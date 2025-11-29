function array() {
  const arr = [];
  
  function arrayInstance(index) {
    if (typeof index === 'number') {
      return arr[index];
    }
  }
  
  
  arrayInstance.push = function(value) {
    arr.push(value);
  };
  
  arrayInstance.pop = function() {
    return arr.pop();
  };
  
  
  arrayInstance.length = function() {
    return arr.length;
  };
  
  arrayInstance.toString = function() {
    return arr.toString();
  };
  
  return arrayInstance;
}


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 