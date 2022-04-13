//Given five positive integers, 
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {

  arr.sort(function(a, b){return a-b})

  let arrSum = 0
  let minSum = 0
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i]
    minSum = arrSum - arr[arr.length-1]
    maxSum = arrSum - arr[0]
  }
  console.log(minSum + ' ' + maxSum)
}

// Input: 1 2 3 4 5
// Output: 10 14