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