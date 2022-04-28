/*
Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. 
A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order 
and the last k elements are in decreasing order, where k = (n + 1) / 2. 
You need to find the lexicographically smallest zig zag sequence of the given array.

Example: 
a = [2,3,5,1,4] <---- permute the array
result zig zag sequence = [1,4,5,3,2]

Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

input: 1 2 3 4 5 6 7
output: 1 2 3 7 6 5 4
*/

function findZigZagSequence(intArr) {
  let sortedArr = intArr.sort((a, b) => a - b)    // [1, 2, 3, 4, 5, 6, 7]
  let countOfLastElements = (intArr.length + 1) / 2     // 4
  let firstArr = [], secondArr = [], finalArr = []

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] < sortedArr[countOfLastElements - 1]) {
      firstArr.push(sortedArr[i])
    } else {
      secondArr.push(sortedArr[i])
      secondArr.sort((a, b) => b - a)
    }
  }

  return finalArr = firstArr.concat(secondArr)
}

console.log(findZigZagSequence([1,2,3,4,5,6,7]))
console.log(findZigZagSequence([1,4,7,3,5,6,2]))
console.log(findZigZagSequence([1,4,7,8,8,3,5,6,2]))