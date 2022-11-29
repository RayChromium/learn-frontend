// const s1 = 'hello';
// console.log( typeof s1 ); // string

// const s2 = new String('hello?');
// console.log( typeof s2 ); // object

// // parent of EVERYHTING : window
// console.log(window);
// window.alert(1);

// object literals:
// const book1 = {
//     title: 'book 1',
//     author : 'John Doe',
//     year : '2013',
//     getSumary : function(){ return `${this.title}, written by ${this.author} in ${this.year}`;}
// };

// const book2 = {
//     title: 'book 2',
//     author : 'Jane Doe',
//     year : '2016',
//     getSumary : function(){ return `${this.title}, written by ${this.author} in ${this.year}`;}
// };

// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSumary());
// console.log(book2.getSumary());
// // return array of all values / keys inside:
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// constructors:
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSumary = function(){ return `${this.title}, written by ${this.author} in ${this.year}`;};
// }
// // instantiate an obj from a ctor
// const book1 = new Book('book 1', 'John Doe', '2013');
// const book2 = new Book('book 2','Jane Doe', '2016' );
// console.log(book1);  // Object {} stuff
// console.log(book1.title);
// console.log(book2.getSumary());

// Prototypes
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // add function to prototype
// Book.prototype.getSumary = function(){ return `${this.title}, written by ${this.author} in ${this.year}`;}
// Book.prototype.getAge = function(){ 
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }
// Book.prototype.revise = function(newYear) { this.year = newYear; this.revsed = true; }
// // instantiate an obj from a ctor
// const book1 = new Book('book 1', 'John Doe', '2013');
// const book2 = new Book('book 2','Jane Doe', '2016' );
// console.log(book1);  // Object {} stuff
// console.log(book1.title);
// console.log(book2.getSumary());
// console.log(book2.getAge());
// console.log(book2);
// book2.revise('2018');
// console.log(book2);

// inheritence
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // add function to prototype
// Book.prototype.getSumary = function(){ return `${this.title}, written by ${this.author} in ${this.year}`;}

// // inherite book
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year );
//     this.month = month
// }

// // inherite the prototype of Book:
// Magazine.prototype = Object.create(Book.prototype);
// // Use Magazine ctor
// Magazine.prototype.constructor = Magazine;

// // instantiate magazine obj
// const mag1 = new Magazine('Mag one', 'John Doe', '2019', 'Jan');

// console.log(mag1);
// console.log(mag1.getSumary());

// Object of protos
// const bookProtos = {
//     getSumary : function(){ return `${this.title}, written by ${this.author} in ${this.year}`;},
//     getAge : function(){ 
//             const years = new Date().getFullYear() - this.year;
//             return `${this.title} is ${years} years old`;
//         }
// }

// create object : 
// const book1 = Object.create(bookProtos);
// book1.title = 'book 1';
// book1.author = 'John Doe';
// book1.year = '2016';

// const book1 = Object.create(bookProtos, {
//     title : {value : 'book 1'},
//     author : {value : 'John Doe'},
//     year : {value : '2016'}
// });

// console.log(book1);



// ES6 class syntax : 
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSumary() { 
        return `${this.title}, written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) { 
        this.year = newYear; 
        this.revsed = true; 
    }

    static topBookStore() {
        return 'Barns & Noble';
    }
}

// Instantiate an object:
const book1 = new Book('book 1', 'John Doe', '2017');
console.log(book1);
book1.revise('2018');
console.log(book1);

// Need class name to run static functions: 
// console.log(book1.topBookStore());  // uncaught error : topBookStore is not a function
console.log(Book.topBookStore());  // OK