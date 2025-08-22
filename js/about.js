// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
  window.addEventListener('load', function () {
    const loader = document.getElementById('preloader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 100);
  });

// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Join Modal
const joinBtn = document.getElementById("joinBtn");
const joinModal = document.getElementById("joinModal");
const closeModal = document.getElementById("closeModal");

joinBtn.onclick = () => joinModal.style.display = "block";
closeModal.onclick = () => joinModal.style.display = "none";
window.onclick = (event) => {
  if (event.target === joinModal) joinModal.style.display = "none";
};

function openProfile(id) {
  document.getElementById(id).style.display = "flex";
}

function closeProfile(id) {
  document.getElementById(id).style.display = "none";
}
//projects
function openProjects() {
  document.getElementById("projectsModal").style.display = "block";
}

function closeProjects() {
  document.getElementById("projectsModal").style.display = "none";
}
