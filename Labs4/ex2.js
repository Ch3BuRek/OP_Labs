function max(matrix) {
  let maxValue = matrix[0][0];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  
  return maxValue;
}

const m = max([[2, 7, 1], [6, 9], [6, 7]]);
console.log(m);