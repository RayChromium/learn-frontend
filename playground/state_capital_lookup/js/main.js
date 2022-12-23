const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// search state_capitals.json and filter it
const searchStates = async searchText => {
    const res = await fetch('./data/state_capitals.json');
    const states = await res.json();

    // Get matches to current text input: 
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if(searchStates.length === 0){
        console.log('ok?');
        matches = [];
        matchList.innerHTML = '';
    }
    else {
        console.log("SHTF");
    }

    console.log("matches : ", matches);
    console.log("matchList.innerHTML : ", matchList.innerHTML);
    console.log("searchText.length : ", searchText.length);
    console.log("searchText : ", searchText);

    outputHtml(matches);
};

// Show results to HTML
const outputHtml = (matches) => {
    if(matches.length > 0) {
        const html = matches.map( match => `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primer">${match.capital}</span></h4>
                <small>Lat: ${match.lat} Long: ${match.long}</small>
            </div>
        ` ).join('');
        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));