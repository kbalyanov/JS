'use strict'

let ints = []; //создание пустого массива
console.log(ints);

let colors = ["blue", "red", "yellow","pink"];
console.log(colors);

//разряженный массив
let nums = [2, 78, , 90, ,, -12];
console.log(nums);

// свойство lenght
console.log(colors.length); // 4
console.log(nums.length); // 7

// доступ к элементам массива
colors = ["blue", "red", "yellow",];
colors[1] = "orange";
console.log(colors);

let elem = colors[0];
console.log(elem);

// станет разряжанным и по сути так делать не нужно просто к сведению
console.log(colors[30]); // undefined
colors[47] = "black";
console.log(colors); // 48
colors.lenght = 900;
console.log(colors); 

//многомерный массив
nums = [
        [55, -991, 34, 0], // index0
        [9, 23, 81], // index1
        [99, 4] // index2
];

let firstArr = nums[1];
console.log(firstArr);

console.log(firstArr[2]); //81
console.log(nums[2] [1], nums[1][1]) // 4  обратились к массиву index 2
nums[1][1] =22; // изменияет число в массиве
console.log(nums);

// ПЕРЕбор массивов
ints = [67, 99, 12, 65, 6];
                                 //i++
for (let i = 0; i < ints.length; i +=1) {
    console.log(ints[i]);
}

let str = "Значения жлементов массива: ";
for (let i = 0; i < ints.length; i +=1) { // выведет в строку текстом
    str += ints[i] + " , ";
    ints[i] *= ints[i];// позволяет изменять значени в элементе массива
}
console.log(str);
console.log(ints);// позволяет изменять

// цикл for of переберает массивы и коллекции html элементов
ints = [67, 99, 12, 65, 6];
for (let arrElem of ints) {
    console.log(arrElem);
}
let pfr = 0;
ints = [67, 99, 12, 65, 6];
for (let arrElem of ints) {
   pfr=pfr+arrElem;
}
console.log(pfr);

let img = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg"];

let imgSection = document.getElementById("img");
console.log(imgSection);
for(let imgs of img) {
    // pic
    let pic = document.createElement("img");
    // <pics src="pics/" + imgs
    pic.setAttribute("src", `img/${imgs}`);
    imgSection.append(pic);   
}

// Методы массивов

colors = ["blue", "red", "yellow","pink"];
// 1. добавление/ удаление первого/ последнего элемента массива
let lastColor = colors.pop();// ["blue", "red", "yellow"]
console.log(lastColor);
colors.pop(); // ["blue","red"]
console.log(colors);

// добавление в конец массива
colors.push ("black", "green", "purple");
console.log(colors)// ["blue", "red", "black", "green", "purple"]

// 2. удаление первого элемента
let firstElem = colors.shift();
console.log(firstElem);// blue если нужно сохронить в переменную
colors.shift(); // ["black", "green", "purple"] если нужно удалить не сохроняя
console.log(colors);

// добавление элемента в начало массива
colors.unshift("green", "red"); // ["green", "red", "black", "green", "purple"]
console.log(colors);

// splice / slice- создает новый массив на основе существующих
//slice - старый массив не меняет
colors = ["blue", "red", "yellow","pink", "green"];
console.log(colors);
let newColors = colors.slice(1,3); // считывает идексы от 1до 3
console.log(newColors)

//splice может удалять и может добавлять указанное кол во эл
// с указаного идекса добавляент
let removed = colors.splice(1,2, "greenyellow","gold");
console.log(removed); // удаленный эл ["red", "yellow"], 
console.log(colors);

// удаление нечетных элементов из массива
ints = [-3, 78, 11, 11, 45, 90, 34];
for (let i =0; i < ints.length; i++) {
    if (ints[i] % 2 !==0)
    ints.splice(i,1)
    i -= 1;
}

// удаление нечетных  с конца так быстрее
for (let i = ints.length -1; i >=0; i -= 1) {
    if (ints[i] % 2 !==0){
        ints.splice(i, 1);
    }
    
}
console.log(ints);



// методы которые нужно посмотреть дома 
// join
// includes
// reverse
// concat
// indexof / lastIndexof



