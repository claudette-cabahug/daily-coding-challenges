/*
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, 
just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
*/

function caesarCipher(s, k) {
  let newCharArr = []

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt()
    
    if (code >= 65 && code <= 90) { // A-Z
      newCharArr.push(getUppercaseCharCode(code + k))
    } else if (code >= 97 && code <= 122) {  // a-z
      newCharArr.push(getLowercaseCharCode (code + k))
    } else {
      newCharArr.push(code)
    }
  } 

  return String.fromCharCode(...newCharArr)
}

function getUppercaseCharCode (codeWithShift) {
  if (codeWithShift > 90) {
    if (((codeWithShift - 90) % 26) == 0) { // if without remainder == 26, return Z
      return 90
    }
    return ((codeWithShift - 90) % 26) + 64  // (get excess number), then find out how many times rotate 26, add minimum number - 1
  } 
  return codeWithShift
}

function getLowercaseCharCode (codeWithShift) {
  if (codeWithShift > 122) {
    if (((codeWithShift - 122) % 26) == 0) {
      return 122
    }
    return ((codeWithShift - 122) % 26) + 96 // 
  } 
  return codeWithShift
}

console.log(caesarCipher('1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M', 27))

