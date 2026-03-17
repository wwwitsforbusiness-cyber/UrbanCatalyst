// custom cursor logic
const cursor = document.getElementById('cursor')
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
})

// cursor reaction
document.querySelectorAll('button, a, .s-card').forEach(item => {
    item.addEventListener('mouseenter', () => cursor.style.transform = 'scale(5)')
    item.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)')
})

function showPopup() { document.querySelector('.modal-bg').style.display = 'flex' }
function closePopup() { document.querySelector('.modal-bg').style.display = 'none' }
