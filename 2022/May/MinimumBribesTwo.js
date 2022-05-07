function minimumBribes(q) {
  let numbersBribed
  let totalBribes = []
  let sum
  
  for (let i = 0; i < q.length; i++) {
    numbersBribed = q.slice(i).filter(x => x < q[i]).length
    totalBribes.push(numbersBribed)
  }

  if (totalBribes.find(element => (element >= 3))) {
    return 'Too chaotic'
  } else {
    return sum = totalBribes.reduce((a, b) => a + b)
  }
}

console.log(minimumBribes([2, 1, 5, 3, 4])) // 3
console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) // Too chaotic
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7
console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])) // 4
console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])) // 1
console.log(minimumBribes([4, 1, 2, 3])) // Too chaotic