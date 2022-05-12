/*
Suppose there is a circle.
There are N petrol pumps on that circle.
Petrol pumps are numbered 0 to (N - 1) (both inclusive).

Info on each petrol pump:
1) the amount of petrol that particular petrol pump will give
2) the distance from that petrol pump to the next one

Initially, you have a tank of infinite capacity carrying no petrol.
You can start the tour at any of the petrol pumps.
Calculate the first point from where the truck will be able to complete the circle.
Consider that the truck will stop at each of the petrol pumps.
The truck will move one kilometer for each liter of the petrol.

The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
Output: an integer which will be the smallest index of the petrol pump from which we can start the tour.
*/

let pp0 = [ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ] // petrol, distance

function truckTour(petrolpumps) {
  
  for (let i = 0; i < petrolpumps.length; i++) {  // track which index you are trying - start
    let petrolTracker = 0
    for (let j = i; true; j++) {

      if (j === petrolpumps.length) {
        j = 0
      }

      if (j === i - 1 || (i === 0 && j === petrolpumps.length - 1)) {
        return i
      }

      petrolTracker = (petrolTracker + petrolpumps[j][0]) - petrolpumps[j][1]
      if (petrolTracker < 0) {
        break
      }
    }
  }

  return -1 // return this 
}

console.log(truckTour(pp0))
