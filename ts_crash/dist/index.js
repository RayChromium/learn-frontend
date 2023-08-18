"use strict";
console.log('hello');
// Basic types:
let id = 5;
let company = 'WanderingRay';
let isPublished = false;
let x = 'hello'; // any:
x = true;
let ids = [1, 2, 3, 4, 5]; // array that contain numbers
// ids.push('hello'); //error : not asignable
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Ray', true];
// let person2: [number, string, boolean] = [1, 'Ray', 2]; // error: 2 not assinable to boolean
// Tuple array
let employee;
employee = [
    [1, 'Ray'],
    [2, 'Laoshu'],
    [3, 'booboo']
];
// Union
let id_union = 22;
id_union = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.log(`Direction1 is: ${Direction1.Up}`); // should be a number
console.log(`Direction1 is: ${Direction2.Up}`); // should be 'Up'
// const user: { 
//     id: number,
//     name: string
//  } = {
//     id: 1,
//     name: 'John'
// }
const user = {
    id: 1,
    name: 'John'
};
// Type assertion
let cid = 1;
const customerId = cid;
// customerId = true; // error
const customerId2 = cid;
// functions
function addNum(x, y) {
    return x + y;
}
console.log(`addNum(3,4): ${addNum(3, 4)}`);
function log(message) {
    console.log(message);
}
log(`pass in string`);
log(1111);
const user1 = {
    id: 2,
    name: 'Dude'
};
;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes: 
class Person {
    constructor(id, name) {
        console.log('person instantiated');
        this.id = id;
        this.name = name;
    }
}
const Ray = new Person(24, 'Ray');
// Ray.id; // can't access
