// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.animate([
        {
          opacity: 0,
          transform: "translateY(40px)"
        },
        {
          opacity: 1,
          transform: "translateY(0)"
        }

      ], {
        duration: 900,
        fill: "forwards"
      });

    }

  });

}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// Button glow effect
document.querySelectorAll(".btn").forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    btn.style.boxShadow = "0 0 35px #19d37e";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.boxShadow = "";

  });

});
