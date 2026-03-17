// magnetic custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// scroll reveal for bars
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.height = bar.parentElement.querySelector('.bar').dataset.h;
            });
        }
    });
}, { threshold: 0.5 });

if(document.querySelector('.chart')) {
    observer.observe(document.querySelector('.chart'));
}

function showPopup() { document.getElementById('popup').style.display = 'flex'; }
function closePopup() { document.getElementById('popup').style.display = 'none'; }
