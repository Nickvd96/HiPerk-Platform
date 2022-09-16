const filters = document.querySelectorAll('.filter');
const searchBar = document.querySelector('.search-field');
let currentFilter = 'filter-alles';
let currentSearch = '';
// console.log(document.querySelectorAll('.filter'));

function applyFilter() {
    // CHANGE COLORS OF FILTER BUTTONS AND UPDATE CURRENTFILTER TO TARGET
    for (let j = 0 ; j < filters.length; j++) {
        if (filters[j].id === currentFilter) {
            filters[j].style.backgroundColor = 'var(--HiPerksOranje)';
        }

        else  {
            filters[j].style.backgroundColor = 'var(--HiPerksBlauw)';
        }
    }

    // CHANGE VISIBILITY OF LABELS AFTER CLICKING FILTER
    const labels = document.querySelectorAll('.label');
    for (let j = 0 ; j < labels.length; j++) {
        if (currentFilter === 'filter-alles' || labels[j].id === currentFilter) {
            // console.log(labels[j].getElementsByTagName('H2'));

            // CONVERT LABEL TITLE TO LOWER CASE
            let labelTitle = labels[j].getElementsByTagName('H2')[0].innerText.toLowerCase();
            
            // CHECK WHETHER TITLE MATCHES SEARCH STRING
            if (labelTitle.indexOf(currentSearch) === -1 ) {
                labels[j].style.display = 'none';
            }

            else {
                labels[j].style.display = 'flex';
            }
        }

        else  {
            labels[j].style.display = 'none';
        }
    }
}

// PULL STORED TEXT FROM SESSION STORAGE (FROM HOME.HTML SEARCHBAR)
let storedSearch = sessionStorage.getItem("searchStorage");
// console.log(storedSearch);

if (storedSearch !== null ) {
    // ADD STORED SEARCH TERM INTO INPUT FIELD AND CLEAR STORED DATA AFTER USE
    document.querySelector('input.search-field').value = storedSearch;
    currentSearch = storedSearch.toLowerCase();
    applyFilter();
    sessionStorage.removeItem("searchStorage");
}

// ADD EVENTLISTENER THAT DETECTS SEARCH INPUT
searchBar.addEventListener('input', function (e) {
    // console.log(e.target.value);

    // CONVERT SEARCH INPUT TO LOWER CASE
    currentSearch = e.target.value.toLowerCase();
    
    applyFilter();
    }
);

// LOOP THROUGH ALL FILTERS
for (let i = 0 ; i < filters.length; i++) {
    filters[i].addEventListener("click", function (e) {
        currentFilter = e.target.id;
        // console.log("currentFilter = " + currentFilter);
        // console.log(e.target.id);
        
        applyFilter();  
    });
}
