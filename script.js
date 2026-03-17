// smooth scroll engine
let current = 0;
let target = 0;

function smoothScroll() {
  target = window.scrollY;
  current += (target - current) * 0.08;

  document.querySelector(".scroll").style.transform =
    `translateY(-${current}px)`;

  requestAnimationFrame(smoothScroll);
}

smoothScroll();


// hero parallax
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  document.querySelector(".hero__bg").style.transform =
    `scale(1.2) translateY(${y * 0.3}px)`;
});
