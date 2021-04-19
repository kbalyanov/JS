'use strict'

let title = "JavaScript"; // h2
let duration = 2.5; // продолжительность
let price = 2000; // p стоимость
let background = "yellow"

let html = `<div style="background: ${background}">
<h2>${title.toUpperCase()}</h2>
<p>Продолжительность: ${duration}</p>
<p>Стоимость: ${price}</p>
</div>`;

console.log(html);
document.body.innerHTML = html;


// Поезд['П','о','е','з','д'] строки хронятся в кодировке utf16
// строки в js неизменны нельзя ничего сделать

let train = "Поезд";
console.log(train.length);// 5 возвращает номер символов юникода но для отображения например
// смайла будет больше знаков юникода
console.log(train[2]) // е index символа в массиве

// методы строк
// 1. приведение к верхнему и нижнему регистру
let newStr = train.toUpperCase();
// console.log(train.toUpperCase())
console.log(newStr);

newStr = train.toLowerCase();
console.log(newStr)

// 2. trim убираетп пробелы с начала и конца строки
train = "Длинный,  Поезд    ";
newStr = train.trim();
console.log(newStr); // "Поезд"

// 3. includes,startsWith, endWith чувствительны к регистру
train = "Поезд";
console.log(train.includes("ез"));
console.log(train.startsWith("по"));
console.log(train.endsWith("д"));

// 4. Массив из строки
let arrFromStr = train.split("");
console.log(arrFromStr); // (5) ["П", "о", "е", "з", "д"]

// join из массива в строку
let textFrom = arrFromStr.join(":");
console.log(textFrom); // П:о:е:з:д

//сравнение строк
train = "Поезд";
let train2 = "поезд";

console.log(train === train2); // false

// let compareRes = train.localeCompare(train2).toLowerCase();
// 0, если строки равны
// отрицательное числоб если train меньше train2
// положительное числоб если train больше train2
// console.log(compareRes);
train = "Яблоко";
console.log(train.substring(1,4)); // "бло"
console.log(train.substring(1)); // "блоко";

// заменить все буквы в слове на строчные, а первую на заглавную
let someStr = "ergrieuger;gJNHNI";
// "ergrieuger;gJNHNI"
someStr = someStr[0].toUpperCase() + someStr.substring(1).toLocaleLowerCase();
console.log(someStr);

let getStr= str => str.substring(0,2).toUpperCase() +
    str.substring(2).toLowerCase;

getStr = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(getStr("fbwerifBD"));
console.log(getStr("HBFDIEWvnrvn"));

// Методы строк: indexOf / lastIndexof / slice читать дома

function uniqueWords(...words) {
    let uniqueWordsArr = [];

    for(let word of words) {
        if (!uniqueWordsArr.includes(word)) {
            uniqueWordsArr.push(word);
        }
    }
    return uniqueWordsArr;
}
console.log(uniqueWords("one", "two", "one"));

let getLongestWord = sentence => {
    let currentLongestWord = "";
    let sentenceArr = sentence.split("");

    for(let word of sentenceArr) {
        if (word.length > currentLongestWord.length) {
            currentLongestWord = word;
        }
    }
    return `${currentLongestWord} (${currentLongestWord.length} letters)`;
}
let sentence = "A brown fox jumped over a lazy dog";
console.log(getLongestWord(sentence));


let text = "Lorem error ipsum dolor sit amet consectetur adipisicin"+
           " elit Aut corporis dolor delectus ducimus dolor error iusto laudantium officia"+
        "officiis vero error voluptatibus Aliquam ea ipsa quasi "+
         "sapiente error ullam A dolore dolorum minima "+
        "provident error  voluptas Aliquam"+
        "aut fugiat hic inventore error nam provident ratione sed";
// checkSpam(text, "error", "dolor");

let checkSpam = (text,...spamWords) => {
    let frequency = [];
    frequency.length = spamWords.length;
    let wordsArr = text.split("");

    for(let spamWordIndex = 0;
         spamWordIndex < spamWords.length;
         spamWordIndex++
         ) {

    for (let textWord of wordsArr) {
        if(textWord === spamWords[spamWordIndex]){
            if(frequency[spamWordIndex]){
              frequency[spamWordIndex]++;
            } else {
                frequency[spamWordIndex] = 1;
            }
        }
    }
}
    return frequency;
}
console.log(checkSpam(text,"tumble", "mumble"))
checkSpam(text, "tumble", "mumble");
