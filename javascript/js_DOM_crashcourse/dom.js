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
// getElementById
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hey man';
// headerTitle.innerText = 'goodbye'   // cares about style
// headerTitle.innerHTML = '<h3>Hello</h3>'
header.style.borderBottom = 'solid 3px #000'