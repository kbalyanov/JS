'use strict'

function count(num){
   let prmore = "товара"
   let prles = "товаров"
   let prelse = "товар"
   if(num % 10 ===5) return num + prles 
   else if(num % 10 >=2 && num % 10 <= 4) return num + prmore 
   else if(num % 10 >=6 &&  num % 10 <= 9) return num + prles
   else return num + prelse
}
let hey = count(7);
console.log(hey)

// let startUp = [];
function range(start, end, step=1){
    let val = []
    for (let i = start; i <= end; i +=step){
    val.push(i);
    }
    return val;
}
let pushnum = range(1,20,3)
console.log(pushnum)

// function checkSpam(text,...words)
//     let sttext = text.split('');
//     let numbe = 0;
//     for(let i =0; i < sttext.length; i++){

//     }







