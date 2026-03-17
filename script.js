// simple genuine interactions
function showPopup() {
    document.querySelector('.modal-wrapper').style.display = 'flex';
}

function closePopup() {
    document.querySelector('.modal-wrapper').style.display = 'none';
}

// hover effect logic for service cards
const cards = document.querySelectorAll('.s-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
