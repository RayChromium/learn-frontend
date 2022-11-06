// examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'fuck'; // don't do this
// console.log(document.forms);
// console.log(document.links);

// Selectors
// // getElementById
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hey man';
// // headerTitle.innerText = 'goodbye'   // cares about style
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px #000'

// // getElementsByClassname
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello too';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < items.length; ++i)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// // getElementsByTagName
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello too';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; ++i)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// // querySelector
// // only grabs the first one
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // only change the first one

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// //queryselectorall
// const titles = document.querySelectorAll('.title')
// console.log(titles);

// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// for(let i = 0; i < odd.length; ++i)
// {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// traversing the DOM
const itemList = document.querySelector('#items');
// parent node property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement property
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childnodes
// console.log(itemList.childNodes); // contains all the ws, so pain in the ass
// children
// console.log(itemList.children);
// console.log( itemList.children[1] );
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild: bad
// console.log(itemList.firstChild);  // doesn't give the first list-group-item, gives the text node
// // firstElementChild: good
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1';
// // lastChild: bad
// console.log(itemList.lastChild);  // doesn't give the first list-group-item, gives the text node
// // lastElementChild: good
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello last';

// // nextSibling: bad
// console.log(itemList.nextSibling);
// // nextElementSibling: good
// console.log(itemList.nextElementSibling)

// // previousSibling: bad
// console.log(itemList.previousSibling);
// // previousElementSibling: good
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

