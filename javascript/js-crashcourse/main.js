console.log('Hello World');

// let, const
// always use const unless you know you need to do reasign

// Data Types:
// String, Number,  Boolean,  null, undefined, Symbol
const name = 'John';
const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; //undefined

// console.log(typeof(name)); // or console.log(typeof name)  // string
// console.log(typeof(age));       // number
// console.log(typeof(rating));    // number
// console.log(typeof(isCool));    // boolean
// console.log(typeof(x));         // object
// console.log(typeof(y));         // undefined
// console.log(typeof(z));         // undefined

// Strings
// Concatenation
console.log('My name is ' + name + ' and my age is ' + age);
// Template strings
console.log(`My name is ${name} and my age is ${age}`);
const hello = `My name is ${name} and my age is ${age}`;
console.log(hello);

const s = 'Hello World!';
const s1 = 'technology, it, computers, code';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(s1.split(', '));

// Arrays
// array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
// common way
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
console.log(fruits[1]); // oranges
fruits[3] = 'grapes';
console.log(fruits);
fruits.push('mangos');
console.log(fruits);
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(s1));
console.log(fruits.indexOf('oranges'));

// object literals
const person = {
    firstName:'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main street',
        city:'Boston',
        state:'MA'
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName, person.age);
// de-construcitng
const { firstName, lastName, address:{city} } = person; // pulling things out from object
console.log(firstName, lastName, city);
person.email = 'john@gmail.com';
console.log(person);

const todos = [
   {
      id:1,
      text : 'Take out the trash',
      isComplete:true
   },
   {
      id:2,
      text : 'Meet the boss',
      isComplete:true
   },
   {
      id:3,
      text : 'Dentist appt',
      isComplete:false 
   }

];

console.log(todos);

// convert to JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// for loop
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// while loop
// let i = 0;
// while(i < 10)
// {
//     console.log(i);
//     i++;
// }

for( let todo of todos )
{
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isComplete === true;
});
console.log(todoCompleted);

const todoCompletedText = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedText);

const x = '10';
// if we say : " const x = '10' ", then we still get  x is 10
if(x == 10)
{
    console.log("x is 10");
}

// so we should probably always use ===
if(x === 10)
{
    console.log(" x === 10 ");
}
else
{
    console.log(" x doesn't === 10 ");
}

// functions
function addNums( num1, num2 )
{
    // console.log(num1 + num2);
    return num1+num2;
}

const addNumsArrow = (num1, num2) => num1+num2;

addNums(5,4);

// objects
// 1. construct function ( not the best way )
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date( dob );
//     // put these functions in prototype
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // };
//     // this.getFullName = () => {
//     //     return `${this.firstName} ${this.lastName}`;
//     // };
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// };

// Person.prototype.getFullName = () => {
//     return `${this.firstName} ${this.lastName}`;
// };

// 2. class , does the same thing as above
class Person
{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date( dob );
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
}

// instantiate an object
const person1 = new Person("Joe", "Doe", '4/3/1980');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());