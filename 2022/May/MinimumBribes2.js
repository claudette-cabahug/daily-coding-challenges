function minimumBribes(q) {
  let sum = 0
  let tooChaotic = false

  for (let element of q) {
    let numberBribedByElement = q.slice(element).filter(x => x < element).length

    if (numberBribedByElement > 2) {
      tooChaotic = true
      break
    }

    sum += numberBribedByElement
  }

  if (tooChaotic) {
    return 'Too chaotic'
  } else {
    return sum
  }
}

console.log(minimumBribes([2, 1, 5, 3, 4])) // 3
console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) // Too chaotic
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7
console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])) // 4
console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])) // 1
console.log(minimumBribes([4, 1, 2, 3])) // Too chaotic
