// magnetic cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// bar animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar').forEach(bar => {
                bar.style.height = bar.style.getPropertyValue('--h');
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.chart').forEach(chart => observer.observe(chart));

function showPopup() { document.getElementById('popup').style.display = 'flex'; }
function closePopup() { document.getElementById('popup').style.display = 'none'; }
