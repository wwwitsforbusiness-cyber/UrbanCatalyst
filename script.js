// popup auto
setTimeout(() => {
  document.getElementById("popup").style.display = "flex";
}, 3000);

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

// gsap animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade").forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: el
  });
});

// charts
new Chart(document.getElementById("chart1"), {
  type: 'bar',
  data: {
    labels: ["us","uk","india"],
    datasets: [{
      data: [120, 190, 300]
    }]
  }
});

new Chart(document.getElementById("chart2"), {
  type: 'line',
  data: {
    labels: ["jan","feb","mar"],
    datasets: [{
      data: [30, 50, 80]
    }]
  }
});

// backend ready
document.getElementById("form").addEventListener("submit", async (e)=>{
  e.preventDefault();

  const data = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  // replace with real api
  await fetch("https://your-api.com/lead", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });

  alert("submitted");
});
