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

// Projects modal
function openProjects() {
  document.getElementById('projectsModal').style.display = 'block';
}

function closeProjects() {
  document.getElementById('projectsModal').style.display = 'none';
}

// Image Modal Functionality
let currentImageIndex = 0;
let imageList = [];

// Initialize image modal when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeImageModal();
});

function initializeImageModal() {
  // Create image modal HTML
  const imageModalHTML = `
    <div id="imageModal" class="image-modal">
      <div class="image-modal-content">
        <span class="image-modal-close">&times;</span>
        <span class="image-modal-nav image-modal-prev">&#8249;</span>
        <span class="image-modal-nav image-modal-next">&#8250;</span>
        <img id="modalImage" src="" alt="Enlarged view">
        <div class="image-counter">
          <span id="imageCounter">1 / 1</span>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', imageModalHTML);
  
  // Get all gallery images and add click listeners
  const galleryImages = document.querySelectorAll('.group-gallery img');
  imageList = Array.from(galleryImages);
  
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openImageModal(index));
    img.style.cursor = 'pointer';
  });
  
  // Add event listeners for modal controls
  const modal = document.getElementById('imageModal');
  const closeBtn = document.querySelector('.image-modal-close');
  const prevBtn = document.querySelector('.image-modal-prev');
  const nextBtn = document.querySelector('.image-modal-next');
  
  closeBtn.addEventListener('click', closeImageModal);
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);
  
  // Close modal when clicking outside image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeImageModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex') {
      switch(e.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowLeft':
          showPrevImage();
          break;
        case 'ArrowRight':
          showNextImage();
          break;
      }
    }
  });
}

function openImageModal(index) {
  currentImageIndex = index;
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const counter = document.getElementById('imageCounter');
  
  modalImg.src = imageList[currentImageIndex].src;
  modalImg.alt = imageList[currentImageIndex].alt;
  
  updateCounter();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
  updateModalImage();
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  updateModalImage();
}

function updateModalImage() {
  const modalImg = document.getElementById('modalImage');
  modalImg.style.opacity = '0';
  
  setTimeout(() => {
    modalImg.src = imageList[currentImageIndex].src;
    modalImg.alt = imageList[currentImageIndex].alt;
    modalImg.style.opacity = '1';
    updateCounter();
  }, 150);
}

function updateCounter() {
  const counter = document.getElementById('imageCounter');
  counter.textContent = `${currentImageIndex + 1} / ${imageList.length}`;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const modal = document.getElementById('imageModal');
  if (modal && modal.style.display === 'flex') {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - show next image
        showNextImage();
      } else {
        // Swipe right - show previous image
        showPrevImage();
      }
    }
  }
}