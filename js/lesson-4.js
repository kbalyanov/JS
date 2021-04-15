'use strict'

function getSum(first,second){ // параметры
return first + second;
}

let l = 9, k = -166;
let sum = getSum(l,k);
console.log(sum);

let x = 12, y = 91;
sum = getSum(x, y);
console.log(sum);

console.log(getSum(89,0));

function getSumer(g, t){
    // return g < t ? g : t; 
    if ( g < t) return g;
    return t;
}
 console.log(getSumer(9,8))
// let g = 9, t = 5;
// let view = getSumer(g,t);
// view = getSumer(g,t);
// console.log(view);

// 2 параметра возраст и имя
// если возраст вне диапазона [7,200]- "укажите возраст"
// если возраст меньше 18 - " вы не сможете осуществлять покупку"
// в остальных случаях - " весть функционал доступе

function greetingStr(age,name = "Гость"){ // если значение name не укажим то будет undefind, а если укажем то будет как укажем
 let difAge = "укажите возраст"
 let underAge = " вы не сможете осуществлять покупку"
 let goAge =  " весть функционал доступен"
 if (age > 200 || age < 7)  return `${name},difAge`;
 if ( age < 18) return name + underAge;
 return name + goAge;
}

let str = greetingStr(34,"Алиса");
console.log(str);
str = greetingStr(27);
console.log(str)

function paintElem(elem,color = "yellow") {
    elem.style.background = color;
}

paintElem(document.body,"pink");

let catName = "Tom";
let codes = [4,5,6];

function changeName(str){
     str += "Кот";
}
function changeCodes(arr){
     for (let i = 0; i < arr.length; i +=1){
     arr[i] *=10;
     }
}
changeName(catName);// когда мы передаем с сылочными типами то передается ссылка
changeCodes(codes); // когда с примитивами то происходит копирование
console.log(catName);
console.log(codes);

// переменное количество аргументов принимает
function getAverage(...nums){
    let sum = 0;
     for(let i= 0; i < nums.length; i++){
         
         sum+=nums[i];

        //  return sum/nums.length

         // если функция принемает на вход несколько аргументов и есть ... то он должен идти в конце
     }
     return sum/nums.length
}

let avg = getAverage(8, 12,-90, 800,23); // можем передать сколько угодно аругментов
console.log(avg);
avg = getAverage(56,0,1);
console.log(avg);


function fullInfo(name, surname,...others){

}
fullInfo("john", "smith", "22 years","qwe@mail.ru" );
fullInfo