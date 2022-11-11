const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// add listener to form
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();         // prevent normal submit action

    // get input value
    const newItem = document.getElementById('item');

    //create new li element
    const li = document.createElement('li');
    // add class name
    li.className = 'list-group-item';
    // add text Node with input value
    li.appendChild(document.createTextNode(newItem.value));

    //create the delete button element
    const deleteButton = document.createElement('button');
    // add classes to button
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteButton);
    // append li to list
    itemList.appendChild(li);
}

// remove item,
function removeItem(e){
    // only do delete when press the delete button
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete it?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}