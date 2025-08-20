// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Modal open/close logic
  const joinBtn = document.getElementById("joinBtn");
  const joinModal = document.getElementById("joinModal");
  const closeModal = document.getElementById("closeModal");
  
  if (joinBtn && joinModal) {
    joinBtn.addEventListener("click", () => {
      joinModal.style.display = "block";
    });
  }
  
  if (closeModal && joinModal) {
    closeModal.addEventListener("click", () => {
      joinModal.style.display = "none";
    });
  }
  
  if (joinModal) {
    window.addEventListener("click", (event) => {
      if (event.target === joinModal) {
        joinModal.style.display = "none";
      }
    });
  }
  
  // Auto-position highlight on load
  openDeptTab('faculty');
  
  // Setup slideshow if exists
  setupSlides();
  
  // Hide preloader when page is fully loaded
  window.addEventListener('load', function() {
    const loader = document.getElementById('preloader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  });
});

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  }
}

// Tab switching functionality
function openDeptTab(tabId) {
  const tabs = document.querySelectorAll('.pill-tab');
  const sections = document.querySelectorAll('.tab-content-section');
  const highlight = document.getElementById('tabHighlighter');
  
  if (!tabs.length || !sections.length || !highlight) return;
  
  // Remove active class from all tabs and sections
  tabs.forEach(btn => btn.classList.remove('active'));
  sections.forEach(sec => sec.classList.remove('active'));
  
  // Add active class to clicked tab and corresponding section
  const clickedBtn = document.querySelector(`[onclick="openDeptTab('${tabId}')"]`);
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }
  
  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Move tab highlight
  const container = document.querySelector('.tab-pill-container');
  if (container && clickedBtn) {
    const btnRect = clickedBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    highlight.style.width = `${btnRect.width}px`;
    highlight.style.left = `${btnRect.left - containerRect.left}px`;
  }
}

// Setup slideshow if exists
function setupSlides() {
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  if (slideshowContainers.length === 0) return;
  
  slideshowContainers.forEach(container => {
    const slides = container.querySelectorAll('.slide-image');
    if (slides.length === 0) return;
    
    let index = 0;
    slides[index].classList.add('active');
    
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 3000);
  });
}