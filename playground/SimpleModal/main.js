// Get the modal element
const modal = document.getElementById('simpleModal');
// Get the modal btn
const modalBtn = document.getElementById('modalBtn');
// Get the colse btn
const closeBtn = document.getElementById('closeBtn');

// Listen for click on "Click me Button" -- open modal
modalBtn.addEventListener('click', (e) => {
    modal.style.display = 'block';
});

// Listen for close click (on 'X')
closeBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

// Listen for Outside click, close modal
window.addEventListener('click', (e)=> {
    if(e.target == modal){
        modal.style.display = 'none';
    }
});