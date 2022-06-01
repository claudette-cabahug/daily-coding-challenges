/*
2n x 2n matrix - each cell contains an integer
reverse any of the rows/columns any number of times
goal: maximize the sum of the elements in the n x n submatrix located in the upper-left quadrant of the matrix
reverse so that the sum of the elements in the matrix's upper-left quadrant is maximal
*/

let matrix1 = [
[112, 42, 83, 119],
[56, 125, 56, 49],
[15, 78, 101, 43],
[62, 98, 114, 108]
]

function flippingMatrix(matrix) {
  // Write your code here
  let matrixL = matrix.length
  let submatrixL = matrix.length / 2
  let total = 0

  for (let r = 0; r < submatrixL; r++) {
    for (let c = 0; c < submatrixL; c++) {
      // let max = 0 // max possible value for each element of the submatrix
      // let max = Number.MIN_VALUE  // represents the smallest positive numeric value representable in JavaScript
      let max = Number.NEGATIVE_INFINITY  // can include negative numbers in the matrix

      max = Math.max(matrix[r][c], max)    // current i 
      // add max for comparison - The Math.max() function returns the largest of the zero or more numbers given as input parameters, 
      // or NaN if any parameter isn't a number and can't be converted into one.
      max = Math.max(matrix[r][matrixL - c - 1], max)  // candidate 1
      max = Math.max(matrix[matrixL - r - 1][c], max)  // candidate 2
      max = Math.max(matrix[matrixL - r - 1][matrixL - c - 1], max)  // candidate 3

      total += max

      // total += Math.max(
      //   matrix[r][c],
      //   matrix[r][matrixL - c - 1],
      //   matrix[matrixL - r - 1][c],
      //   matrix[matrixL - r - 1][matrixL - c - 1]
      // );
    }
  }

  return total
}

console.log(flippingMatrix(matrix1))