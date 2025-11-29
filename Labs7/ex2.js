function removeElements(array, ...items) {
  for (const item of items) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
}

const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log(array3); 

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log(array4); 