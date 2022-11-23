const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Select tab content item
function selectItem(e){
    removeBorder();
    // Add border to current tab
    this.classList.add('tab-border');
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));