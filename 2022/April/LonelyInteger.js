/*
The function is expected to return an INTEGER.
The function accepts INTEGER_ARRAY a as parameter.
Given an array of integers, where all elements but one occur twice, find the unique element.
*/

function lonelyinteger(a) {
  a.sort((x, y) => x - y)
  let uniqueInt 
  for (let i=0; i<a.length; i++) {
    if (a[i] !== a[i+1] && a[i] !== a[i]-1) {
      uniqueInt = a[i]
    }
  }
  return uniqueInt
}

/*
Example:
The unique element is 4.
*/
