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