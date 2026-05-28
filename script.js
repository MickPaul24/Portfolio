// ── Carousel ──────────────────────────────────────────────────────────────
const track   = document.querySelector(".reviewcarousel-track");
const items   = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => { index = (index + 1) % items.length; updateCarousel(); });
prevBtn.addEventListener("click", () => { index = (index - 1 + items.length) % items.length; updateCarousel(); });

// Auto-advance every 6 seconds
let autoplay = setInterval(() => { index = (index + 1) % items.length; updateCarousel(); }, 6000);
[prevBtn, nextBtn].forEach(btn => btn.addEventListener("click", () => { clearInterval(autoplay); }));


// ── Hamburger menu ────────────────────────────────────────────────────────
const hamburger = document.querySelector(".hamburgerMenu");
const navMenu   = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


// ── Scroll-reveal (IntersectionObserver) ─────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".stat1, .projectOne, .fade-in").forEach(el => {
  revealObserver.observe(el);
});


// ── Contact form ──────────────────────────────────────────────────────────
const form   = document.querySelector('#contactForm');
const status = document.querySelector('#status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status.textContent = 'Message sent successfully ✓';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try again.';
      }
    } catch {
      status.textContent = 'Network error. Please check your connection.';
    }
  });
}
