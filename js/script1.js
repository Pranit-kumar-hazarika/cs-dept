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
  
 function openDeptTab(tabId) {
  const tabs = document.querySelectorAll('.pill-tab');
  const sections = document.querySelectorAll('.tab-content-section');
  const highlight = document.getElementById('tabHighlighter');

  tabs.forEach(btn => btn.classList.remove('active'));
  sections.forEach(sec => sec.classList.remove('active'));

  const clickedBtn = document.querySelector(`[onclick="openDeptTab('${tabId}')"]`);
  clickedBtn.classList.add('active');
  document.getElementById(tabId).classList.add('active');

  // Hide all faculty boxes unless we're on the faculty tab
  if (tabId !== 'faculty') {
    document.querySelectorAll('.faculty-info-box').forEach(box => box.classList.remove('active'));
  } else {
    showProfessor('jayanta'); // Show default professor
  }

  // Hide student list unless we're on the student tab
  const studentCards = document.querySelectorAll('.student-entry');
  studentCards.forEach(card => {
    card.style.display = (tabId === 'students') ? 'flex' : 'none';
  });

  // Move tab highlight
  const container = document.querySelector('.tab-pill-container');
  const btnRect = clickedBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  highlight.style.width = `${btnRect.width}px`;
  highlight.style.left = `${btnRect.left - containerRect.left}px`;
}
  // Auto-position highlight on load
  window.addEventListener('load', () => {
    openDeptTab('faculty');
  });

  function toggleProfile(card) {
    // Close other open cards (optional)
    document.querySelectorAll('.faculty-card').forEach(c => {
      if (c !== card) c.classList.remove('open');
    });

    // Toggle clicked card
    card.classList.toggle('open');
  }

  function showProfessor(profId) {
    const boxes = document.querySelectorAll('.faculty-info-box');
    boxes.forEach(box => box.classList.remove('active'));
    document.getElementById('prof-' + profId).classList.add('active');
  } 

  function showProfessor(profId) {
    document.querySelectorAll('.faculty-info-box').forEach(box => box.classList.remove('active'));
    document.getElementById('prof-' + profId).classList.add('active');
  }

  function showProfessor(profId) {
    document.querySelectorAll('.faculty-info-box').forEach(box => box.classList.remove('active'));
    document.getElementById('prof-' + profId).classList.add('active');
  }

  function setupSlides() {
    document.querySelectorAll('.slideshow-container').forEach(container => {
      const slides = container.querySelectorAll('.slide-image');
      let index = 0;
      if (slides.length === 0) return;
      slides[index].classList.add('active');

      setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
      }, 3000);
    });
  }
  window.addEventListener('load', setupSlides);