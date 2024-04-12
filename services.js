document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card_feed');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('.name').innerHTML;
            const description = this.querySelector('.descrip_feed').innerHTML;
            showModal('Customer Feedback', `<h5>${name}</h5>${description}`);
        });
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            const name = this.querySelector('h5').textContent;
            const role = this.querySelector('p').textContent;
            const imageSrc = this.querySelector('img').src;
            showModal('Team Member Info', `<img src="${imageSrc}" alt="${name}" class="img-fluid"><h5>${name}</h5><p>${role}</p>`);
        });
    });

    function showModal(title, content) {
        const modal = $('#infoModal');
        modal.find('.modal-title').text(title);
        modal.find('.modal-body').html(content);
        modal.modal('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const teamPhotos = document.querySelectorAll('.team-photo');
    teamPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            const emailAddress = this.getAttribute('data-email');
            if (emailAddress) {
                window.location.href = `mailto:${emailAddress}`;
            }
        });
    });
});