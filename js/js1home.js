'use strict'
let n = 58;
let p = n % 10 + (n - n %10) / 10;
console.log(p);


// # 2
let h = 1, k = 2;
k = k - h;
h = k + k;
console.log(h, k)

// # 3
let a = 2, b = 3, c = 1;
let d = a * b;
let f = b * c;
let g = a * c;
let fog = a * (d + f + g) 
console.log(fog);

// # 4
let start = 3;
let end = 4;
let between = start < end ?  end - start : -1;
console.log(between);


