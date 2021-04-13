let num =  [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
for(let i = 0; i < num.lenght; i++);
 for(let j = 0; j < num[i].lenght; j++);
    console.log(num[i][j]+=10);

// 2
const numb = []
for(let i = 0; i < 7; i++){
    let rendom = Math.floor(Math.random() * 100) +1;
    numb.push(rendom);
}
let min = Math.min.apply(Math.numb)
let max = Math.max.apply(Math.numb)
console.log(min)
console.log(max)
console.log(numb)

//3
const numbe = []
for(let i = 0; i < 7; i++) {
    let rend = Math.floor(Math.random()*100)-50
    numbe.push(rend)
}
console.log(numbe);
const negative = numbe.filter(x => x < 0);
console.log(negative)