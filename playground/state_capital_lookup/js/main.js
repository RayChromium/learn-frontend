const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// search state_capitals.json and filter it
const searchStates = async searchText => {
    const res = await fetch('./data/state_capitals.json');
    const states = await res.json();

    console.log(states);
};

search.addEventListener('input', () => searchStates(search.value));