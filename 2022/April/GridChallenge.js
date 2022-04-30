/*
Given a square grid of characters in the range ascii[a-z], 
rearrange elements of each row alphabetically, ascending. 
Determine if the columns are also in ascending alphabetical order, top to bottom. 
Return YES if they are or NO if they are not.
*/

let grid1 = [
  'eabcd',      // grid[i]
  'fghij', 
  'olkmn', 
  'trpqs', 
  'xywuv'
]

function gridChallenge(grid) {
  let result = 'YES'  // can omit this; not declare result

  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('')   // grid now an array of arrays
    grid[i].sort()                // each array now sorted ascending
  }

  for (let i = 0; i < grid.length; i++) {
    let newArr = []
    let anotherArr = []

    for (let j = 0; j < grid[i].length; j++) {
      
      newArr.push(grid[j][i])
      anotherArr.push(grid[j][i])
    }
    newArr.sort()

    if (anotherArr.toString() !== newArr.toString()) {
      result = 'NO' // return 'NO'  // shortcircuit - if your return, the rest of the function will not be executed
      break         // if 'return "NO"' then break not required here
    } 
    
  }  

  return result // return 'YES' -- as default 
}

console.log(gridChallenge(grid1))