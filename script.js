// Carrusel de beneficios
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.beneficios-cards-track');
  const prevBtn = document.querySelector('.carrusel-prev');
  const nextBtn = document.querySelector('.carrusel-next');
  if (track && prevBtn && nextBtn) {
    const scrollAmount = track.querySelector('.beneficio-card')?.offsetWidth || 320;
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount - 20, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount + 20, behavior: 'smooth' });
    });
  }
});
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
  