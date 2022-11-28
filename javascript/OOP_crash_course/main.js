// const s1 = 'hello';
// console.log( typeof s1 ); // string

// const s2 = new String('hello?');
// console.log( typeof s2 ); // object

// // parent of EVERYHTING : window
// console.log(window);
// window.alert(1);

// object literals:
const book1 = {
    title: 'book 1',
    author : 'John Doe',
    year : '2013',
    getSumary : function(){ return `${this.title}, written by ${this.author} in ${this.year}`;}
};

const book2 = {
    title: 'book 2',
    author : 'Jane Doe',
    year : '2016',
    getSumary : function(){ return `${this.title}, written by ${this.author} in ${this.year}`;}
};

console.log(book1);
console.log(book1.title);
console.log(book1.getSumary());
console.log(book2.getSumary());
// return array of all values / keys inside:
console.log(Object.values(book1));
console.log(Object.keys(book1));