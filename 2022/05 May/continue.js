// let text = '';

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text += i;
// }

// console.log(text);
// // expected output: "012456789"


var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}

