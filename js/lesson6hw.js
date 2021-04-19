'use strict'

// let text = "дом встречается в строке дом домик домой одомашненный"

// let house = (text, ...house) => {
//         let wordsarr.
// };

// let words = text.includes("дом");
// console.log(words)

let text = "дом встречается в строке дом домик домой одомашненный дом";
let texting = "дом"

function sameword(text,texting){
let count = 0;
let word = 0;
let fword =0;
while (fword >= 0) {
    fword = text.indexOf(texting,word)
    if (fword >=0){
  count++;
  word = fword + texting.length;
    }
}
return count ;

}
console.log(sameword(text,texting));

// let pal = "";
// let text = pal.slice




