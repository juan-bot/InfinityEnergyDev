// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
  
    revealEls.forEach(el => io.observe(el));
  
    // Año dinámico
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
  