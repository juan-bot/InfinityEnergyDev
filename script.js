// Flip cards sin temblor
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.flip-card').forEach(card => {
    const inner = card.querySelector('.flip-card-inner');
    card.addEventListener('mouseenter', () => inner.classList.add('flipped'));
    card.addEventListener('mouseleave', () => inner.classList.remove('flipped'));
  });

  // Menú hamburguesa sidebar
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');
  const overlay = document.querySelector('.nav__overlay');

  function openMenu() {
    navLinks.classList.add('open');
    hamburger.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  overlay.addEventListener('click', closeMenu);
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
    let resetPoint = imagWidth * originalPartners + (originalPartners * 32);
    function updateVars() {
      imagWidth = partnerTrack.querySelector('.partner-img')?.offsetWidth || 160;
      originalPartners = partnerTrack.children.length / 2;
      resetPoint = imagWidth * originalPartners + (originalPartners * 32);
    }
    updateVars();
    partnerTrack.scrollLeft = 0;

    // Soporte táctil (swipe con el dedo)
    let touchStartX = 0;
    let touchScrollStart = 0;
    let isDragging = false;
    partnerTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchScrollStart = partnerTrack.scrollLeft;
      isDragging = true;
    }, { passive: true });
    partnerTrack.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const dx = touchStartX - e.touches[0].clientX;
      partnerTrack.scrollLeft = touchScrollStart + dx;
      if (partnerTrack.scrollLeft >= resetPoint) partnerTrack.scrollLeft -= resetPoint;
      if (partnerTrack.scrollLeft < 0) partnerTrack.scrollLeft += resetPoint;
    }, { passive: true });
    partnerTrack.addEventListener('touchend', () => { isDragging = false; });

    // Soporte arrastre con mouse
    let mouseDown = false;
    let mouseStartX = 0;
    let mouseScrollStart = 0;
    partnerTrack.addEventListener('mousedown', (e) => {
      mouseDown = true;
      mouseStartX = e.clientX;
      mouseScrollStart = partnerTrack.scrollLeft;
      partnerTrack.style.cursor = 'grabbing';
      e.preventDefault();
    });
    window.addEventListener('mousemove', (e) => {
      if (!mouseDown) return;
      const dx = mouseStartX - e.clientX;
      partnerTrack.scrollLeft = mouseScrollStart + dx;
      if (partnerTrack.scrollLeft >= resetPoint) partnerTrack.scrollLeft -= resetPoint;
      if (partnerTrack.scrollLeft < 0) partnerTrack.scrollLeft += resetPoint;
    });
    window.addEventListener('mouseup', () => {
      mouseDown = false;
      partnerTrack.style.cursor = 'grab';
    });

    // Auto-scroll
    const scrollInterval = setInterval(() => {
      if (partnerTrack.scrollLeft >= resetPoint - scrollStep * 3) {
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
  