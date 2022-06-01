
let arr1 = [0, 6, 1, 5, 2, 4, 3] // odd 3
let arr2 = [0, 6, 1, 5, 2, 4, 3, 9] // even 4 & 5

function findMedian (arr) {
  let lowerEvenNum = 0
  let higherEvenNum = 0

  arr.sort((x, y) => x - y) // [0, 1, 2, 3, 4, 5, 6]
  
  if (arr.length % 2 === 1) {  // odd (with a remainder)
    return arr[Math.floor(arr.length / 2)]
  } 
  lowerEvenNum = arr[(arr.length / 2)]
  higherEvenNum = arr[(arr.length / 2) + 1]

  return (lowerEvenNum + higherEvenNum) / 2
}

console.log(findMedian(arr1))
console.log(findMedian(arr2))