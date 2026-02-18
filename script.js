/* Reveal sections on scroll */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

/* Header shrink on scroll */
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.height = '64px';
    logo.style.height = '42px';
  } else {
    header.style.height = '80px';
    logo.style.height = '56px';
  }
});
