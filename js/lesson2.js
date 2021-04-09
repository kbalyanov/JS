'use strict'

// # 1
let count = 100;
if (count <= 90 ) {
    console.log("Отлично");
} else if (count <= 60)
    console.log("Хорошо");
  else if (count <= 40)  
    console.log("Удовлетворительно");
  else {
      console.log("Попробуй потом");
  }

  // # 2
  let num = 123;
  switch (num) {
      case 125:
          console.log(125 - num);
          break;
      case 127:
          console.log(127 * num);
          break;
      case 123:
          console.log(num + num);
          break;
      case 129:
          console.log(129 / num);
          break;
          default:
            console.log("ошибка ввода");
  }

  // # 3
// Math.random(10;500) {
//   if (math.random 25;200) {}console.log(math.random)
// }

// # 4

for (let i = 40 ; i >= 1; i -=2 ) {
    console.log(i);
}

// # 5
let n = 15; 
let fib = [0, 1];  
for (let o = 2; o < n; o ++) {  
  fib[o] = fib[o-1] + fib[o-2];
}
console.log(fib.slice(0,n));

// # 6 
for (let j = 1; j <= 9; j++){  
 for (let l = 1; l <=9; l++) {
    console.log(`${l}*${l}=${l*j}`)

 }
 
}