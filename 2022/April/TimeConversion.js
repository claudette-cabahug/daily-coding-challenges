// return a new string representing the input time in 24 hour format.
// string s: a time in 12 hour format

function timeConversion(s) {
  let hours = Number(s.substr(0, 2))
  let minutes = s.substr(3, 2)
  let seconds = s.substr(6, 2)

  if (s.endsWith('pm') || s.endsWith('PM')) {
    hours += 12
  }
  return hours + ":" + minutes + ":" + seconds
}

// Input: 07:05:45PM
// Output: 19:05:45