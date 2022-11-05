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