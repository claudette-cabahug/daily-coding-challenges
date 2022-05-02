/*
We define super digit of an integer x using the following rules:
Given an integer, we need to find the super digit of the integer.
If x has only  digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
It must return the calculated super digit as an integer.
superDigit has the following parameter(s):
  string n: a string representation of an integer
  int k: the times to concatenate n to make p.
Returns:
int: the super digit of n repeated k times
*/

function superDigit(n, k) {
  let numberArr = n.split('').map(Number) // ['1', '4', '8'] --> [1, 4, 8]
  let initialSum = numberArr.reduce((a, b) => a + b)  // 13
  let finalSum = initialSum * k // 39
  let splitFinalSum = finalSum.toString().split('').map(Number) // [3, 9]
  let result = 0

  for (let i = 0; i < splitFinalSum.length; i++) {
    if (splitFinalSum.length > 1) {
      result = splitFinalSum.reduce((a, b) => a + b) 
      if (result > 9) {
        result = result.toString().split('').map(Number)
        result = result.reduce((a, b) => a + b)
      } 
    } else {
      result = splitFinalSum[0]
    }
  }
  
  return result
}

console.log(superDigit('148', 3)) // 3
console.log(superDigit('9875', 4))  // 8