function minimumBribes(q) {
  let sum = 0

  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic')
      return
    }
    
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i])
        sum++
    }
  }

  console.log(sum)
}

minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])

// console.log(minimumBribes([2, 1, 5, 3, 4])) // 3
// console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) // Too chaotic
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7
// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])) // 4
// console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])) // 1
// console.log(minimumBribes([4, 1, 2, 3])) // Too chaotic