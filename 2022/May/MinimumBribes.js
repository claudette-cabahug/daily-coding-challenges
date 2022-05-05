/*
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
Each person wears a sticker indicating their initial position in the queue from 1 to n. 
Any person can bribe the person directly in front of them to swap positions, 
but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. 
Print the number of bribes, or, if anyone has bribed more than two people, print 'Too chaotic'.

int q[n]: the positions of the people after all bribes

Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
*/

function minimumBribes(q) {
  let finalPosition = [...q]  // copy the array before you sort it -- The spread-syntax as array literal
  let initialPosition = q.sort((a, b) => a - b) // [1, 2, 3, 4, 5]
  let bribesArr = []
  let positiveNums = []

  for (let i = 0; i < finalPosition.length; i++) {
    for (let j = 0; j < initialPosition.length; j++) {
      let difference
      
      if (i === j) {
        difference = finalPosition[i] - initialPosition[j] // 1, -1, 2, -1, -1 -- number
        bribesArr.push(difference)  // [1, -1, 2, -1, -1]   
      }
    } 
  }

  positiveNums = bribesArr.filter(x => Math.sign(x) === 1)  // [1, 2] // [1, 3] - returns positive numbers

  let exceedBribeLimit = positiveNums.filter(x => (x >= 3)) // [3]
  
  if (exceedBribeLimit.length !== 0) {
    return 'Too chaotic'
  } else {
    return positiveNums.reduce((a, b) => a + b)
  }
}

// console.log(minimumBribes([2, 1, 5, 3, 4])) // 3
// console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) // Too chaotic
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7
// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])) // 4
// console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])) // 1
// console.log(minimumBribes([4, 1, 2, 3])) // Too chaotic