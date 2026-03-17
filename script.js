function showPopup() {
    const popup = document.getElementById("popup")
    popup.style.display = "block"
}

function closePopup() {
    document.getElementById("popup").style.display = "none"
}

// smooth appearance for bars
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar")
    bars.forEach(bar => {
        const height = bar.style.height
        bar.style.height = "0"
        setTimeout(() => {
            bar.style.height = height
        }, 500)
    })
})
