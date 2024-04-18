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
        const storeUrl = mainStore ? `https://store.steampowered.com/app/${mainStore.id}` : '#';
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
