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

let pp0 = [ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ] // 12


function truckTour(petrolpumps) {
  let totalDistance = 0
    
  for (let i = 0; i < petrolpumps.length; i++) {
    totalDistance += petrolpumps[i][1]
  }
  
  for (let i = 0; i < petrolpumps.length; i++) {
    if (petrolpumps[i][0] >= totalDistance) { // will return index of first element that meets condition
    return i
    } 
  }

  return -1  
}

console.log(truckTour(pp0))

let pp2 =  [ [ 46675, 40604 ], [ 95711, 49370 ], [ 25140, 76805 ], [ 60012, 40610 ],
[ 31614, 56881 ], [ 50925, 44485 ], [ 47175, 43587 ], [ 63060, 29117 ],
[ 61010, 88932 ], [ 70365, 84445 ], [ 20001, 26058 ], [ 50394, 81703 ],
[ 40616, 89895 ], [ 18867, 21111 ], [ 51417, 55195 ], [ 63251, 14443 ],
[ 95798, 75313 ], [ 80164, 37289 ], [ 68470, 40175 ], [ 94251, 16435 ],
[ 13407, 45175 ], [ 77272, 60581 ], [ 88762, 40331 ], [ 6050, 66123 ],
[ 29262, 76414 ], [ 50567, 65615 ], [ 18823, 960 ],   [ 47317, 75790 ],
[ 7206, 82535 ],  [ 13253, 74974 ], [ 54082, 92855 ], [ 5769, 66231 ],
[ 68168, 85932 ], [ 3520, 36637 ],  [ 26107, 14122 ], [ 69423, 55865 ],
[ 59296, 46694 ], [ 32798, 64409 ], [ 87024, 38847 ], [ 46884, 16286 ],
[ 31612, 97450 ], [ 98252, 66787 ], [ 14762, 61920 ], [ 42576, 38319 ],
[ 60806, 72180 ], [ 13293, 14887 ], [ 65035, 19061 ], [ 81118, 33202 ],
[ 21344, 989 ],   [ 86190, 63802 ], [ 15110, 55612 ], [ 19667, 90757 ],
[ 2306, 52464 ],  [ 71518, 5681 ],  [ 7662, 18401 ],  [ 38318, 39273 ],
[ 15850, 36569 ], [ 22411, 46963 ], [ 98488, 81339 ], [ 85282, 59294 ],
[ 53518, 14926 ], [ 90532, 18552 ], [ 50338, 71649 ], [ 68105, 71681 ],
[ 88989, 54294 ], [ 35483, 20450 ], [ 26258, 71501 ], [ 11207, 44915 ],
[ 23964, 82724 ], [ 50595, 47977 ], [ 17476, 88913 ], [ 3601, 33325 ],
[ 41833, 26012 ], [ 96640, 40321 ], [ 7350, 81921 ],  [ 15966, 60867 ],
[ 96846, 6497 ],  [ 95771, 47183 ], [ 94498, 63875 ], [ 35215, 83486 ],
[ 34521, 70697 ], [ 3936, 60778 ],  [ 42197, 31494 ], [ 22044, 82512 ],
[ 30569, 88990 ], [ 46840, 48044 ], [ 94254, 50441 ], [ 97720, 36087 ],
[ 76452, 94359 ], [ 92759, 153 ],   [ 92631, 8724 ],  [ 77371, 89476 ],
[ 31572, 89493 ], [ 53010, 26069 ], [ 53368, 88225 ], [ 25907, 4240 ],
[ 75273, 46194 ], [ 65017, 33822 ], [ 77687, 3412 ],  [ 32685, 24607 ] ]
