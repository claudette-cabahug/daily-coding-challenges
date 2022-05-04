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


  console.log('Too chaotic')
}

console.log(minimumBribes([2, 1, 5, 3, 4])) // 3
console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic