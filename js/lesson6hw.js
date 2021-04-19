'use strict'

// let text = "дом встречается в строке дом домик домой одомашненный"

// let house = (text, ...house) => {
//         let wordsarr.
// };

// let words = text.includes("дом");
// console.log(words)

let str = "дом встречается в строке дом домик домой одомашненный";
let count = 0;
let text = str.indexOf('дом');

while (text !== -1) {
  count++;
  text = str.indexOf('дом', text + 1);
}

console.log(count); 
