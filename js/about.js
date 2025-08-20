// Mobile menu toggle
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

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
