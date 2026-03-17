function showPopup() {
    const modal = document.getElementById("popup")
    modal.style.display = "block"
    modal.style.opacity = "0"
    setTimeout(() => { modal.style.opacity = "1" }, 10)
}

function closePopup() {
    document.getElementById("popup").style.display = "none"
}

// simple scroll animation trigger
window.addEventListener('scroll', () => {
    const bars = document.querySelectorAll('.bar')
    bars.forEach(bar => {
        const pos = bar.getBoundingClientRect().top
        if(pos < window.innerHeight) {
            bar.style.opacity = "1"
        }
    })
})
