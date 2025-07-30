// Modal open/close logic
const joinBtn = document.getElementById("joinBtn");
const joinModal = document.getElementById("joinModal");
const closeModal = document.getElementById("closeModal");

joinBtn.addEventListener("click", () => {
  joinModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  joinModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === joinModal) {
    joinModal.style.display = "none";
  }
});


let slides = document.querySelectorAll('.slide');
let index = 0;

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

  function toggleImages() {
    const allImages = document.querySelectorAll('.gallery-container .gallery-image');
    const button = document.querySelector('.show-more-btn');

    const isExpanded = button.getAttribute('data-expanded') === 'true';

    if (isExpanded) {
      // Hide extra images (show only first 6 for example)
      allImages.forEach((img, index) => {
        img.classList.toggle('hidden', index >= 6); // hide images after 6th
      });
      button.textContent = "Show More";
      button.setAttribute('data-expanded', 'false');
    } else {
      // Show all images
      allImages.forEach(img => img.classList.remove('hidden'));
      button.textContent = "Show Less";
      button.setAttribute('data-expanded', 'true');
    }
  }
