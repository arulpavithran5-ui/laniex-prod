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
