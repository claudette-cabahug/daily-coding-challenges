/*
Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.
The rules of the game are as follows:
Initially there are n towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height  and reduce its height to y, where 1 <= y < x and y evenly divides x.
If the current player is unable to make a move, they lose the game.

n = no. of towers & m = height of the towers
*/

function towerBreakers(n, m) {  
  return m == 1 || n % 2 == 0 ? 2 : 1
}

console.log(towerBreakers(2, 4))
console.log(towerBreakers(1, 4))