let userData = {};
console.log(userData);

// Установили значение свойства name
userData.name = 'Anna';
console.log(userData.name); //'Anna'

userData.age = 27; // в качестве свойств мы можеим использовать строки, все что в страке преобразуется и
console.log(userData.age);
console.log(userData['age']); // когда обращение через точку невозможно, обращаемся через скопки


userData.favoriteColors = ['red','orange','yellow'];

console.log(userData.favoriteColors[1]); // 'orange'

console.log(userData.img); //undefined, если мы пытаемся читать значение которого в обьект нет всегда будет undefined


// наличие свойства в обьекте можно проверить с помощью:
if (userData.img === undefined) userData.img = 'default.png';
if (!('githubLink' in userData)) userData.githubLink = null; // вернет true если оно есмть в обьекте и false если нету

userData.login = null;

let jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102,
};

let cssBook = {
    title: 'About CSS',
    author: 'CSS Junior',
    pageCount: 1700,
};

userData.books = [jsBook,cssBook];

console.log(userData.books[1].pageCount) // 1700
console.log(userData.books[1] ['pageCount']) // 1700

// вывести в консоль название книг из userData
// кол стр которых больще 500
for (let book of userData.books) {
    if(book.pageCount>500)console.log(book.title);
}

// 61

let messages = [ 
    {
    text:"срочное",
    priority:"high",
    code:99
},
{
    text:"Просто сообщение",
    priority:"low",
    code: 8
},
{
    text:"срочное сообщение",
    priority:"high",
    code: 88
}

]

let userCode = parseInt(prompt("Введите код"));
let texts =[];
for(let message of messages){
    if(message.code > userCode) texts.push(message.title);
    console.log(texts)
};

jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102,
};

// перебор обьектов - цикл for in
for (let propertyName in jsBook) {
    //jsBook.propertyName
    console.log(`Имя свойства ${propertyName}, значение ${jsBook[propertyName]}`);
}

// Массив с ключами(свойствами) обьекта jsBook
let keys = Object.keys(jsBook);
console.log(keys); // ["title", "author", "pageCount"]

//Массив со значениями обьекта jsBook
let values = Object.values(jsBook);
console.log(values); // ["About JS", "JS Junior", 102]

// массив пар [ключ(свойство): значение]
let entries = Object.entries(jsBook);
console.log(entries);

// Деструктуризация обьекта

jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102,
};

// let {title,author,pageCount} =jsBook;
// console.log(title);
// console.log(author);
// console.log(pageCount);

let {title,author,pageCount,img = 'default.png'} =jsBook;
console.log(title);
console.log(author);
console.log(pageCount);
console.log(img);

let {login,pwd,...others} = {
    login: "qwert",
    pwd: "qwe12345",
    phone: "9999999",
    email: "qwe@gmail.com"
};
console.log(login);
console.log(pwd);
console.log(others);

let {name: userName, age: userAge} = {name:"Anna", age: 33};
console.log(userName);
console.log(userAge);

// Деструктуризация обьекта в параметрах функции

jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102,
};

// очень популярно
function doSmth({title, author, img = 'default.png'}){
    console.log(title);
    console.log(author);
    console.log(img);
}
doSmth(jsBook);

function doSmth(obj){
    console.log(obj.title);
    console.log(obj.author);
    console.log(img);
}
doSmth(jsBook);

//Если данные валидны, функция формирует и возвращает 
//новый ОБЪЕКТ с объектами,
//значения свойств price которых лежат в 
//диапазоне от значения from до значения to, не включая to.

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    
};

function fn(object, from,to){
    let items = {};
    for (let propertyName in object) {
        items[propertyName] = object[propertyName];
    }
    return items;
}

fn(goods, 1800, 4000);

console.log(fn(goods,1800,4000))