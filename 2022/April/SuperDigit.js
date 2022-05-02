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
  let stringArr = n.split('')
  
  
  // console.log(splitString)
}

console.log(superDigit('148', 3))