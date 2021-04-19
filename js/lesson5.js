'use strict'

// ананонимные функции
let sqrt = function (x) { // вызвать ананимную функцию можно только после обьявления
    return x * x // аноним присваеваем переменной липо в качестве аргумента
};

let res = sqrt(4);
console.log(res);

// стрелоые функции
sqrt = x  => x * x; // если параметр один скопки можно не ставить ( где один x)
let doubled = x => x * 2;
let printTitle = (elem, text) => {// если появляются виг скопки то нужно писать ретурн
    if (text.length < 3) return;
    elem.innerText = text.toUpperCase();
};
printTitle(document.body, "Функции");
//если в теле функции одна инструкция и фун должна вернуть какойто результат но не фигур скопки
// не ретурн не ставится

// любую функцию можно передать в качестве аргумента другую функцию
// передать можно любую но в основном передают анонимные

function changeNum(num,func) { // func = x => x *10;
    return func(num);
}

// res = changeNum(12,sqrt); // передаем иммя переменной либо анан функцию целеком
res = changeNum(12, x => x + 10); // 22
res = changeNum(10, x => x - 10); // 0


// function getNewArr(arr,func) {
//     let newArr = [];
//     for (let elem of arr) { // for (let i = 0; i< arr.le) не такой потому что не нужно менять но можно пользоваться и так
//             newArr.push(func(elem));
//     }
        
//     return newArr;
// }
// let arr = [4, 9, 1, 0,-5];
// let newArr = getNewArr(arr,sqrt); // [16,81,1,0,25]
// newArr = getNewArr(arr, x => x + 100); // [104,109,101,100.95]
// newArr= getNewArr(arr,doubled); // [104,109,101,100,95]
// console.log(newArr)

// методы массивов
//сортировка массивов
let colors = ["red", "blue", "orahge", "gold"];
colors.sort();// сортировка по возвростаниюб сравнивает по юникоду по номеру символа
console.log(colors); //["blue", "gold", "orahge", "red"]

function compare(a, b) {
    // if (a< b) return -1;
    // if (b<a) return 1;
    // return 0;
    //функции сравнения по ваши критериям
    // должна возврощать-1 (отрицательное число), если a меньше b
    //1 (полож число) , если a больше b
    // 0б , если а равно b
    return b - a; // a-b;// только если сравниваем числа пишем так
}


let ints = [45, 78, 12, -90, 3335, 78, 7770, 0];
ints.sort(compare);
ints.sort((a, b) => b-a); // одно и тоже
console.log(ints); // [-90, 0, 12, 3335, 45, 7770, 78, 78] числа никогда так не осортируете


ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
// filter
//метод filter создает новый массив, метод фильтр принимает на вход функциют и она должна вернуть либо true bkb false
let lessZero = num => num < 0;
let resArr = ints.filter(lessZero); // let resArr = ints.filter(num => num < 0);
resArr = ints.filter(num => num % 2 ===0);
//  function getNewArr(arr,func){
//      let newArr = [];
//      for( let elem of arr){
//          if (lessZero(elem))newArr.push
//      }
//  }


//метод map(); тоже принимает на вход функцию 

resArr = ints.map(n => n * 100);
console.log(resArr)

// every(); принимает функцию но возвращает true или false, как только функция перебирает массив 
// каждый жл массива должен пройти проверку что бы было true
ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
res = ints.every(n => n > 0);
console.log(res);

// some(); тоже принимает функцию вернет true если хотябы один элемент массива прошел проверку переданной функции
res = ints.some(n => n > 0);
console.log(res);

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
let func = (elem,index, arr) => {
    console.log(`элемент массива = ${elem}`);
    console.log(`индекс элемента массива = ${index}`);
    console.log(`массив = ${arr}`);

    arr[index] *=10;
}
ints.forEach(func); // ничего не создает но может изменить существуюший массив
for (let i = 0; i < ints.length; i +=1) { // то что происходит в нутри forEach
    func(ints[i], i, ints); // ничего не создает просто возвращает и меняет
}


let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
// проверить есть ли в массиве чтосло 111
res = numsArr.some(elem => elem.some(num =>num === 111));

let first = [ "апрель", "май", "октябрь", "февраль"],
    second = [ "январь", "декабрь", "октябрь", "июль", "май"]

function getArr(arr1, arr2) {
    arr1.filter(elem => arr2.indexof(elem) >= 0);
}

console.log(getArr(first,second));

//замыкание
function sub(x){
    let n = x;
    return function (m) {
        return n * m;
    }
}

let subSix = sub(6);

res = subSix(10);
console.log(res);
res = subSix(5);
console.log(res);
