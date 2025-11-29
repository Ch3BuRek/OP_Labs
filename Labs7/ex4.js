function difference(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
}

const array5 = [7, -2, 10, 5, 0];
const array6 = [0, 10];
const result3 = difference(array5, array6);
console.log(result3); 

const array7 = ['Beijing', 'Kiev'];
const array8 = ['Kiev', 'London', 'Baghdad'];
const result4 = difference(array7, array8);
console.log(result4); 