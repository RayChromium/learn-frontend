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