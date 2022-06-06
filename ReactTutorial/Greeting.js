
function greeting(name) {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  let timeOfDay
  
  if (currentHour >= 4 && currentHour < 12) {
    timeOfDay = "morning"
  } else if (currentHour >= 12 && currentHour < 17) {
    timeOfDay = "afternoon"
  } else if (currentHour >= 17 && currentHour < 19) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))

/*
in react, param (name) is equal to props (immutable)
whereas declared variables such as time of day are equivalent to state -- can be changed
*/