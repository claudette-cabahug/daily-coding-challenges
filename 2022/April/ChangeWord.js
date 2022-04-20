/*
Write a function 'code' that takes a string and returns a new string, 
where all input string characters are replaced according to the following rules:

If the character appears only once in the input string, replace it with 'x';
If the character appears several times in the input string, replace it with 'y';
the function should be case insensitive
*/


function changeWord(word) {
  let lower = word.toLowerCase()
 
  for (let i = 0; i < lower.length; i++) {
    if (lower.indexOf(lower[i]) != lower.lastIndexOf(lower[i])) {
    
    	word = word.toLowerCase().replaceAll(lower[i], 'y')
      
    } else {
    	word = word.toLowerCase().replaceAll(lower[i], 'x')
    }
    
  }
  return word
}

changeWord(mission)