
function greeting(name) {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  let timeOfDay
  
  if (currentHour >= 4 && currentHour < 12) {
    timeOfDay = "morning"
  } else if (currentHour >= 12 && currentHour < 16) {
    timeOfDay = "afternoon"
  } else if (currentHour >= 16 && currentHour < 19) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))