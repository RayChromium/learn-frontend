const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Select tab content item
function selectItem(e){
    removeShow();
    removeBorder();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from the DOM
    switch(this.id) {
        case 'tab-1' : document.getElementById("tab-content-1").classList.add('show');break;
        case 'tab-2' : document.getElementById("tab-content-2").classList.add('show');break;
        case 'tab-3' : document.getElementById("tab-content-3").classList.add('show');break;
        default:break;
    }
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));