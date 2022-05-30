
function getHourToday() {
  let date = new Date() // Mon May 30 2022 13:33:28 GMT+1200 (New Zealand Standard Time)
  // let hour = date.getHours() % 12 // for 12-hour time
  let hour = date.getHours()  // for 24-hour time
  console.log(hour)
}

getHourToday()