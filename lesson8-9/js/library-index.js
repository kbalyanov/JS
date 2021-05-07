'use strict';

function getRandomBooks() {
    return [
        {
            id: 1,
            img: 'https://picsum.photos/200/300?random=1'
        },
        {
            id: 55,
            img: 'https://picsum.photos/200/300?random=2'
        },
        {
            id: 9,
            img: 'https://picsum.photos/200/300?random=3'
        },
        {
            id: 27,
            img: 'https://picsum.photos/200/300?random=4'
        },
        {
            id: 5,
            img: 'https://picsum.photos/200/300?random=5'
        },
        {
            id: 20,
            img: 'https://picsum.photos/200/300?random=6'
        },
        {
            id: 37,
            img: 'https://picsum.photos/200/300?random=7'
        },
        {
            id: 31,
            img: 'https://picsum.photos/200/300?random=8'
        },
    ];
}

//let addRandomBooks(where,books)=>{}
function addRandomBooks(where,books){
    for (let book of books) {
        let bookDiv = document.createElement("div");// innerHtml все перезаписывает,даже если изночально что то было
        bookDiv.innerHTML = `
            <img src="${book.img}">
            <a href="one-book.html?id=${book.id}">Читать</a>
        `;
        where.append(bookDiv);
    }
}
addRandomBooks(document.querySelector(".random"),getRandomBooks())




// function addGenre(where, byGenre){
//     for(let genre of byGenre){
//         let genre1 = document.createElement("section");
//         genre1.classList.add("flex-row", "wrap");
//         let genre1 = document.createElement("h2");
//         genre1.classList.add("text-shadow-blue","text-center","section-title")
//         genre1.innerText = `Книги из жанра ${genre.genreName}`;

//         for(let genreHigh of byGenre.genre1) {
//             let genreLow = document.createElement("div");
//             genreLow.classList.add("col-4","col-xs-12","col-sm-6","flex-row");
//             let artiG = document.createElement("article");
//             artiG.classList.add("book");
//             artiG.innerHTML = `
//             <span>Lorem ipsum.</span>
//             <div><img src="${genreLow.img}" alt="альтернативный текст"></div>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea fugit
//                 inventore
//                 laudantium natus, necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore,
//                 voluptate.
//                 Ipsam, perferendis!
//             </p>
//             <<a href="#">Читать</a>
//             `;
//             genreHigh.append(genre1)
//         }
       
//     }
// }
//    addGenre(document.querySelector(".container"),getBooksByGenre()) ;





function getBooksByGenre() {
    return [
        {
            genreName: "Жанр 1",
            books: [
                {
                    id: 8,
                    title: "Lorem ipsum",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                        "optio quae quod quos repudiandae rerum, tempore",
                    img: "https://picsum.photos/200/300?random=8"
                },
                {
                    id: 10,
                    title: "Aliquam consequatur",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                        "ea fugit inventore laudantium natus",
                    img: "https://picsum.photos/200/300?random=5"
                },
                {
                    id: 34,
                    title: "Laudantium",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                        "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                        "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                    img: "https://picsum.photos/200/300?random=2"
                }
            ]
        },
        {
            genreName: "Жанр 2",
            books: [
                {
                    id: 4,
                    title: "Necessitatibus",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                        " nulla optio quae quod quos repudiandae rerum, tempore",
                    img: "https://picsum.photos/200/300?random=9"
                },
                {
                    id: 13,
                    title: "Nulla optio quae quod",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                        "fugit inventore laudantium natus",
                    img: "https://picsum.photos/200/300?random=10"
                },
                {
                    id: 59,
                    title: "Non nulla",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                        "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                        " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                    img: "https://picsum.photos/200/300?random=11"
                }
            ]
        }
    ]
}

function addGenre(where, byGenre){
    for(let genre of byGenre){
        let genre1 = document.createElement("section");
        genre1.classList.add("flex-row", "wrap");
        let genre2 = document.createElement("h2");
        genre2.classList.add("text-shadow-blue","text-center","section-title")
        genre2.innerText = `Книги из жанра ${genre.genreName}`;

        for(let genreHigh of genre.books) {
            let genreLow = document.createElement("div");
            genreLow.classList.add("col-4","col-xs-12","col-sm-6","flex-row");
            let artiG = document.createElement("article");
            artiG.classList.add("book");
            artiG.innerHTML = `
            <span>${genreHigh.title}</span>
            <div><img src="${genreHigh.img}" alt="альтернативный текст"></div>
            <p>
                ${genreHigh.description}
            </p>
            <<a href="#">Читать</a>
            `;
            genreLow.append(artiG);
            genre1.append(genreLow)
        }
       where.append(genre1)
    }
}
   addGenre(document.querySelector("main"),getBooksByGenre()) ;
