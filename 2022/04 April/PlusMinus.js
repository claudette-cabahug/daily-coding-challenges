/*
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Given an array of integers, 
// calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.
// The function should not return a value.

function plusMinus(arr) {

  let countPositive = 0
  let countNegative = 0
  let countZero = 0

// for (let i = 0; i < arr.length; i++) {
//   if (Math.sign(arr[i]) == 1) {
//     ++countPositive
//   } else if (Math.sign(arr[i]) == -1) {
//     ++countNegative
//   } else {
//     ++countZero
//   }
// }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      ++countPositive
    } else if (arr[i] < 0) {
      ++countNegative
    } else {
      ++countZero
    }
  }

  const positiveRatio = (countPositive/arr.length).toFixed(6)
  const negativeRatio = (countNegative/arr.length).toFixed(6)
  const zeroRatio = (countZero/arr.length).toFixed(6)

  console.log(positiveRatio)
  console.log(negativeRatio)
  console.log(zeroRatio)
}

// Expected Output:
// 0.500000
// 0.333333
// 0.166667