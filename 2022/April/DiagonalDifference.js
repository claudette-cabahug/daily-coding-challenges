/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
1 2 3
4 5 6
9 8 9 
Return
int: the absolute diagonal difference
|x| is the absolute value of x
*/

function diagonalDifference(arr) {
  let sumPrimaryDiagonal = 0
  let sumSecondaryDiagonal = 0
  let difference = 0

  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr.length; c++) {
      sumPrimaryDiagonal = arr[0][0] + arr[1][1] + arr[2][2]
      sumSecondaryDiagonal = arr[0][2] + arr[1][1] + arr[2][0]
    }
  }
  return difference = Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal)
}

/*
Input:
11 2 4
4 5 6
10 8 -12

Output:
15
*/