gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach(panel => {
  gsap.from(panel, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: panel,
      start: "top 80%"
    }
  });
});

// chart
new Chart(document.getElementById("chart"), {
  type: 'line',
  data: {
    labels: ["US","UK","INDIA"],
    datasets: [{
      data: [200,150,300]
    }]
  }
});
