'use strict'
let num = [];
function count(num,text=""){
   let prmore = "товара"
   let prles = "товаров"
   let prelse = "товар"
   if(num % 10 ===3) return text + prmore 
   else if(num % 10 ===5) return text + prles 
   else if(num % 10 ===2) return text + prmore
   else if(num % 10 ===4) return text + prmore
   else if(num % 10 ===6) return text + prles
   else if(num % 10 ===7) return text + prles
   else if(num % 10 ===8) return text + prles
   else if(num % 10 ===9) return text + prles
   else return text + prelse
}
let hey = count(1,"1");
console.log(hey)

let startUp = []
function range(start, end, step=1){
    
  for (let i = range.length -1; i >=0; i -= 1) {
    if (range[i] % 2 !==0){
        // range.splice(i, 1) 
    }   return step, end,start;
}

}
let llc = range(3,2,1)
console.log(llc)
