/*
Write a function 'code' that takes a string and returns a new string, 
where all input string characters are replaced according to the following rules:

If the character appears only once in the input string, replace it with 'x';
If the character appears several times in the input string, replace it with 'y';
the function should be case insensitive

1. count how many times a letter appears  
2. iterate through the word and check count

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
*/

function changeWord(word) {
  let lettersArr = word.toLowerCase().split('') // ['m', 'i', 's', 's', 'i', 'o', 'n']
  let counts = []
  let result
  
  for (let i = 0; i < lettersArr.length; i++) {
    if (counts[lettersArr[i]] === undefined) {
      counts[lettersArr[i]] = 1
    } else {
      counts[lettersArr[i]]++
    }
  }                                             // [m: 1, i: 2, s: 2, o: 1, n: 1]
  
  for (let i = 0; i < lettersArr.length; i++) {
    lettersArr[i] = counts[lettersArr[i]] > 1 ? 'y' : 'x'   // ['x', 'y', 'y', 'y', 'y', 'x', 'x']
  }

  return result = lettersArr.join('')
}

console.log(changeWord('MisSIon'))
console.log(changeWord('xxxero'))
console.log(changeWord('M1ssion'))

