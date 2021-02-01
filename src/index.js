
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(Array.isArray(matrix) != true || matrix.length == 0) return [];
    let arr = [];
  for(let i = 0; i< matrix.length; i += 1){
    if(i%2 != 0) matrix[i].reverse()
  }
  return arr.concat(matrix.reduce((a,b) => a.concat(b)))
}

