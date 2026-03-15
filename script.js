// Flip cards sin temblor
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.flip-card').forEach(card => {
    const inner = card.querySelector('.flip-card-inner');
    card.addEventListener('mouseenter', () => inner.classList.add('flipped'));
    card.addEventListener('mouseleave', () => inner.classList.remove('flipped'));
  });
});

// Carrusel de partners infinito robusto con intervalo fijo
document.addEventListener("DOMContentLoaded", () => {
  const partnerTrack = document.querySelector('.partners-track');
  if (partnerTrack) {
    // Evitar duplicar imágenes múltiples veces
    if (!partnerTrack.dataset.infinite) {
      const partners = Array.from(partnerTrack.children);
      partners.forEach(partner => partnerTrack.appendChild(partner.cloneNode(true)));
      partnerTrack.dataset.infinite = "true";
    }
    let scrollStep = 1;
    let imagWidth = partnerTrack.querySelector('.partner-img')?.offsetWidth || 160;
    let originalPartners = partnerTrack.children.length / 2;
    let resetPoint = imagWidth * originalPartners + (originalPartners * 32); // 32 es el gap
    function updateVars() {
      imagWidth = partnerTrack.querySelector('.partner-img')?.offsetWidth || 160;
      originalPartners = partnerTrack.children.length / 2;
      resetPoint = imagWidth * originalPartners + (originalPartners * 32);
    }
    updateVars();
    partnerTrack.scrollLeft = 0;
    // Usar intervalo fijo para mejor control y evitar trabas
    const scrollInterval = setInterval(() => {
      if (partnerTrack.scrollLeft >= resetPoint - scrollStep * 3) {
        // Reiniciar instantáneamente sin animación
        partnerTrack.scrollLeft = 0;
      } else {
        partnerTrack.scrollLeft += scrollStep;
      }
    }, 30);
    window.addEventListener('resize', () => {
      updateVars();
    });
  }
});

// Carrusel de beneficios infinito robusto con intervalo fijo
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.beneficios-cards-track');
  if (track) {
    // Evitar duplicar tarjetas múltiples veces
    if (!track.dataset.infinite) {
      const cards = Array.from(track.children);
      cards.forEach(card => track.appendChild(card.cloneNode(true)));
      track.dataset.infinite = "true";
    }
    let scrollStep = 1;
    let cardWidth = track.querySelector('.beneficio-card')?.offsetWidth || 320;
    let originalCards = track.children.length / 2;
    let resetPoint = cardWidth * originalCards;
    function updateVars() {
      cardWidth = track.querySelector('.beneficio-card')?.offsetWidth || 320;
      originalCards = track.children.length / 2;
      resetPoint = cardWidth * originalCards;
    }
    updateVars();
    track.scrollLeft = 0;
    // Usar intervalo fijo para mejor control y evitar trabas
    const scrollInterval = setInterval(() => {
      if (track.scrollLeft >= resetPoint - scrollStep * 3) {
        // Reiniciar instantáneamente sin animación
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += scrollStep;
      }
    }, 30);
    window.addEventListener('resize', () => {
      updateVars();
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
  