console.log('hello');

// Basic types:
let id: number = 5;
let company : string = 'WanderingRay';
let isPublished : boolean = false;

let x : any = 'hello';// any:
x = true;

let ids: number[] = [1,2,3,4,5] // array that contain numbers
// ids.push('hello'); //error : not asignable
let arr: any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Ray', true];
// let person2: [number, string, boolean] = [1, 'Ray', 2]; // error: 2 not assinable to boolean
// Tuple array
let employee:  [number, string][];
employee = [ 
    [1, 'Ray'],
    [2, 'Laoshu'],
    [3, 'booboo']
 ]

// Union
let id_union: string | number = 22;
id_union = '22';

// enum
enum Direction1  {
    Up,
    Down,
    Left,
    Right
};

enum Direction2  {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
};
console.log( `Direction1 is: ${Direction1.Up}` ); // should be a number
console.log( `Direction1 is: ${Direction2.Up}` ); // should be 'Up'

// Objects
type User = {
    id: number,
    name: string
}

// const user: { 
//     id: number,
//     name: string
//  } = {
//     id: 1,
//     name: 'John'
// }

const user: User = {
    id: 1,
    name: 'John'
}

// Type assertion
let cid: any = 1;
const customerId = <number>cid;
// customerId = true; // error
const customerId2 = cid as string;

// functions
function addNum( x: number, y: number ) : number {
    return x + y;
}
console.log(`addNum(3,4): ${addNum(3,4)}`);

function log( message: string | number ): void {
    console.log(message);
}
log(`pass in string`);
log(1111);

// Interfaces:
interface UserInterface  {
    readonly id: number,
    name: string,
    age?: number   // optional
}

const user1: UserInterface = {
    id: 2,
    name: 'Dude'
};

// user1.id = 5; // error: can't assign readonly prop