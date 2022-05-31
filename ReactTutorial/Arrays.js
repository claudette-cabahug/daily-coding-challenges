// return an array of each number squared
// let arr1 = [1, 2, 3, 4, 5]

// function getSquared(arr) {
//   let newArr = arr.map(x => x * x)
//   console.log(newArr)
// } 

// getSquared(arr1)



// capitalize first letter of strings
// const names = [
//   "alice",
//   "bob",
//   "charlie",
//   "danielle"
// ]

// function capitalizeFirstLetter(arr) {
//   console.log(arr.map(x => x[0].toUpperCase() + x.slice(1)))
//   // console.log(arr.map(x => x.charAt(0).toUpperCase() + x.slice(1)))
// }

// capitalizeFirstLetter(names)



// wrap strings in HTML tag
const pokemon = [
  "Bulbasaur",
  "Charmander",
  "Squirtle"
]

function wrapInHtmlTag(arr) {
  console.log(arr.map(x => `<p>${x}</p>`))
}

wrapInHtmlTag(pokemon)

