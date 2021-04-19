'use strict'

// let text = "дом встречается в строке дом домик домой одомашненный"

// let house = (text, ...house) => {
//         let wordsarr.
// };

// let words = text.includes("дом");
// console.log(words)

let str = "дом встречается в строке дом домик домой одомашненный";

function sameword(){
let count = 0;
let text = str.indexOf('дом');
while (text !== -1) {
  count++;
  text = str.indexOf('дом', text + 1);
}
return count;

}
console.log(sameword(str))

// let pal = "";
// let text = pal.slice

function list() {
    return Array.prototype.slice.call(arguments, 0);
  }
  
  let list1 = list(1, 2, 3); 

  console.log(list1)


