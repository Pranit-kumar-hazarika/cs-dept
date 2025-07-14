let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3500);
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
  window.addEventListener('load', function () {
    const loader = document.getElementById('preloader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });