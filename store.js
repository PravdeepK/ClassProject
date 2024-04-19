function fetchGameData() {
    const apiKey = 'fa2a2e1bb82045849c40c6004531884b';
    const url = `https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results, 'data.results')
            displayGames(data.results);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
function displayGames(games) {
    const container = document.querySelector('.store-main');
    // Create a row for the cards
    const row = document.createElement('div');
    row.className = 'row';
    const limitedGames = games.slice(0, 12);

    limitedGames.forEach(game => {
        const card = document.createElement('div');
        const mainStore = game.stores.length > 0 ? game.stores[0].store : null;
        const storeUrl = mainStore ? `https://store.steampowered.com/search/?term=${mainStore.id}` : '#';
        card.className = 'col-md-3 mb-3 p-3';
        card.innerHTML = `
            <div class="store-games card">
                <img src="${game.background_image}" class="seling-games card-img-top" alt="${game.name}">
                <div class="gaming-store card-body">
                    <h5 class="card-title">${game.name}</h5>
                    <h5 class="card-title">Price : $59.99</h5>
                    <p class="card-text">Playtime: ${game.playtime} hours</p>
                    <p class="card-text">Ratings: ${game.rating}</p>
                    <p class="card-text">Platforms: ${game.platforms.map(platform => platform.platform.name).join(', ')}</p>
                    <a href="${storeUrl}" class="btn btn-primary" target="_blank">More Info</a>
                </div>
            </div>
        `;
        row.appendChild(card);
    });

    container.appendChild(row);
}

document.addEventListener('DOMContentLoaded', fetchGameData);;

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchModal = document.getElementById('search-modal');
const searchResultsDiv = document.getElementById('search-results');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
        return;
    }

    const apiKey = 'AIzaSyCaqdE2CLTQfitLXucrImkgqnTf5W6c2s0';
    const cx = '5796be78c465c4f70';
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            searchResultsDiv.innerHTML = '';

            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const resultDiv = document.createElement('div');
                    resultDiv.innerHTML = `
                        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                        <p>${item.snippet}</p>
                        <p><a href="${item.link}" target="_blank">${item.link}</a></p>
                    `;
                    searchResultsDiv.appendChild(resultDiv);
                });

                searchModal.style.display = 'block';
            } else {
                // No search results found
                searchResultsDiv.innerHTML = '<p>No search results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
});

// Close the modal when the close button is clicked
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    searchModal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == searchModal) {
        searchModal.style.display = 'none';
    }
});
