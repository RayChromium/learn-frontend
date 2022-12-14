const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag event
for( const empty of empties ) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart() {
    this.className += ' hold';
    // this.className = 'invisible'; // don't do this, it will disappear right away
    setTimeout( ()=>this.className = 'invisible', 0 );
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault();
    // console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hover';
    // console.log('enter');
}

function dragLeave() {
    // console.log('leave');
    this.className = 'empty';
}

function dragDrop() {
    // console.log('drop');
    this.className = 'empty';
    this.append(fill);
}