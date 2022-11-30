const posts = [
    { title : 'Post One' , body : 'This is Post One' },
    { title : 'Post Two' , body : 'This is Post Two' }
];

function getPosts() {
    setTimeout(() => { 
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    } ,1000 );
}

function creatPost(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            // to resolve, the callback has no error : 
            const err = false;

            if( !err ){
                // if no error, this 'resolve' will be 'getPosts' ( whatever funciton is in the .then() )
                resolve()
            } else {
                // the 'reject' is a error handler passed in with .catch()
                reject('error : something went wrong');
            }

        },2000);
    });
}

// creatPost( { title : 'Post Three' , body : 'This is Post Three' } ).then(()=>console.log('promise action'));
creatPost( { title : 'Post Three' , body : 'This is Post Three' } ).then(getPosts).catch(err=>console.log(err));

// Promise.all
// .then() after a Promise.all([] : list of promises) will register a callback when all promises in the list resolves
const promise1 = Promise.resolve('hello!'); // create a resolved promise
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Goodbye');
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json() );

Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values));
